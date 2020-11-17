import React, { useState } from 'react';
import Genere from '../components/Genere';

const WatchlistPage = () => {
	return (
		<div>
			<div className='info d-flex justify-content-between mx-5 '>
				<h1 className='text-capitalize my-3   '>genere 1</h1>
				<div className='search-section d-flex align-self-center  '>
					<input
						type='search'
						name='search'
						id='search'
						placeholder='search...'
						className='form-control mr-3'
					/>
					<select name='select' id='select' value='Sort By Year' className='custom-select'>
						<option value='Sort By Year'>Sort By Year</option>
						<option value='opel'>Opel</option>
						<option value='audi'>Audi</option>
					</select>
				</div>
			</div>
			<Genere />
		</div>
	);
};

export default WatchlistPage;
