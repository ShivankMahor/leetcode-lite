import React, { useState } from 'react';
import Table from './table';

function PaginatedTable ({ data, itemsPerPage }){
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const totalPages = Math.ceil(data.length / itemsPerPage);

  return (
    <div>
      <Table data={currentItems} />
      <div className="mt-4">
        <nav className="flex justify-center">
          <ul className="flex list-none">
            {Array.from({ length: totalPages }, (_, index) => index + 1).map((page) => (
              <li key={page} className="mx-1">
                <button
                  className={`${
                    currentPage === page ? 'bg-blue-500 text-white' : 'bg-white text-blue-500'
                  } px-3 py-1 border border-gray-300 rounded focus:outline-none`}
                  onClick={() => paginate(page)}
                >
                  {page}
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default PaginatedTable;
