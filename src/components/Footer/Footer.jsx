const Footer = () => {
  return (
    <div className='bg-bourdeaux text-white py-16 px-8 md:px-12 relative pb-30'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between'>
        <div className='mb-8 md:mb-0'>
          <p className='font-serif tablet:text-[28px] tablet:leading-[25px] mb-2'>
            www.
            <br />
            instutobeja.org
          </p>

          <div className='mt-16 flex flex-col text-3xl leading-relaxed pl-22.5 gap-2'>
            <a
              href='https://br.linkedin.com/company/institutobeja'
              target='_blank'
              rel='noreferrer noopener'
              className='font-serif'
            >
              /institutobeja
            </a>
            <a
              href='https://www.instagram.com/institutobeja/'
              target='_blank'
              rel='noreferrer noopener'
              className='font-serif'
            >
              @institutobeja
            </a>
            <a href='mailto:contato@institutobeja.org' className='font-serif'>
              contato@institutobeja.org
            </a>
          </div>
        </div>

        <div className='flex flex-col items-end'>
          <div className='text-right mb-12'>
            <p className='font-serif tablet:text-[28px] tablet:leading-[25px]'>
              (O)
              <br />
              Desde 2021
            </p>
          </div>

          <div className=''>
            <img
              src='/assets/logo-desenho-beja-branco.svg'
              alt='Instituto Beja'
              className='w-50 h-50 absolute bottom-15 right-50'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
