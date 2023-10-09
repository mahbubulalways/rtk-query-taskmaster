import { Navigate, useLocation } from "react-router-dom";
import Loading from "./Loading";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import auth from "../../firebase/firebase.config";
import { onAuthStateChanged } from "firebase/auth";
import { setUSer, toggleLoading } from "../../redux/user/userSlice";

const PrivateRoute = ({ children }) => {
  const { pathname } = useLocation();
  const { users } = useSelector((state) => state);
  console.log(users);
  // const isLoading = false;
  // const email = "test@gmail.com";
const dispatch= useDispatch()
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      console.log(user);
      if (user) {
        dispatch(setUSer({email:user.email, name:user.displayName}))
      dispatch(toggleLoading(false))
      }})
  },[])


  
  if (users.isLoading) {
    return <Loading />;
  }

  if ( !users.email) {
    return <Navigate to="/login" state={{ path: pathname }} />;
  }
  return children;
};

export default PrivateRoute;
