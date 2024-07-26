import React from 'react';
import Header from '../components/Header/Header';
import Auth from '../components/Auth/Auth';


const Login = ({ setUserData }) => {
	return (

        <div>
        <Header />
        <div className='auth'><Auth setUserData={setUserData} /></div>
        </div>
	)
}
export default Login;