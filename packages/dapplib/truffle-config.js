require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess nature swift undo name raise place modify hover another army gate'; 
let testAccounts = [
"0x6f2d6ff9d8e9e535b1560e2beaed602feda4b76ce20803729e24ef36e109b823",
"0xefaadd9825eb56c5267438b034e96e7191767a8f398721534bb41c2566dbafd4",
"0x9d4358526b29f80760ade58164976c24332e54d5c1365e8915b3327d8d956b55",
"0x18a15ff5895238361128749477aa0c711416a8ef421d4bf2a3aacb0403395184",
"0x0604ccfcf6d670997ae07937bf2b9d6b940411724a9ccb2540c2b9b26c0a463e",
"0xa1bc4a56e17b2edb597ab348a3edc303e3ab313e2fc2d5c56155d429ce95b26b",
"0x57cfa3224e0da7df757f2d7b3782c6d49bcecefbae6678a1082921fd0158c8da",
"0xa9d0474652c9b17814be5f4daf76a8881990ceda469de69f8d93c4a33cae82e3",
"0xea2d358a8fe60f5d511fa5990baf937bcf8ae5f2ead5b5ab0327452d1af1a15a",
"0x9c902afbd7a92704a1e34a15d30bd6b7ea2fbd30d2d4b7a53dadcbe77c5ff4d3"
]; 
let devUri = 'http://127.0.0.1:7545/';

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
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

