import { useTranslation } from "react-i18next";

const Footer = () => {
  const [t] = useTranslation();

  return (
    <div className='bg-bourdeaux text-white py-16 px-8 md:px-12'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-start'>
          <p className='font-serif text-base'>
            www.
            <br />
            institutobeja.org
          </p>
          <p className='font-serif text-base text-right'>
            (O)
            <br />
            {t("footer.copyright")}
          </p>
        </div>

        <div className='flex justify-between items-center mt-8'>
          <div className='flex flex-col space-y-2 text-2xl md:text-3xl font-serif'>
            <a
              href='https://br.linkedin.com/company/institutobeja'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              /institutobeja
            </a>
            <a
              href='https://www.instagram.com/institutobeja/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:underline'
            >
              @institutobeja
            </a>
            <a
              href='mailto:contato@institutobeja.org'
              className='hover:underline'
            >
              contato@institutobeja.org
            </a>
          </div>

          <img
            src='/assets/logo-desenho-beja-branco.svg'
            alt='Instituto Beja'
            className='w-12 h-12 md:w-16 md:h-16'
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
