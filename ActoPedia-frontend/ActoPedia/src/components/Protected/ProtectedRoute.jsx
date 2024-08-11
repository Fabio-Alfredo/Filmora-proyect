import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({ canActivate,children, redirectPath = '/' }) => {


    if (!canActivate) {
        return <Navigate to={redirectPath} replace />
    }

    return children ? children : <Outlet/>
}

export default ProtectedRoute;