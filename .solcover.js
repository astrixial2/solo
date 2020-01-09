module.exports = {
  compileCommand: 'npm run build',
  copyPackages: ['openzeppelin-solidity', '@dydxprotocol/exchange-wrappers'],
  skipFiles: [
    'testing/',
    'external/multisig/MultiSig.sol',
    'external/multisig/DelayedMultiSig.sol',
    'Migrations.sol'
  ],
  testCommand: 'npm run test_cov',
  testrpcOptions: '-d -k=istanbul -p 8555 -i 1002',
};
