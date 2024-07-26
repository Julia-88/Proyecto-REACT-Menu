import React from 'react';
import Header from '../components/Header/Header';



const Index = () => {
    return (
        <div>
            <Header />
            <div className="welcome-container">
                <h1 className="welcome-title">Bienvenido a Julia Restaurante</h1>
                <p className="welcome-text">
                    Para añadir un plato a nuestro menú, por favor inicie sesión.
                </p>
            </div>
        </div>
    );
}
export default Index