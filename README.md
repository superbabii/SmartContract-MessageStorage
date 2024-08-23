# SmartContract-MessageStorage

## Overview

This repository contains a simple Ethereum smart contract written in Solidity. The contract, named `SimpleStorage`, allows users to store and retrieve a message on the Ethereum blockchain. This project serves as a foundational example for learning and understanding Ethereum smart contracts and Solidity development.

## Project Structure

- `contracts/`: Contains the Solidity smart contract files.
  - `SimpleStorage.sol`: The main smart contract code.
- `migrations/`: Contains migration scripts for deploying contracts.
  - `1_initial_migration.js`: Initial migration script for deploying the `SimpleStorage` contract.
- `test/`: Contains test scripts for the smart contract.
  - `simpleStorageTest.js`: Tests for verifying the functionality of the `SimpleStorage` contract.
- `truffle-config.js`: Configuration file for Truffle.
- `package.json`: Project metadata and dependencies.

## Getting Started

### Prerequisites

- Node.js (v12 or later)
- npm (v6 or later)
- Truffle framework
- Ganache CLI or a local Ethereum blockchain environment

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/superbabii/SmartContract-MessageStorage.git
    cd SmartContract-MessageStorage
    ```

2. Install project dependencies:

    ```bash
    npm install
    ```

3. Start a local Ethereum blockchain using Ganache CLI:

    ```bash
    npx ganache-cli
    ```

### Compile the Smart Contract

Compile the smart contract using Truffle:

```bash
npx truffle compile
```

### Deploy the Smart Contract

Deploy the smart contract to your local blockchain:

```bash
npx truffle migrate
```

### Run Tests

Execute the tests to ensure the smart contract functions correctly:

```bash
npx truffle test
```

## Usage

### Interacting with the Contract

You can interact with the deployed smart contract using Truffle Console:

1. Open the Truffle Console:

    ```bash
    npx truffle console
    ```

2. Retrieve an instance of the deployed contract:

    ```javascript
    const instance = await SimpleStorage.deployed();
    ```

3. Set a new message:

    ```javascript
    await instance.setMessage("Hello, Blockchain!");
    ```

4. Get the current message:

    ```javascript
    const message = await instance.getMessage();
    console.log(message); // Output: "Hello, Blockchain!"
    ```

## Contributing

Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [Solidity Documentation](https://docs.soliditylang.org/)
- [Truffle Suite](https://www.trufflesuite.com/)
- [Ganache CLI](https://www.trufflesuite.com/ganache)
