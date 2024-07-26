import React, { useState, useEffect } from 'react'
import FoodBar from '../FoodBar/FoodBar';
import FoodDetail from '../FoodDetail/FoodDetail';
import "./Food.scss";


const Food = () => {
    const [platos, setPlatos] = useState([]);

    const [selectedTypeFood, setSelectedTypeFood] = useState([]);
		const [selectedDayWeek, setSelectedDayWeek] = useState([]);

    const getFoods = async () => {
      const res = await fetch('https://669d6e8615704bb0e3061150.mockapi.io/food');
      const data = await res.json();
      console.log(data);
      setPlatos([...data]);
    }

    useEffect(() => {
      getFoods();
    }, []);
    
    if (platos.length === 0) {
        return <>
        <h1>Cargando Menus</h1>
        </>
    }
    
  return (
        <div>
          <div className="foodbar-container">
          <FoodBar selectedTypeFood={selectedTypeFood} setSelectedTypeFood={setSelectedTypeFood} selectedDayWeek={selectedDayWeek} setSelectedDayWeek={setSelectedDayWeek} />
          </div>
          <div className="card-container">
          {platos.map((plato) => {
              if( selectedTypeFood.includes(plato.type) || selectedTypeFood.length == 0){ 
                if(selectedDayWeek.includes(plato.dayWeek) || selectedDayWeek.length == 0){
                return (
                  <FoodDetail plato={plato} getFoods={getFoods} />
                  )
                }
              }
            }
          )}
          </div>
      </div>
  )
}

export default Food