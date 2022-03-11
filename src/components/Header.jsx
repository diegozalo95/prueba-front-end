import React from 'react';
import logo from '../assets/images/logo.svg'
import '../styles/Header.scss'

const Header = ({ children }) => {
	return (
    <div className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<a href='/' >
						<img src={logo} alt="" />
					</a>
				</div>
        { children }
			</div>
		</div>
	);
}

export default Header;