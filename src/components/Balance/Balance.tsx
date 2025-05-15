import { useBalance } from "@/data/use-balance";
import { Trans } from "react-i18next";

const BalancoTable = () => {
  const data = useBalance();
  return (
    <div className='py-12 px-32 max-1280:px-16 max-950:px-8 max-640:px-5'>
      <div className='flex justify-between gap-5 items-end max-950:flex-col max-950:items-start max-640:gap-0  mb-8'>
        <h1 className='text-3xl sm:text-6xl'>
          <Trans i18nKey='balance.balance' />
        </h1>

        <div className='w-full mt-4 sm:mt-0'>
          <div className='overflow-x-auto'>
            <table className='w-full border-collapse'>
              <thead>
                <tr className='bg-bourdeaux text-white '>
                  <th className='py-2 px-2 sm:py-3 sm:px-4 text-left text-xs sm:text-lg uppercase'>
                    <Trans i18nKey='balance.project' />
                  </th>
                  <th className='py-2 px-2 sm:py-3 sm:px-4 text-right text-xs sm:text-base uppercase'>
                    <Trans i18nKey='balance.totalContribuintion' />
                  </th>
                  <th className='py-2 px-2 sm:py-3 sm:px-4 text-right text-xs sm:text-base uppercase'>
                    <Trans i18nKey='balance.2024totalContribuintion' />
                  </th>
                  <th className='py-2 px-2 sm:py-3 sm:px-4 text-center text-xs sm:text-base uppercase'>
                    <Trans i18nKey='balance.start' />
                  </th>
                  <th className='py-2 px-2 sm:py-3 sm:px-4 text-center text-xs sm:text-base uppercase'>
                    <Trans i18nKey='balance.conclusion' />
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
      </div>

      {data.map((section, sectionIndex) => (
        <div key={sectionIndex} className='mt-4 sm:mt-8'>
          {section.category && (
            <div className='bg-retro-ochre rounded-3xl py-1 px-2 sm:py-2 sm:px-4 font-bold text-xs sm:text-sm uppercase'>
              {section.category}
            </div>
          )}

          <div className='overflow-x-auto mt-2 sm:mt-4'>
            <table className='w-full border-collapse'>
              <tbody>
                {section.rows.map((item, index) => (
                  <tr
                    key={index}
                    className='border-b border-dashed border-rose'
                  >
                    <td className='py-2 px-1 sm:py-4 sm:px-2 w-1/4 text-xs sm:text-sm'>
                      {item.project}
                    </td>
                    <td className='py-2 px-1 sm:py-4 sm:px-2 text-center w-1/6 text-xs sm:text-sm'>
                      {item.type}
                    </td>
                    <td className='py-2 px-1 sm:py-4 sm:px-2 text-right w-1/6 text-xs sm:text-sm'>
                      {item.totalAmount}
                    </td>
                    <td className='py-2 px-1 sm:py-4 sm:px-2 text-right w-1/6 text-xs sm:text-sm'>
                      {item.amount2024}
                    </td>
                    <td className='py-2 px-1 sm:py-4 sm:px-2 text-center w-1/12 text-xs sm:text-sm'>
                      {item.start}
                    </td>
                    <td className='py-2 px-1 sm:py-4 sm:px-2 text-center w-1/12 text-xs sm:text-sm'>
                      {item.end}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      ))}
    </div>
  );
};

export default BalancoTable;
