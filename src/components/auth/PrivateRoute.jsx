import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import HeaderPokeball from "../layout/HeaderPokeball";

const PrivateRoute = () => {
  const { name } = useSelector((store) => store.trainer);

  /* verificacion para saber si esta logeado*/
  if (name)
    return (
      <HeaderPokeball>
        <Outlet />
      </HeaderPokeball>
    );

  /* componente para redireccionar */
  return <Navigate to="/" />;
};
export default PrivateRoute;
