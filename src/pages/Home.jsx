import { useDispatch } from "react-redux";
import FooterPokeBall from "../components/layout/FooterPokeBall";
import { loginTrainer } from "../store/slices/trainer.slice";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const nameTrainer = e.target.nameTrainer.value;

    dispatch(loginTrainer(nameTrainer));
    /* redireccion desde la parte logica */
    navigate("/pokedex");
  };
  return (
    <main className=" grid min-h-screen grid-rows-[1fr_auto]">
      <section className="flex justify-center items-center text-center font-inter">
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2 className="pt-16 text-trainer  font-bold text-5xl">
            ¡Hi, trainer!
          </h2>
          <p className="text-black-home text-2xl py-3 font-medium pb-10">
            Provide your name to start.
          </p>
          <form
            className="shadow-lg w-[430px] max-w-max mx-auto border"
            onSubmit={handleSubmit}
          >
            <input
              className="outline-none px-10"
              autoComplete="off"
              placeholder="Your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button className="bg-btn-red py-2 text-white px-10 ">Start</button>
          </form>
        </article>
      </section>
      <FooterPokeBall />
    </main>
  );
};
export default Home;
