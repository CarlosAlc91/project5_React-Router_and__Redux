import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const { name } = useSelector((store) => store.trainer);

  /* verificacion para saber si esta logeado*/
  if (name) return <Outlet />;

  /* componente para redireccionar */
  return <Navigate to="/" />;
};
export default PrivateRoute;
