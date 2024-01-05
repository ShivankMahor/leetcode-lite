
const TableHeading = () => {
  return (
    <thead className="text-md border-b-2 border-gray-200">
      <tr>
        <th className="w-52 py-2 px-2 pl-0 text-left" style={{width:'64px'}}>Status</th>
        <th className="w-260 py-2 pl-1 m-1 text-left">Topic</th>
        <th className="w-54 py-2 text-left">Solution</th>
        <th className="w-100 py-2 text-left">Difficulty</th>
        <th className="w-84 py-2 text-left">Acceptance</th>
        <th className="w-84 py-2 text-left">Frequency</th>
      </tr>
    </thead>
  );
};

export default TableHeading;
