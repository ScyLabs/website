import { useContractReads } from "wagmi";
import { website } from "utils/contracts";
import { useMemo } from "react";

const FloatLine = () => {
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
  console.log("🚀 ~ file: floatline.tsx:18 ~ FloatLine ~ data", data);

  const title = useMemo(() => {
    const title: string = data && data[0] ? data[0].toString() : "";
    return title.split("");
  }, [data]);

  return (
    <div className="p-24  justify-center text-4xl md:text-6xl  h-screen">
      <h1>
        {title.map((t, i) => (
          <span>
            {t}
            {t === "," && <br />}
          </span>
        ))}
      </h1>
      <div className="wrap">
        {[...new Array(300)].map(() => (
          <span className="c"></span>
        ))}
      </div>
    </div>
  );
};

export default FloatLine;
