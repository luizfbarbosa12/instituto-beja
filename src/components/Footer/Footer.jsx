const Footer = () => {
  return (
    <div className='bg-bourdeaux text-white py-16 px-8 md:px-12 relative pb-30'>
      <div className='container mx-auto flex flex-col md:flex-row justify-between'>
        <div className='mb-8 md:mb-0'>
          <p className='font-serif mb-2'>
            www.
            <br />
            instutobeja.org
          </p>

          <div className='mt-16 space-y-2'>
            <p className='font-serif'>/institutobeja</p>
            <p className='font-serif'>@institutobeja</p>
            <p className='font-serif'>contato@institutobeja.org</p>
          </div>
        </div>

        <div className='flex flex-col items-end'>
          <div className='text-right mb-12'>
            <p className='font-serif'>
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
