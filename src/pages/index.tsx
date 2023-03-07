import Head from "next/head";
import { Inter } from "@next/font/google";
import { useContract, useContractRead, useContractReads } from "wagmi";

import Header from "components/header";
import FloatLine from "components/floatline";
import AboutMe from "components/about-me";
import Projects from "components/projects";
import Layout from "components/layout";
import { website } from "utils/contracts";
import { useMemo } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const { data } = useContractReads({
    contracts: [
      {
        ...website,
        functionName: "title",
      },
      {
        ...website,
        functionName: "description",
      },
    ],
  });

  const title = useMemo(() => {
    const title: string = data && data[0] ? data[0].toString() : "";
    return title.split("");
  }, [data]);

  return (
    <>
      <Layout>
        <FloatLine
          title={title.map((t, i) => (
            <span>
              {t}
              {t === "," && <br />}
            </span>
          ))}
        />
        <AboutMe />
        <Projects />
      </Layout>
    </>
  );
}
