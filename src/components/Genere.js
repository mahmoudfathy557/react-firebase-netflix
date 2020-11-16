import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import MovieCard from './MovieCard';

export default function Genere() {
	return (
		<CardWrapper className='mx-5'>
			<div className='   wrapper  d-flex flex-wrap  '>
				<Link to='/movie/:id'>
					<MovieCard />
				</Link>
				<MovieCard />
				<MovieCard />
				<MovieCard />
				<MovieCard />
			</div>
		</CardWrapper>
	);
}

const CardWrapper = styled.div`
	.wrapper {
		display: flex;
		width: 100%;
		justify-content: start;
	}
`;
