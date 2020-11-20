import React from 'react';
import styled from 'styled-components';
import defaultImg from '../components/photographer.jpg';
import { NetflixContext } from '../context';
export default function Hero({ movie }) {
	const { addToWatchlist } = React.useContext(NetflixContext);
	const { originalTitle, storyline, posterurl } = movie;
	return (
		<HeroWrapper img={posterurl || defaultImg}>
			<div className='hero-image'>
				<div className='hero-text'>
					<h1 className=''>{originalTitle}</h1>

					<button onClick={() => addToWatchlist(movie)}>Add to watchlist</button>
				</div>
			</div>

			<p className='text-muted p-5 storyline '>
				<span className='h4 font-weight-bold'>Storyline</span> : {storyline}
			</p>
		</HeroWrapper>
	);
}

const HeroWrapper = styled.div`
	.hero-image {
		background-image: url(${(props) => props.img});
		min-height: 60vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.hero-text h1 {
		text-align: left;
		position: absolute;
		bottom: 0;
		left: 14rem;
		transform: translate(-50%, -50%);
		color: white;
		margin-left: 3rem;
	}

	.hero-text button {
		border: none;
		position: absolute;
		outline: 0;
		display: inline-block;
		padding: 10px 25px;
		color: black;
		background-color: #fff;
		text-align: center;
		cursor: pointer;
		bottom: 0;
		right: 0;
		margin-right: 3rem;
		margin-bottom: 2rem;
	}

	.hero-text button:hover {
		background-color: #555;
		color: white;
	}
	.storyline {
		font-size: 17px;
	}
`;
