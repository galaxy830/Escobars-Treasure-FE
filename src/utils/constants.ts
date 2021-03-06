export const CONTRACT_ADDRESS = "0xdE369c910892592a33CbB6472b63988F87e9732E";
export const INFURA_KEY = "e632a702eec64a4d867d65d8923d4309";

export const configNetwork = "mainnet";

export let trxExplorerBaseUrl = "https://etherscan.io/tx/";

// if (configNetwork == "rinkeby") {
//   trxExplorerBaseUrl = "https://rinkeby.etherscan.io/tx/";
// }

export const WalletTypes = {
  default: 0,
  metamask: 1,
  walletConnect: 2,
  authereum: 3,
  burnerConnect: 4,
  uniLogin: 5,
  mewWallet: 6
};

export const Config = {
  ropsten: {
    etherscanLink: "https://ropsten.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "287b5d14c20f4b7d9411d165fac6a688"
  },
  mainnet: {
    etherscanLink: "https://etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "c7a95b91ffae44e3b7fb80d9fbb98939"
  },
  rinkeby: {
    etherscanLink: "https://rinkey.etherscan.io",
    defaultGasPrice: "15",
    transactionText: "Transaction Pending",
    coinGeckoApi: "https://api.coingecko.com/api/v3/coins",
    infuraId: "c7a95b91ffae44e3b7fb80d9fbb98939"
  }
};

export const getConfig = () => {
  return Config[configNetwork];
};
