import { calcClamp } from "../../data/Utils";

const TopicList = ({ title, list, decimal }) => {
  return (
    <div className='flex flex-col gap-10 max-768:gap-5'>
      <div
        style={{ width: `clamp(${calcClamp(220, 518)})` }}
        className='h-0.5 bg-retro-ochre'
      />

      <div className='flex flex-col gap-6 max-640:gap-3'>
        <h1
          className='editorial'
          style={{
            fontSize: `clamp(${calcClamp(14, 32)})`,
            lineHeight: `clamp(${calcClamp(14 * 1.5, 32 * 1.5)})`,
          }}
        >
          {title}
        </h1>

        <ul
          style={{
            gap: `clamp(${calcClamp(12, 36)})`,
          }}
          className='flex flex-col pl-10 max-640:pl-5'
        >
          {list.map((item, index) => (
            <li
              style={{
                fontSize: `clamp(${calcClamp(12, 36)})`,
                lineHeight: `clamp(${calcClamp(12 * 1.5, 28 * 1.5)})`,
              }}
              className={`${decimal === true ? "list-decimal marker:text-3xl max-896:marker:text-2xl max-768:marker:text-xl max-640:marker:text-lg" : "list-disc marker:text-5xl max-896:marker:text-4xl max-768:marker:text-3xl max-640:marker:text-2xl"} editorial marker:text-retro-ochre`}
              key={index}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicList;
