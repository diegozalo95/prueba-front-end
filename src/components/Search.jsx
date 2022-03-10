import React, { useState } from 'react';
import '../styles/Search.scss'

const Search = () => {
	const [tag, setTag] = useState('')

	const listByTags = (e) => {
		e.preventDefault()

		if(!tag.trim()) {
      console.log('Elemento vacío')
      return
    }
	}

	return (
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
	);
}

export default Search;