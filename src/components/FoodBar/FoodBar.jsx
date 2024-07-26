import React, { useState, useEffect } from 'react'
import "./FoodBar.scss";


const FoodBar = ({selectedTypeFood,setSelectedTypeFood,selectedDayWeek,setSelectedDayWeek}) => {

		const handleTypeFoodClick = (newValue) => {
			if(!selectedTypeFood.includes(newValue)){
				setSelectedTypeFood(selectedTypeFood=> [...selectedTypeFood, newValue]);
			}else{
				setSelectedTypeFood(selectedTypeFood => selectedTypeFood.filter(value => value !== newValue));
			}
			console.log(selectedTypeFood)
		};

		const handleDayWeekClick = (newValue) => {
			if(!selectedDayWeek.includes(newValue)){
				setSelectedDayWeek(selectedDayWeek=> [...selectedDayWeek, newValue]);
			}else{
				setSelectedDayWeek(selectedDayWeek => selectedDayWeek.filter(value => value !== newValue));
			}
			console.log(selectedDayWeek)
		};

    
  return (
		<div className='food-container'>
			<dic>Escoge Tipo de Comida</dic>
			<div className="food-bar-type">
				<button type="button" className={`select-button ${selectedTypeFood.includes('pasta') ? "selected" : "unselected"}`} onClick={() => handleTypeFoodClick('pasta')}>Pasta</button>
				<button type="button" className={`select-button ${selectedTypeFood.includes('pescado') ? "selected" : "unselected"}`} onClick={() => handleTypeFoodClick('pescado')}>Pescado</button>
				<button type="button" className={`select-button ${selectedTypeFood.includes('carne') ? "selected" : "unselected"}`} onClick={() => handleTypeFoodClick('carne')}>Carne</button>
				<button type="button" className={`select-button ${selectedTypeFood.includes('verduras') ? "selected" : "unselected"}`} onClick={() => handleTypeFoodClick('verduras')}>Verduras</button>
			</div>
			<div>Escoge Dia de la Semana</div>
			<div className="food-bar-day-week">
				<button type="button" className={`select-button ${selectedDayWeek.includes('lunes') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('lunes')}>Lunes</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('martes') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('martes')}>Martes</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('miercoles') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('miercoles')}>Miercoles</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('jueves') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('jueves')}>Jueves</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('viernes') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('viernes')}>Viernes</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('sabado') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('sabado')}>Sabado</button>
				<button type="button" className={`select-button ${selectedDayWeek.includes('domingo') ? "selected" : "unselected"}`} onClick={() => handleDayWeekClick('domingo')}>Domingo</button>
			</div>
		</div>

    
    
  )
}

export default FoodBar