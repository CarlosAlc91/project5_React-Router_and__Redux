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
    <ul className="flex justify-center gap-4 p-4 items-center">
      {currentPage >= 2 && <li onClick={handlerFirstPage}>{"<<"}</li>}
      {currentPage >= 2 && <li onClick={handlerPreviousPage}>{"<"}</li>}
      {pagesInCurrentBlock.map((page) => (
        <li
          className={`p-2 ${
            currentPage === page ? "text-white bg-red-500" : ""
          }`}
          key={page}
          onClick={() => setCurrentPage(page)}
        >
          {page}
        </li>
      ))}
      {/* aqui se le pueden agregar iconos */}
      {/* siguiente pagina */}
      <li onClick={handlerNextPage}>{">"}</li>
      {/* ultima pagina */}
      {currentPage >= 2 && <li onClick={handlerLastPage}>{">>"}</li>}
    </ul>
  );
};
export default Pagination;
