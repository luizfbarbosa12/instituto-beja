const Bush = "/assets/folhas.png";
import { useContext } from "react";
import { Trans } from "react-i18next";
import { GlobalContext } from "../../context/GlobalContext";

const ManifestSection = () => {
  const { language } = useContext(GlobalContext);

  return (
    <div className='relative flex flex-col items-center gap-12 w-full bg-porcelain overflow-hidden pb-40'>
      <div className={"z-10 mx-0 w-full"}>
        <div className='flex justify-between [&>p]:leading-none editorial text-2xl pb-7 mx-6'>
          <p>
            www.
            <br />
            institutobeja.org
          </p>
          <p>
            (O)
            <br />
            <Trans i18nKey='manifest.since' />
          </p>
        </div>

        <div className='flex w-full flex-center tablet:w-full z-10'>
          <div
            style={{ backgroundImage: "url('/assets/ManifestBg.png')" }}
            className='flex items-center bg-size-[auto_100%] bg-position-[70%_50%] bg-no-repeat py-48 flex-col justify-center h-full w-full px-6 gap-5 tablet:gap-12 text-porcelain'
          >
            <h1 className='text-[28px] tablet:text-6xl editorial text-left mr-0 tablet:mr-[85px]'>
              <Trans i18nKey='manifest.title' />
            </h1>

            <p className='text-sm leading-[160%] tablet:text-2xl tablet:leading-10'>
              <>
                <Trans i18nKey='manifest.text' />
              </>
            </p>
          </div>
        </div>
      </div>

      <img
        src={Bush}
        alt='Bush image'
        className='absolute  not-tablet:scale-130 bottom-12 -right-30 tablet:-right-90 tablet:bottom-0 pointer-events-none'
      />
    </div>
  );
};

export default ManifestSection;
