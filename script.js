try {
  await window.ethereum.request({
    method: 'wallet_switchEthereumChain',
    params: [{ chainId: '0x2710' }],
  });
} catch (switchError) {
  if (switchError.code === 4902) {
    try {
      await window.ethereum.request({
        method: 'wallet_addEthereumChain',
        params: [{
          chainId: '0x2710',
          chainName: 'SmartBch Mainnet',
          blockExplorerUrls: ['https://www.smartscan.cash/'],
          rpcUrls: ["https://smartbch.fountainhead.cash/mainnet:8545", "https://smartbch.greyh.at:8545", "https://rpc.uatvo.com:8545"],
          nativeCurrency: {
            name: 'BCH',
            symbol: 'BCH',
            decimals: 18,
          },
        }],
      });
    } catch (addError) {
      console.error("Failed to add");
    }
  }
}
