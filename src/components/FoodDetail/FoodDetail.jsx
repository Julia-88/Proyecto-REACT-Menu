import './FoodDetail.scss';
import { useNavigate } from 'react-router-dom';

import { useUserContext } from "../../Contexts/UserProvider";

const FoodDetail = ({ plato, getFoods }) => {

  const navigate = useNavigate();

  const userDataContext = useUserContext();
	
  const handleUpdate = () => {
    onUpdate(plato.id); 
  };

	const onUpdate = (id) => {
		console.log('userData',userDataContext);
	
		navigate(`/detail/${id}`);
	}

  const handleDelete = () => {
    onDelete(plato.id); 
  };

	const onDelete = async (id) => {
		const url = `https://669d6e8615704bb0e3061150.mockapi.io/food/${id}`;
		try {
			const response = await fetch(url, {
				method: 'DELETE',
			});
			console.log(response);
			if (!response.ok) {
				throw new Error(`Error: ${response.status}`);
			}

			const result = await response.json();
			console.log(result); 
		} catch (error) {
			console.error('Error al enviar el borrar:', error);
		} finally {
			getFoods();
		}
	}

	return (

		<div className="card" key={plato.id}>
			<p>{plato.dayWeek}</p>
			<p>{plato.type}</p>
			<h2>{plato.name}</h2>
			<img src={plato.image} alt={`Imagen de ${plato.name}`}  className="card-image" onClick={handleUpdate}/>
			<p>{plato.description}</p>
			{userDataContext !== null && (
          <button className="submit-button" onClick={handleDelete}>Eliminar</button>
        )}
		</div>
	)
  
}

export default FoodDetail