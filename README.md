# Adamur Tribe - 12 Nights of Code: Starter Project

Welcome to the starter project for the "12 Nights of Code" class! This project will guide you through setting up and running a simple Ethereum development environment using Hardhat, along with other essential tools like Solidity, Waffle, and more.

## Prerequisites

Before you start, ensure you have the following installed on your machine:

- **Node.js** (LTS version) [Download Node.js](https://nodejs.org/)
- **Yarn** (Recommended for package management) [Install Yarn](https://yarnpkg.com/getting-started/install)
- **Git** [Download Git](https://git-scm.com/)

### Optional but Recommended:
- **Visual Studio Code (VS Code)** [Download VS Code](https://code.visualstudio.com/)

---

## Setting Up the Project

### 1. Clone the Repository

Clone this repository to your local machine using Git:

```
git clone https://github.com/KibokoDao-Africa/Adamur-Tribe-12-Nights-of-Code.git
```

## Navigate to the project directory:

```
cd Adamur-Tribe-12-Nights-of-Code
```
## 2. Install Project Dependencies

Install the required dependencies using Yarn (recommended):
```
yarn install
```

Alternatively, if you're using npm, you can install the dependencies with:
```
npm install
```

## 3. Set Up Hardhat Environment

Hardhat is a development framework for Ethereum. After installing dependencies, make sure everything is set up correctly.

To verify Hardhat is installed, run:

```
npx hardhat
```

You should see the Hardhat console output.

### Configuration

## 4. Set Up Environment Variables

You need to set up your .env file to store sensitive information like your Infura or Alchemy API keys and wallet private key.

1. Create a .env file in the root of your project.


2. Add the following entries, replacing with your own values:

```

INFURA_API_KEY=your_infura_api_key
PRIVATE_KEY=your_wallet_private_key
SEPOLIA_RPC_URL=https://sepolia.infura.io/v3/your_infura_project_id
```

If you're using other RPC providers, you can replace the URLs accordingly.


---

### Running the Project

## 5. Compile Smart Contracts

To compile your smart contracts, run:

npx hardhat compile

## 6. Running Tests

To run tests for your smart contracts, use:
```
npx hardhat test
```

## 7. Deploy to Sepolia Testnet

To deploy the smart contract to the Sepolia testnet, you can use the following command:
```
npx hardhat run scripts/deploy.js --network sepolia
```

This will deploy your smart contract to Sepolia. Make sure you have configured the sepolia network in your hardhat.config.js file.

## 8. Interacting with Your Contracts

Once deployed, you can interact with your smart contracts directly through Hardhat's console:
```
npx hardhat console --network sepolia
```

---

### Troubleshooting

If you run into issues with dependencies or node versions, try deleting the node_modules folder and package-lock.json (or yarn.lock if you're using Yarn), then reinstall the dependencies:

```
rm -rf node_modules package-lock.json yarn.lock
yarn install
```

If you face authentication issues during deployment, ensure that your wallet's private key and RPC URL are correctly configured in the .env file.



---

### Contributing

Feel free to fork this repository and make changes to improve the project or share your progress with the community. If you have suggestions or improvements, open an issue or submit a pull request!


---

### License

This project is licensed under the MIT License - see the LICENSE file for details.



