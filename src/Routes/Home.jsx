import React, { useEffect, useState } from 'react';
import Card from '../Components/Card';
import axios from 'axios';
import { useThemeStates } from '../Context/ThemeContext/ThemeContext';
import { useDentistStates } from '../Components/utils/global.context';


//Este componente debera ser estilado como "dark" o "light" dependiendo del theme del Context

const Home = () => {
  const { theme } = useThemeStates();
  const { dentistState } = useDentistStates();
  
  return (
    <main style={{ background: theme.background, color: theme.font }}  >
      <h1 >Bienvenido al consultorio online</h1>
      <div>
        {dentistState.dentistList.map((item) => (
          <Card key={item.id} item={item}/>
        )
        /* Aqui deberias renderizar las cards */)}
        
      
      </div>
    </main>
  );
};

export default Home;

//className={styles.homeCards}