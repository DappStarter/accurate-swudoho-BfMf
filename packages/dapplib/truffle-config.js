require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gesture brand tail tooth blanket crater remind humble install casino sure taste'; 
let testAccounts = [
"0x15477e3006ecd13dfeb556e5342bc47055b5a249360584c033f9de7d8055e495",
"0xc376efd6e0dc5e5c512e0f8039928321456558b0adf6642049c0afcba4625c4f",
"0x038546e7e5f952352d7c2df7d99e9f942cf59695392b14fcb5366818aba6b52e",
"0xe94a4791f8fbd30e71aefbf0e1ea6ff1ec1e3493dc418a19badaf57f468fd5c5",
"0xd47a53d21e987339c95d308eb20373520c8a3b98b99e4856fff7c841113f3a9a",
"0x62b2ae0234f1ace0db896ad24d098d1f9b14e5ced03c4152fadf7b64a78319c6",
"0x0d7a3fa731ef11e5e7eed160a410020e333a4b2cbdf2d697a0a69ffe33d9faf0",
"0xfb92f2ddff0f2ed63dac047c224262c27526e663f3cc3c0550f10e78acc6f558",
"0x1c771d292cf68939a8c2e96e58975874bed3ddd4862e6df1c7a90c84224e9536",
"0xd6ee90fd4895e171d47ac49854fff86c72e2005ffa879910ef8feb840f6b7887"
]; 
let devUri = 'https://api.avax-test.network/ext/bc/C/rpc';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                6, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 8000000,
            network_id: '*',
            chainId: 43113,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};


