import "styles/globals.css";
import "styles/circles.css";
import type { AppProps } from "next/app";

import {
  EthereumClient,
  modalConnectors,
  walletConnectProvider,
} from "@web3modal/ethereum";

import { getDefaultProvider } from "ethers";

import { Web3Modal } from "@web3modal/react";

import { WagmiConfig, configureChains, createClient } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import chains from "utils/chains";
import NoSSR from "react-no-ssr";

// don't forget the styles
import "@animated-burgers/burger-squeeze/dist/styles.css";

export default function App({ Component, pageProps }: AppProps) {
  const projectId: string = process.env.NEXT_PUBLIC_PROJECT_ID ?? "";

  const { provider } = configureChains(chains, [
    walletConnectProvider({ projectId }),
    publicProvider(),
  ]);

  const wagmiClient = createClient({
    autoConnect: true,
    connectors: modalConnectors({
      projectId,
      version: "1",
      appName: "web3Modal",
      chains,
    }),
    provider,
  });

  const ethereumClient = new EthereumClient(wagmiClient, chains);

  return (
    <>
      <NoSSR>
        <WagmiConfig client={wagmiClient}>
          <Component {...pageProps} />
          {projectId && (
            <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
          )}
        </WagmiConfig>
      </NoSSR>
    </>
  );
}
