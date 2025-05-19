import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const EquidadeGeneroCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/engEquidadeGenero.svg"}
          alt={"Gender Equity Subcard (EN)"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/EquidadeGenero.svg"}
          alt={"Subcartão Equidade de Gênero (PT)"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default EquidadeGeneroCard;
