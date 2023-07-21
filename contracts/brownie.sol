// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.9;

// Uncomment this line to use console.log
// import "hardhat/console.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/utils/math/SafeMath.sol";
import "hardhat/console.sol";

contract BrowniePoints is ReentrancyGuard {
   
   
    struct organisation {
         uint id;
         string uri;
    }
    struct brownie {
        string keyword; // index keyword
        uint256 x; // x times 
        uint256 y; // y number of days 
        bytes intent; // stores the intent of the data used. 
    }
    mapping(address => mapping(uint256 => brownie)) brownieMaps;
    mapping(address => organisation) organisationMaps;
    mapping(address => uint) brownieCounter;


    constructor() {
        
    }

    function createOrganisation(string memory _uri, uint _id )
        external
        nonReentrant
        payable
    {
        organisationMaps[msg.sender].uri = _uri;
        organisationMaps[msg.sender].id = _id;
        brownieCounter[msg.sender] = 0;
       
    }

    function createBrownies(brownie[] memory brownies) external nonReentrant payable {
         uint j = brownieCounter[msg.sender];
         uint arrayLength = brownies.length;
         for(uint i=0;i<arrayLength;i++){
            brownieMaps[msg.sender][j+i] = brownies[i];
         }
         brownieCounter[msg.sender] =  j + arrayLength;
    } 


}
