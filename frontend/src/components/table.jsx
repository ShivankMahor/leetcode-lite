
import TableHeading from './table_head';
import TableRow from './table_row';

const Table = ({ data }) => {
  return (
    <table className="table-auto w-full border-0">
      <TableHeading />
      <tbody>
        {data.map((row, index) => (
          <TableRow key={index} index={index} {...row} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
