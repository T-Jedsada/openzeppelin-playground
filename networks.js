require("dotenv").config({
  path: require("path").join(__dirname, ".env.truffle.local"),
});

var HDWalletProvider = require("truffle-hdwallet-provider");

function getProvider(networkUrl) {
  return new HDWalletProvider(process.env.NMEMONIC, networkUrl);
}

module.exports = {
  networks: {
    development: {
      protocol: "http",
      host: "localhost",
      port: 8545,
      gas: 5000000,
      gasPrice: 5e9,
      networkId: "*",
    },
  },
};
