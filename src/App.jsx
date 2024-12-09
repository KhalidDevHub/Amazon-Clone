import React, { useContext, useEffect } from "react";
import "./App.css";
import Routing from "./Router";
import { DataContext } from "./Components/DataProvider/DataProvider";
import {auth} from './Utility/firebase'
import { Type} from './Utility/action.type'

const App = () => {
   const [{ user }, dispatch] = useContext(DataContext);

   useEffect(() => {
     auth.onAuthStateChanged((authUser) => {
       if (authUser) {
         // console.log(authUser);
         dispatch({
           type: Type.SET_USER,
           user: authUser,
         });
       } else {
         dispatch({
           type: Type.SET_USER,
           user: null,
         });
       }
     });
   }, []);
  return (

    <div className="App">
      <Routing />
    </div>
  );
};

export default App;
