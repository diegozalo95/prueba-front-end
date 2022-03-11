import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import UseLogin from '../hooks/UseLogin'
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import '../styles/PostItem.scss'

const App = () => {
	return (
		<BrowserRouter>
				<Routes>
					<Route exact path="/posts" element={ <Home><UseLogin /></Home> } />
					<Route path="*" element={ <LoginPage><UseLogin /></LoginPage> } />
				</Routes>
		</BrowserRouter>
	);
}

export default App;