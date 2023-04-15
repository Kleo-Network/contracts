// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract BrowniePoints {

    struct organisation {
         string uri; // extra organisation data that needs to be stored. 
         uint id;
         string ipfs_hash;
         uint stakeAmount;
    }
    struct brownie {
        string keyword; // index keyword
        uint256 x; // x times 
        uint256 y; // y number of days 
        bytes intent; // stores the intent of the data used. 
    }
    mapping(address => mapping(uint256 => brownie[])) brownieMaps;
    mapping(address => organisation[]) organisationMaps;
    address ERC20Token;
    uint minAmount;
    mapping(address => uint) brownieCounter;
    
    constructor(address _erc20, uint _minAmount) {
        token = Token(_erc20);
        minAmount = _minAmount;
    }

    function createOrganisation(string _uri, uint _id, string _ipfs )
        external
        nonReentrant
        payable
    {
        //require(msg.value > minAmount); check for decimals post hackathon bro
        
        //console.log("sender address", msg.sender);
        //console.log("balance of sender", token.balanceOf(msg.sender));
        organisationMaps[msg.sender].uri = _uri;
        organisationMaps[msg.sender].stakeAmount = msg.value;
        organisationMaps[msg.sender].id = _id;
        organisationMaps[msg.sender].ipfs_hash = _ipfs;
        brownieCounter[msg.sender] = 0;
    }

}
