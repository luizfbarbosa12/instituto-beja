import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ForDemocracy = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/PelaDemocracia2.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/engPelaDemocracia2.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default ForDemocracy;
