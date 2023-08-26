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
      <section>
        <article>
          <div>
            <img src="/images/banner.png" alt="" />
          </div>
          <h2>Hi, trainer</h2>
          <p>Provide your name to start</p>
          <form onSubmit={handleSubmit}>
            <input
              autoComplete="off"
              placeholder="your name..."
              id="nameTrainer"
              type="text"
              required
            />
            <button>Start!</button>
          </form>
        </article>
      </section>
      <FooterPokeBall />
    </main>
  );
};
export default Home;
