import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const ForDemocracy = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language === 'en' ? (
        <img
          src={"/assets/engPelaDemocracia2.svg"}
          alt={"For Democracy Subcard (EN)"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/PelaDemocracia2.svg"}
          alt={"Subcartão Pela Democracia (PT)"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default ForDemocracy;
