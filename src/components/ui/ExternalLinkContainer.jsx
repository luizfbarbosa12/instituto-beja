import { calcClamp } from "../../data/Utils";
import { ArrowRightLink } from "./ArrowRightLink";

const ExternalLinkContainer = ({ title, subtitle, link, className }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1
        style={{
          fontSize: `clamp(${calcClamp(12, 24)})`,
          lineHeight: `clamp(${calcClamp(12 * 1.5, 24 * 1.5)})`,
        }}
        className={`editorial font-bold text-retro-ochre ${className}`}
      >
        {title}
      </h1>

      <ArrowRightLink href={link}>{subtitle}</ArrowRightLink>
    </div>
  );
};

export default ExternalLinkContainer;
