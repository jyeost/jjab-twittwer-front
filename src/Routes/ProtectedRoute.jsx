import { useRecoilValue } from "recoil";
import { isLoginSelector } from "../Recoil/TokenAtom";
import { Navigate, useLocation } from "react-router-dom";
import { Outlet } from "react-router-dom";

const ProtectedRoute = () => {
    const isLogin = useRecoilValue(isLoginSelector);
    const currentLocation = useLocation();
    return isLogin?<Outlet></Outlet>:<Navigate to={'/login'} replace state={{redirectedFrom:currentLocation}}></Navigate>
}

export default ProtectedRoute;