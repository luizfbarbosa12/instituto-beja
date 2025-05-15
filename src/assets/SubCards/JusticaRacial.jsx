import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const JusticaRacialCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/JusticaRacial.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/engJusticaRacial.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default JusticaRacialCard;
