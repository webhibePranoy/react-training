import { Navigate } from "react-router-dom"
import { reactLocalStorage } from "reactjs-localstorage"
const ProtectedRoute=({children})=>{
    let status=reactLocalStorage.get('token')
    console.log(status)
    if(!status){
        return <Navigate to='/login' replace/>
    }
    return children
}
export default ProtectedRoute;