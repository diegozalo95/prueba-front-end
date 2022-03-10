import React from 'react';
import HomeIcom from '../assets/icons/home.svg'
import SearchIcom from '../assets/icons/search.svg'
import UserIcom from '../assets/icons/user.svg'
import '../styles/Nav.scss';

const Nav = () => {
	return (
    <div className='nav'>
			<div className="nav__container">
				<div className="nav__list">
					<div className='nav__item'>
						<img src={HomeIcom} alt="" />
					</div>
					<div className='nav__item'>
						<img src={SearchIcom} alt="" />
					</div>
					<div className='nav__item'>
						<img src={UserIcom} alt="" />
					</div>
				</div>
			</div>
		</div>
	);
}

export default Nav;