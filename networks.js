const HDWalletProvider = require('truffle-hdwallet-provider')
const PrivateKeyProvider = require("truffle-privatekey-provider")

module.exports = {
  networks: {
    development: {
      protocol: 'http',
      host: 'localhost',
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: '*',
    },
    // Useful for deploying to a public network.
    // NB: It's important to wrap the provider as a function.
    ropsten: {
      provider: () => new HDWalletProvider(process.env.MNEMONIC, 'https://ropsten.infura.io/v3/36acd32baa044780a4c1e8326547bf6f', 0, 5),
      // provider: () => new PrivateKeyProvider(process.env.PRIVATEKEY, 'https://ropsten.infura.io/v3/36acd32baa044780a4c1e8326547bf6f', 0, 5),
       network_id: 3,       // Ropsten's id
      // gas: 5500000,        // Ropsten has a lower block limit than mainnet
      // confirmations: 2,    // # of confs to wait between deployments. (default: 0)
      // timeoutBlocks: 200,  // # of blocks before a deployment times out  (minimum/default: 50)
      // skipDryRun: true     // Skip dry run before migrations? (default: false for public nets )
    },
  },
};
