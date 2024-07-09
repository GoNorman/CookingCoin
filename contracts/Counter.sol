// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Counter {
    int256 private count;

    // Constructor to initialize the counter to zero
    constructor() {
        count = 0;
    }

    // Function to get the current count
    function getCount() public view returns (int256) {
        return count;
    }

    // Function to increment the count
    function increment() public {
        count += 1;
    }

    // Function to decrement the count
    function decrement() public {
        count -= 1;
    }
}
