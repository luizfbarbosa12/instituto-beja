import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const FilantropandoCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language === 'en' ? (
        <img
          src={"/assets/engFilantropiaSubCard.svg"}
          alt={"Philanthropy Subcard (EN)"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/FilantropiaSubCard.svg"}
          alt={"Subcartão Filantropia (PT)"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default FilantropandoCard;
