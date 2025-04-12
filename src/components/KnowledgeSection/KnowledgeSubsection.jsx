import PropTypes from "prop-types";
import nuvens from "/assets/ilustracao-nuvens.svg";

export function KnowledgeSubsection({ children, supportSectionCard, title }) {
  return (
    <section className='flex flex-col gap-36 py-24'>
      <div className='flex items-center gap-4 justify-end mr-27'>
        <p className='editorial text-3xl'>Conhecimento</p>
        <img
          src={nuvens}
          alt='nuvens no canto superior direito'
          className='h-10'
        />
      </div>
      {supportSectionCard}

      <div className='ml-55 flex justify-end px-32'>
        <div className='flex flex-col items-end max-w-250 gap-16'>
          <h2 className='editorial text-5xl w-full'>{title}</h2>
          {children}
        </div>
      </div>
    </section>
  );
}
KnowledgeSubsection.propTypes = {
  children: PropTypes.node.isRequired,
  supportSectionCard: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
};
