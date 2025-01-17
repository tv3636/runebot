import { AppConfig } from '../types';

export default (): AppConfig => ({
  wizards: {
    tokenContract: process.env.WIZARD_CONTRACT,
    openSeaSlug: process.env.WIZARD_OPENSEA_SLUG,
    ipfsBaseURI: process.env.WIZARD_IPFS_BASE_URI,
    openSeaBaseURI: process.env.WIZARD_OPENSEA_BASE_URI,
  },
  discord: {
    token: process.env.DISCORD_BOT_TOKEN,
    salesChannelId: process.env.DISCORD_SALES_CHANNEL_ID || "",
    prefix: process.env.DISCORD_PREFIX || "#",
  },
  ethereum: {
    network: process.env.ETHEREUM_NETWORK,
    url: process.env.ETHEREUM_URL,
  },
  twitter: {
    consumerKey: process.env.TWITTER_CONSUMER_KEY,
    consumerSecret: process.env.TWITTER_CONSUMER_SECRET,
    accessTokenKey: process.env.TWITTER_ACCESS_KEY,
    accessTokenSecret: process.env.TWITTER_ACCESS_SECRET,
  },
});
