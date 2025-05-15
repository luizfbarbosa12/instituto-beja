import { Trans, useTranslation } from "react-i18next";

const Expediente = () => {
  const [t] = useTranslation();
  return (
    <div className='bg-rose p-8 md:p-12 pb-100 min-h-screen relative'>
      <div className='absolute bottom-0 w-1/2 h-1/2 md:h-full pointer-events-none right-0 md:left-0'>
        <img
          src='/assets/folhas.png'
          alt='Decorative golden leaf pattern'
          className='w-full h-full object-contain object-right-bottom md:object-left-bottom'
        />
      </div>

      <div className='flex justify-between relative z-20'>
        <div>
          <p className='text-sm font-serif'>
            www.
            <br />
            institutobeja.org
          </p>
        </div>
        <div className='text-right'>
          <p className='text-sm font-serif'>
            (O)
            <br />
            <Trans i18nKey='schedule.copyright' />
          </p>
        </div>
      </div>

      <div className='absolute bottom-48 left-8 right-8 md:hidden z-20 flex flex-col items-start space-y-4'>
        <h1 className='text-[28px] leading-tight font-serif'>
          <Trans i18nKey='schedule.subtitle' components={[<br key={"br"} />]} />
        </h1>
        <img
          src='/assets/LOGO_BEJA-puro.svg'
          alt='Instituto Beja'
          className='h-20 w-auto'
        />
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 mt-20 relative z-10'>
        <div className='hidden md:block'>
          <h1 className='text-5xl md:text-6xl font-serif'>
            <Trans
              i18nKey='schedule.subtitle'
              components={[<br key={"br"} />]}
            />
          </h1>
          <div className='mt-24 md:mt-60'>
            <img
              src='/assets/LOGO_BEJA-puro.svg'
              alt=''
              className='h-50 w-auto'
            />
          </div>
        </div>

        <div>
          <h2 className='text-3xl md:text-4xl font-serif mb-8'>Expediente</h2>
          <div className='space-y-4'>
            <div>
              <p className='font-bold mb-1'>{t("schedule.beja")}</p>
            </div>

            {t("schedule.items", { returnObjects: true }).map((item) => (
              <div key={item.text}>
                <p>{item.text}</p>
                {item.authors.map((author) => (
                  <p key={author} className='font-bold'>
                    {author}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Expediente;
