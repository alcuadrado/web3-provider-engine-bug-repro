const Web3 = require("web3");
const ProviderEngine = require("web3-provider-engine");
const Web3Subprovider = require("web3-provider-engine/subproviders/web3.js");

const web3Provider = new Web3.providers.HttpProvider("http://localhost:8545");

const engine = new ProviderEngine();
engine.addProvider(new Web3Subprovider(web3Provider));
engine.start();
