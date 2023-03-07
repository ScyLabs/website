import websiteAbi from "./website.json";

type ContractConfig = {
  address: any;
  abi: any;
};
export const website: ContractConfig = {
  address: `0x4ed7c70F96B99c776995fB64377f0d4aB3B0e1C1`,
  abi: websiteAbi,
};
