// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract SimpleStorage {
    string private message;

    event MessageChanged(string oldMessage, string newMessage);

    function setMessage(string calldata newMessage) public {
        string memory oldMessage = message;
        message = newMessage;
        emit MessageChanged(oldMessage, newMessage);
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
