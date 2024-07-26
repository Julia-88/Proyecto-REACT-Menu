import "./FoodForm.scss"
import React, { useState, useEffect } from 'react'
import { useNavigate } from "react-router-dom";

function FoodForm() {


  const [newNameFood, setNewNameFood] = useState('');
  const [newTypeFood, setNewTypeFood] = useState('pasta');
  const [newDayWeek, setNewDayWeek] = useState('lunes');
  const [newDescription, setNewDescription] = useState('');
  const [newImage, setNewImage] = useState('');


  const navigate = useNavigate();

  const handleSubmit = async (ev) => {
    ev.preventDefault()
    console.log('handleSubmit');

    const formData = {
      name: newNameFood,
      typeFood: newTypeFood,
      dayWeek: newDayWeek,
      description: newDescription,
      image: newImage,
    };

    try {
      const response = await fetch('https://669d6e8615704bb0e3061150.mockapi.io/food', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      console.log(response);
      if (!response.ok) {
        throw new Error(`Error: ${response.status}`);
      }
      const result = await response.json();
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };


  return (
    <div className="food-form-container ">
    <form className="food-form">
      <label htmlFor="name">Name:</label> 
      <input type="text" id="name" name="name" value={newNameFood} onChange={(e) => setNewNameFood(e.target.value)}/>

      <label htmlFor="typeFood">TypeFood:</label>
      <select className="custom-select" id="typeFood" name="typeFood" value={newTypeFood} onChange={(e) => setNewTypeFood(e.target.value)} >
        <option value="pasta">Pasta</option>
        <option value="pescado">Pescado</option>
        <option value="carne">Carne</option>
        <option value="verduras">Verduras</option>
      </select>

      <label htmlFor="dayWeek">Day of the Week:</label>
      <select className="custom-select" id="dayWeek" name="dayWeek" value={newDayWeek} onChange={(e) => setNewDayWeek(e.target.value)} >
        <option value="lunes">Lunes</option>
        <option value="martes">Martes</option>
        <option value="miercoles">Miercoles</option>
        <option value="jueves">Jueves</option>
        <option value="viernes">Viernes</option>
        <option value="sabado">Sabado</option>
        <option value="domingo">Domingo</option>
      </select>

      <label htmlFor="description" >Description:</label>
      <input type="text" id="description" name="description" value={newDescription} onChange={(e) => setNewDescription(e.target.value)} />

      <label htmlFor="image">Image URL:</label>
      <input className="custom-input" type="url" id="image" name="image"  value={newImage} onChange={(e) => setNewImage(e.target.value)}/>

      <button type="submit" className="submit-button " onClick={handleSubmit}>Crear Plato</button>
    </form>

    
    </div>
  );
}

export default FoodForm