import * as Icon from "@phosphor-icons/react";
import { memo } from "react";

const GoldGlobe = "/assets/cutedGoldGlobe.webp";

function DownloadButton() {
  return (
    <a
      href='/BEJA_Relatorio-PT.pdf'
      download
      className='flex items-center gap-2 tablet:gap-4 z-10 px-8'
    >
      <div className='h-8 w-8 tablet:h-10 tablet:w-10 rounded-full bg-rose p-2 flex-center'>
        <Icon.ArrowDown className='size-8 tablet:*:size-10' />
      </div>

      <p className='text-base leading-[100%] text-rose'>
        Faça Download do Relatório Anual 2024 em PDF aqui.
      </p>
    </a>
  );
}

const FirstSection = () => {
  return (
    <div className='bg-bourdeaux w-full flex flex-col min-h-screen relative overflow-hidden'>
      <div className='flex w-full justify-between px-8 tablet:px-10 pt-15 tablet:pt-4'>
        <p className='mt-4 tablet:mt-0 editorial text-porcelain text-2xl leading-[100%] tablet:text-4xl tablet:max-w-75 max-w-50 tablet:leading-14'>
          Relatório Anual 2024
        </p>

        <div className='size-10 bg-rose rounded-full flex-center flex-col gap-1 font-bold'>
          PT
        </div>
      </div>

      <div className='relative w-full h-[64vh] tablet:h-[40vh] flex mt-16 '>
        <img
          src='/assets/LOGO-16.png'
          alt='Logo Beja Labs'
          className='absolute w-full z-10 -mt-8 max-w-290'
        />
        <img
          src={GoldGlobe}
          fetchPriority='high'
          loading='eager'
          alt='Gold Globe'
          className='absolute h-[60vh] w-auto max-w-fit top-2 -right-40 tablet:-right-22 tablet:h-[80vh]'
        />
      </div>
      <DownloadButton />
    </div>
  );
};

export default memo(FirstSection);
