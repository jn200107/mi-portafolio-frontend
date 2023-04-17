import { Navigate,Outlet} from "react-router-dom";


export const ProtectedRoute=({
    isAllowed,
    redirecTo='/login',
    Children
})=>{
    //a qui decimos que si no es efectivo me envie a hacia redirect que seria al inicio de sesion en este caso
    if(!isAllowed){ 
        return <Navigate to={redirecTo}/>
    } 
// esto significa que si tiene children nos de children si no nos da outlet
    return Children ? Children : <Outlet/>
}