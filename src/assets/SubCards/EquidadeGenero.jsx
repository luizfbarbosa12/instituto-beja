import { useContext, useEffect } from "react";
import { GlobalContext } from "../../context/GlobalContext";

const EquidadeGeneroCard = () => {
  const { language } = useContext(GlobalContext);

  useEffect(() => {}, [language]);
  return (
    <>
      {language ? (
        <img
          src={"/assets/EquidadeGenero.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      ) : (
        <img
          src={"/assets/engEquidadeGenero.svg"}
          alt={"Sub card"}
          className='h-6 w-fit max-sm:h-3'
        />
      )}
    </>
  );
};

export default EquidadeGeneroCard;
