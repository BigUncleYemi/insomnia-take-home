export const parseAddress = (address: string) =>
  `${address[0]}${address[1]}${address[2]}${address[3]}.....${address[38]}${address[39]}${address[40]}${address[41]}`;

export const convertIPFSLink = (link: string) => {
  if (link.startsWith("ipfs://")) {
    return link.replace("ipfs://", "https://ipfs.io/");
  }
  return link;
};
