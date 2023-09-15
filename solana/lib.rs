use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("EhwGf66dtj21pr2EY4BPebnnpYBTP5wZetdifBCoU6hT");

#[program]
pub mod kleo_sol {

    use super::*;

    pub fn create_organisation(
        ctx: Context<CreateOrg>,
        name: String,
        intent: String,
        website: String,
        titles: [String; 45],
        keywords: [String; 45],
        days: [u16; 45],
        times: [u16; 45],
    ) -> ProgramResult {
        let org_account = &mut ctx.accounts.org_account;
        let authority = &mut ctx.accounts.authority;

        org_account.name = name;
        org_account.intent = intent;
        org_account.website = website;
        let mut index = 0;
        for item in keywords.iter().zip(titles.iter()) {
            let (keyword, title) = item;
            let new_cookie = Cookie {
                keyword: String::from(keyword),
                x: days[index] as u16,
                y: times[index] as u16,
                title: String::from(title),
            };
            org_account.kleo[index as usize] = new_cookie;
            index += 1;

        }

       

        org_account.authority = authority.key();

        emit!(OrganisationEvent {
            name: org_account.name.to_string(),
            website: org_account.website.to_string(),
            intent: org_account.intent.to_string(),
        });

        Ok(())
    }

}

#[derive(Accounts)]
pub struct CreateOrg<'info> {
    #[account(init, payer = authority, space = 8 + 2048 + 20 + 20 + 1024 + 4 + 8 + 8)]
    pub org_account: Account<'info, Organisation>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[event]
pub struct OrganisationEvent {
    pub name: String,    // 20
    pub intent: String,  // 2048
    pub website: String, // 20
    //pub kleo: [Cookie; 45] // 1980
}

#[account]
pub struct Organisation {
    intent: String,           // 2048
    website: String,          // 20
    balance: u32,             // 4
    name: String,             // 20
    kleo: [Cookie; 45],       // (44 * 45) => 1980
    pub authority: Pubkey,    // 8
    pub pre_post_key: Pubkey, // 8
}

#[derive(AnchorSerialize, AnchorDeserialize, Clone, Debug)]
pub struct Cookie {
    keyword: String, //20
    x: u16,          // 2
    y: u16,          // 2
    title: String,   // 20
}
