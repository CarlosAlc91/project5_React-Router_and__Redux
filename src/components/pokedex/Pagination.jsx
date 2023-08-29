const FIRST_PAGE = 1;

const Pagination = ({ lastPage, pagesInCurrentBlock, setCurrentPage }) => {
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
    <ul className="flex justify-center gap-4 p-4">
      <li onClick={handlerFirstPage}>{"<<"}</li>
      <li onClick={handlerPreviousPage}>{"<"}</li>
      {pagesInCurrentBlock.map((page) => (
        <li key={page} onClick={() => setCurrentPage(page)}>
          {page}
        </li>
      ))}
      {/* aqui se le pueden agregar iconos */}
      {/* siguiente pagina */}
      <li onClick={handlerNextPage}>{">"}</li>
      {/* ultima pagina */}
      <li onClick={handlerLastPage}>{">>"}</li>
    </ul>
  );
};
export default Pagination;
