pragma solidity ^0.5.17;

import "@openzeppelin/upgrades/contracts/Initializable.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts-ethereum-package/contracts/token/ERC20/ERC20Detailed.sol";

contract SGDx is Initializable, ERC20, ERC20Detailed {

    function initialize(uint256 initialSupply) public initializer {
        ERC20Detailed.initialize("SGDx", "SGDx", 18);
        _mint(msg.sender, initialSupply);
    }

}