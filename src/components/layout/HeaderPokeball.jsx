import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/trainer.slice";

const HeaderPokeball = ({ children }) => {
  const dispatch = useDispatch();

  const handlerLogout = () => {
    dispatch(logout());
  };
  return (
    <section>
      <header>
        <div className="h-16 bg-red-600 relative">
          <div className="absolute left-0 bottom-0 w-[210px] sm:w-[300px]">
            <img src="/images/banner.png" alt="" />
          </div>
        </div>
        <div className="relative h-12 bg-black">
          <button
            onClick={handlerLogout}
            className="aspect-square right-0 -top-8 h-16 rounded-full border-[8px] border-black absolute -translate-x-1/2 bg-white after:block after:content-[''] after:h-8 after:aspect-square after:bg-slate-800 after:rounded-full after:absolute after:left-1/2 after:-translate-x-1/2 after:top-1/2 after:-translate-y-1/2 after:border-[4px] after:border-black transition-colors hover:bg-red-500 cursor-pointer"
          >
            logout
          </button>
        </div>
        I MUST BE THE BEST
      </header>
      {children}
    </section>
  );
};
export default HeaderPokeball;
