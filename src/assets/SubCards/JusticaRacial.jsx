import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const JusticaRacialCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/engJusticaRacial.svg"}
          alt={"Racial Justice Subcard (EN)"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/JusticaRacial.svg"}
          alt={"Subcartão Justiça Racial (PT)"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default JusticaRacialCard;
