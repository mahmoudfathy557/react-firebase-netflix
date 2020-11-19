import React from 'react';

const MoviesFilter = ({ filter }) => {
	return (
		<div className='search-section d-flex align-self-center  '>
			<input
				type='text'
				name='search'
				id='search'
				onChange={(e) => {
					filter.setSearch(e.target.value);
				}}
				value={filter.search}
				placeholder='search...'
				className='form-control mr-3'
			/>

			<select
				name='select'
				id='select'
				value={filter.year}
				className='custom-select'
				onChange={(e) => filter.setYear(e.target.value)}>
				{/* <option value='default'>Sort By Year</option> */}
				<option value='ascending'>Ascending</option>
				<option value='descending'>Descending</option>
			</select>
		</div>
	);
};

export default MoviesFilter;
