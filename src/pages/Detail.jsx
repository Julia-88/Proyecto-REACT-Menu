import React, { useEffect, useState } from 'react';
import Header from '../components/Header/Header';
import FoodDetail from '../components/FoodDetail/FoodDetail';
import { useParams } from 'react-router-dom';

const Detail = () => {
    const { id } = useParams();
    const [plato, setPlato] = useState(null);

    useEffect(() => {
        const fetchPlato = async () => {
            try {
                const response = await fetch(`https://669d6e8615704bb0e3061150.mockapi.io/food/${id}`);
                if (!response.ok) {
                    throw new Error('Plato not found');
                }
                const data = await response.json();
                setPlato(data);
                localStorage.setItem("plato", JSON.stringify(data));
                console.log()
            } catch (error) {
                console.error("Error fetching plato:", error);
            }
        };

        fetchPlato(plato);
    }, [id]);

    const getFoods = async () => {
        const res = await fetch('https://669d6e8615704bb0e3061150.mockapi.io/food');
        const data = await res.json();
        console.log(data);
        setPlatos([...data]);
      }

    return (
        <div>
            <Header />
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                {plato ? <FoodDetail plato={plato} getFoods={getFoods}/> : <p>Loading  plato...</p>}
            </div>
        </div>
    );
};

export default Detail;