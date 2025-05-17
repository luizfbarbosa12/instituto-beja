import { calcClamp } from "../../data/Utils";

const TopicListWithSub = ({ title, list }) => {
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
          {list.map((item1, index) => (
            <div key={index} className='flex flex-col gap-4'>
              <li
                className='editorial list-disc marker:text-retro-ochre marker:text-5xl max-896:marker:text-4xl max-768:marker:text-3xl max-640:marker:text-2xl'
                style={{
                  fontSize: `clamp(${calcClamp(12, 28)})`,
                  lineHeight: `clamp(${calcClamp(12 * 1.5, 28 * 1.5)})`,
                }}
              >
                <span dangerouslySetInnerHTML={{ __html: item1.title }} />
              </li>

              <ul
                style={{ paddingLeft: `clamp(${calcClamp(0, 20)})` }}
                className='flex flex-col gap-2'
              >
                {item1.topics.map((item2, index) => (
                  <li
                    className='flex items-center editorial list-none'
                    style={{
                      fontSize: `clamp(${calcClamp(10, 24)})`,
                      lineHeight: `clamp(${calcClamp(10 * 1.5, 24 * 1.5)})`,
                    }}
                    key={index}
                  >
                    <div className='size-3 mx-2 rounded-full border border-retro-ochre shrink-0 max-768:size-2' />
                    <p dangerouslySetInnerHTML={{ __html: item2 }} />
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TopicListWithSub;
