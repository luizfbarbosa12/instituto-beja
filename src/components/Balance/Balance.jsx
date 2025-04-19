
const BalancoTable = ({ data }) => {
  return (
    <div className="py-12 px-24">
      <div className="flex justify-between items-end mb-8">
        <h1 className="text-6xl">Balanço</h1>

        <div className="w-[650px]">
          <table className="w-full border-collapse">
            <thead>
              <tr className="bg-bourdeaux text-white ">
                <th className="py-3 px-4 text-left text-md">PROJETO</th>
                <th className="py-3 px-4 text-right">
                  TOTAL DO<br/>APORTE EM R$
                </th>
                <th className="py-3 px-4 text-right">
                  TOTAL 2024<br/>EM R$
                </th>
                <th className="py-3 px-4 text-center">INÍCIO</th>
                <th className="py-3 px-4 text-center">CONCLUSÃO</th>
              </tr>
            </thead>
          </table>
        </div>
      </div>

      {data.tableData.map((section, sectionIndex) => (
        <div key={sectionIndex} className={"mt-8 "}>
          {section.category && (
            <div className="bg-retro-ochre rounded-3xl py-2 px-4 font-bold">
              {section.category}
            </div>
          )}

          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {section.rows.map((item, index) => (
                  <tr key={index} className="border-b border-dashed border-rose">
                    <td className="py-4 px-2 w-1/4">{item.project}</td>
                    <td className="py-4 px-2 text-center w-1/6">{item.type}</td>
                    <td className="py-4 px-2 text-right w-1/6">{item.totalAmount}</td>
                    <td className="py-4 px-2 text-right w-1/6">{item.amount2024}</td>
                    <td className="py-4 px-2 text-center w-1/12">{item.start}</td>
                    <td className="py-4 px-2 text-center w-1/12">{item.end}</td>
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
