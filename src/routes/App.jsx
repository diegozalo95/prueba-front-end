import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from '../pages/Home';
import LoginPage from '../pages/LoginPage';
import '../styles/PostItem.scss'

const App = () => {
	return (
		<BrowserRouter>
				<Routes>
					<Route exact path="/login" element={ <LoginPage /> } />
					<Route path="*" element={ <Home /> } />
				</Routes>
		</BrowserRouter>
	);
}

export default App;