import React, { Fragment, useState } from 'react';
import FilterPosts from './FilterPosts';

import '../styles/Search.scss'

const Search = () => {
	const [tag, setTag] = useState('')
	const [sendPost, setSendPost] = useState(false)

	const listByTags = (e) => {
		e.preventDefault()

		if(!tag.trim()) {
			console.log('Elemento vacío')
      return
    }
		setSendPost(true)
		document.querySelector('.posts').innerHTML= ''
		document.querySelector('.search').innerHTML= ''
	}

	return (
		<Fragment>
			<div className='search'>
				<div className='search__container'>
					<form action=""
						onSubmit={listByTags}
						className='search__form'>
						<fieldset className='search__fieldset'>
							<input type="text"
								placeholder='Buscar por categorías'
								onChange={ e => setTag(e.target.value) }
								className='search__input' />
							<button className='search__button'></button>
						</fieldset>
					</form>
				</div>
			</div>
			{sendPost ? <FilterPosts tag={tag.toLocaleLowerCase()} /> : null}
		</Fragment>
	);
}

export default Search;