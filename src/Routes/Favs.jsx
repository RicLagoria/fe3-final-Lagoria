import React from "react";
import Card from "../Components/Card";
import  { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import {useDentistStates} from "../Components/utils/global.context";

//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context


  const Favs = () => {

    const {dentistState, dentistDispatch} = useDentistStates()
  
    const deleteFav =(odon)=>{
      const arrayDelete = dentistState.favs.filter(odonfav=> odonfav.id !== odon.id)
      dentistDispatch({type:'DELETE_FAVS', payload:arrayDelete})
    }
  
  return (
    <>
      <h1>Dentists Favs</h1>
      <div className="card-grid">
        {/* este componente debe consumir los destacados del localStorage */}
        {/* Deberan renderizar una Card por cada uno de ellos */}
        {console.log(dentistState.favs)}
        { dentistState.favs.map(dentista => (<article key={dentista.id}>
              <Card item={dentista}/>
              
            </article>)) }
      </div>
    </>
  );
};

export default Favs;