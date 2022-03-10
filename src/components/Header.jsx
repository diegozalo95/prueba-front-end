import React from 'react';
import logo from '../assets/images/logo.svg'
import '../styles/Header.scss'

const Header = () => {
	return (
    <div className='header'>
			<div className='header__container'>
				<div className='header__logo'>
					<img src={logo} alt="" />
				</div>
				{/* <div className='header__photo'>
					<img src="https://randomuser.me/api/portraits/women/58.jpg"
						className='header__photo-img'
						alt="" />
				</div> */}
			</div>
		</div>
	);
}

export default Header;