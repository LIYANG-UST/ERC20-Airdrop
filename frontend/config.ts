// Types
type IConfig = {
  decimals: number;
  airdrop: Record<string, number>;
};

// Config from generator
const config: IConfig = {
  decimals: 18,
  airdrop: {
    "0x016C8780e5ccB32E5CAA342a926794cE64d9C364": 10,
    "0x109f93893af4c4b0afc7a9e97b59991260f98313": 100,
    "0xaed009c79e1d7978fd3b87ebe6d1f1fa3c542161": 20,
  },
};

// Export config
export default config;
