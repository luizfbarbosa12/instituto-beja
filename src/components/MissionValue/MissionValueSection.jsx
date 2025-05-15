import MVCard from "./MVCard";
import { useContext } from "react";
import Wrapper from "../ui/Wrapper";
import { Trans } from "react-i18next";
import { motion } from "framer-motion";
const ProudHand = "/assets/Ilustracao-4.png";
const Mountains = "/assets/Ilustracao-1.webp";
const Clouds = "/assets/ilustracao-nuvens.png";
import { GlobalContext } from "../../context/GlobalContext";

const MissionValueSection = () => {
  const { language } = useContext(GlobalContext);

  return (
    <div className='relative not-tablet:pt-20 tablet:pt-40'>
      <img src={Clouds} alt='Cloud image' className='absolute z-10 right-0' />

      <Wrapper className='mx-6'>
        <div className='flex flex-col relative bg-porcelain gap-25 py-40 tablet:pt-100'>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            }}
            className='z-10'
          >
            <MVCard
              title={<Trans i18nKey='missionValue.card1.title' />}
              text={<Trans i18nKey='missionValue.card1.text' />}
            />
          </motion.div>

          <div className='flex justify-end'>
            <motion.div
              className='pl-24 tablet:pl-64 z-20'
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
            >
              <MVCard
                title={<Trans i18nKey='missionValue.card2.title' />}
                text={<Trans i18nKey='missionValue.card2.text' />}
              />
            </motion.div>
          </div>

          <div className='flex relative'>
            <img
              src={ProudHand}
              alt='Proud hand image'
              className='absolute h-68 tablet:h-[46rem] left-0 top-6 tablet:top-12 -translate-y-1/1'
            />

            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{
                duration: 4,
                repeat: Infinity,
                repeatType: "reverse",
                ease: "easeInOut",
              }}
              className='z-10'
            >
              <MVCard
                title={<Trans i18nKey='missionValue.card3.title' />}
                text={<Trans i18nKey='missionValue.card3.text' />}
              />
            </motion.div>
          </div>
        </div>
      </Wrapper>

      <img src={Mountains} alt='Mountains image' className='right-0 bottom-0' />
    </div>
  );
};

export default MissionValueSection;
