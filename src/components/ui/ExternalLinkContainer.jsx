import { calcClamp } from "../../data/Utils";
import * as Icon from "@phosphor-icons/react";

const ExternalLinkContainer = ({ title, subtitle, link }) => {
  return (
    <div className='flex flex-col gap-2'>
      <h1
        style={{
          fontSize: `clamp(${calcClamp(12, 24)})`,
          lineHeight: `clamp(${calcClamp(12 * 1.5, 24 * 1.5)})`,
        }}
        className='editorial text-retro-ochre'
      >
        {title}
      </h1>

      <a
        href={link}
        target='_blank'
        rel='noopener noreferrer'
        className='flex gap-2 items-center'
      >
        <p
          style={{
            fontSize: `clamp(${calcClamp(8, 14)})`,
            lineHeight: `clamp(${calcClamp(8 * 1.5, 14 * 1.5)})`,
          }}
        >
          {subtitle}
        </p>
        <div className='flex-center bg-bourdeaux rounded-full p-1 size-4'>
          <Icon.ArrowRight className='fill-porcelain rotate-340' />
        </div>
      </a>
    </div>
  );
};

export default ExternalLinkContainer;
