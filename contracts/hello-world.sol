pragma solidity ^0.5.0;

contract HelloWorld {
    string message;

    function setMessage(string memory _message) public {
        message = _message;
    }

    function getMessage() public view returns (string memory) {
        return message;
    }
}
