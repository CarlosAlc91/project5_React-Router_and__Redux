const FIRST_PAGE = 1;

const Pagination = ({
  lastPage,
  pagesInCurrentBlock,
  currentPage,
  setCurrentPage,
}) => {
  const handlerNextPage = () => {
    setCurrentPage((currentPage) => {
      const nextPage = currentPage + 1;

      if (nextPage <= lastPage) return nextPage;
      return currentPage;
    });
  };

  const handlerLastPage = () => setCurrentPage(lastPage);

  const handlerPreviousPage = () => {
    setCurrentPage((currentPage) => {
      const FIRST_PAGE = 1;
      const newPage = currentPage - 1;

      if (newPage >= FIRST_PAGE) return newPage;
      return currentPage;
    });
  };

  const handlerFirstPage = () => setCurrentPage(FIRST_PAGE);

  return (
    <ul className="flex justify-center gap-4 p-4 items-center font-semibold cursor-pointer">
      {currentPage >= 2 && (
        <li
          className="p-4 rounded-md text-white bg-red-500 hover:bg-option aspect-square"
          onClick={handlerFirstPage}
        >
          {"<<"}
        </li>
      )}
      {currentPage >= 2 && (
        <li
          className="p-4 px-5 rounded-md text-white bg-red-500 hover:bg-option aspect-square"
          onClick={handlerPreviousPage}
        >
          {"<"}
        </li>
      )}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-4 rounded-md ${
            currentPage === page
              ? "text-white bg-red-500 hover:bg-option px-5 aspect-square "
              : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {/* aqui se le pueden agregar iconos */}
      {/* siguiente pagina */}
      <li
        className="p-4 px-5 rounded-md text-white bg-red-500 hover:bg-option aspect-square"
        onClick={handlerNextPage}
      >
        {">"}
      </li>
      {/* ultima pagina */}
      {currentPage >= 2 && (
        <li
          className="p-4 rounded-md text-white bg-red-500 hover:bg-option aspect-square"
          onClick={handlerLastPage}
        >
          {">>"}
        </li>
      )}
    </ul>
  );
};
export default Pagination;
