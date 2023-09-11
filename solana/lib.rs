use anchor_lang::prelude::*;
use anchor_lang::solana_program::entrypoint::ProgramResult;

declare_id!("HhHj2W1hRFmQtW2cpR1PPJD88k2tcc9fMRHyV1jhYsCQ");

#[program]
pub mod kleo_sol {

    use super::*;

    pub fn create_organisation(
        ctx: Context<CreateOrg>,
        name: String,
        intent: String,
        website: String,
    ) -> ProgramResult {
        let org_account = &mut ctx.accounts.org_account;
        let authority = &mut ctx.accounts.authority;

        org_account.name = name;
        org_account.intent = intent;
        org_account.website = website;

        org_account.authority = authority.key();

        emit!(OrganisationEvent {
            name: org_account.name.to_string(),
            website: org_account.website.to_string(),
            intent: org_account.intent.to_string()
        });

        Ok(())
    }

}

#[derive(Accounts)]
pub struct CreateOrg<'info> {
    #[account(init, payer = authority, space = 8 + 2048 + 20 + 20 + 2048 + 4 + 8 + 8)]
    pub org_account: Account<'info, Organisation>,
    #[account(mut)]
    pub authority: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[event]
pub struct OrganisationEvent {
    pub name: String,   // 20
    pub intent: String, // 2048
    pub website: String, // 20
                        // pub kleo: Vec<CookieBlock>, // 552? => 2048
}

#[account]
pub struct Organisation {
    intent: String,           // 2048
    website: String,          // 20
    balance: u32,             // 4
    name: String,             // 20
    kleo: Vec<CookieBlock>,   // M * (24N + 20)
    pub authority: Pubkey,    // 8
    pub pre_post_key: Pubkey, // 8
}

#[account]
pub struct CookieBlock {
    title: String,        //20
    cookies: Vec<Cookie>, // 24 * N
}
#[account]
pub struct Cookie {
    keyword: String, //20
    x: u16,          // 2
    y: u16,          // 2
}
