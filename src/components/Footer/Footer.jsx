import { useTranslation } from "react-i18next";
import AnimatedFooterLogo from './AnimatedFooterLogo';

const Footer = () => {
  const [t] = useTranslation();

  return (
    <div className='bg-bourdeaux text-white py-16 px-8 md:px-12 max-640:px-5'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-start'>
          <a
            href="https://www.institutobeja.org"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#FFD700] transition-colors"
          >
            institutobeja.org
          </a>
        </div>

        <div className='flex relative justify-between items-center mt-8 max-420:overflow-hidden'>
          <div className='flex flex-col space-y-2 text-2xl md:text-3xl font-serif'>
            <a
              href='https://www.linkedin.com/company/institutobeja'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#FFD700] transition-colors flex items-center gap-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="inline w-6 h-6"><path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.268c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm15.5 11.268h-3v-5.604c0-1.337-.025-3.063-1.868-3.063-1.868 0-2.154 1.459-2.154 2.967v5.7h-3v-10h2.881v1.367h.041c.401-.762 1.381-1.563 2.841-1.563 3.039 0 3.601 2.001 3.601 4.601v5.595zm0 0"/></svg>
              LinkedIn
            </a>
            <a
              href='https://www.instagram.com/institutobeja/'
              target='_blank'
              rel='noopener noreferrer'
              className='hover:text-[#FFD700] transition-colors flex items-center gap-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" className="inline w-6 h-6"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.337 3.608 1.312.975.975 1.25 2.242 1.312 3.608.058 1.266.069 1.646.069 4.847s-.012 3.582-.069 4.847c-.062 1.366-.337 2.633-1.312 3.608-.975.975-2.242 1.25-3.608 1.312-1.266.058-1.646.069-4.85.069s-3.584-.012-4.85-.069c-1.366-.062-2.633-.337-3.608-1.312-.975-.975-1.25-2.242-1.312-3.608C2.175 15.582 2.163 15.202 2.163 12s.012-3.582.069-4.847c.062-1.366.337-2.633 1.312-3.608.975-.975 2.242-1.25 3.608-1.312C8.416 2.175 8.796 2.163 12 2.163zm0-2.163C8.741 0 8.332.013 7.052.072 5.773.131 4.653.396 3.678 1.371 2.703 2.346 2.438 3.466 2.379 4.745.013 8.332 0 8.741 0 12c0 3.259.013 3.668.072 4.948.059 1.279.324 2.399 1.299 3.374.975.975 2.095 1.24 3.374 1.299C8.332 23.987 8.741 24 12 24c3.259 0 3.668-.013 4.948-.072 1.279-.059 2.399-.324 3.374-1.299.975-.975 1.24-2.095 1.299-3.374.059-1.28.072-1.689.072-4.948 0-3.259-.013-3.668-.072-4.948-.059-1.279-.324-2.399-1.299-3.374-.975-.975-2.095-1.24-3.374-1.299C15.668.013 15.259 0 12 0zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zm0 10.162a3.999 3.999 0 1 1 0-7.998 3.999 3.999 0 0 1 0 7.998zm6.406-11.845a1.44 1.44 0 1 0 0 2.88 1.44 1.44 0 0 0 0-2.88z"/></svg>
              Instagram
            </a>
            <a
              href='mailto:contato@institutobeja.org'
              className='hover:text-[#FFD700] transition-colors flex items-center gap-2'
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="inline w-6 h-6"><rect x="3" y="6" width="18" height="12" rx="3" stroke="currentColor" strokeWidth="1.5" fill="none"/><path d="M3 7l9 7 9-7" stroke="currentColor" strokeWidth="1.5" fill="none"/></svg>
              <span title="Enviar email">Email</span>
            </a>
          </div>

          <img
            src='/assets/logo-desenho-beja-branco.svg'
            alt='Instituto Beja'
            className='w-32 h-32 md:w-48 md:h-48 max-380:absolute max-380:right-0'
          />
        </div>
        <div className="w-full flex justify-center mt-10">
          <img
            src="/assets/CC_BY-NC-SA.svg"
            alt="Creative Commons CC BY NC SA"
            className="h-8 md:h-10"
            style={{ maxWidth: '220px', width: 'auto' }}
          />
        </div>
      </div>
    </div>
  );
};

export default Footer;
