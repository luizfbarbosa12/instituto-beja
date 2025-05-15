import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const FilantropandoCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/FilantropiaSubCard.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/engFilantropiaSubCard.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default FilantropandoCard;
