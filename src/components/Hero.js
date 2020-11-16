import React from 'react';
import styled from 'styled-components';
import defaultImg from '../components/photographer.jpg';
export default function Hero() {
	return (
		<HeroWrapper>
			<div className='hero-image'>
				<div className='hero-text'>
					<h1>title</h1>

					<button>Add to watchlist</button>
				</div>
			</div>

			<p>Page Content..</p>
		</HeroWrapper>
	);
}

const HeroWrapper = styled.div`
	.hero-image {
		background-image: url(${defaultImg});
		min-height: 50vh;
		background-position: center;
		background-repeat: no-repeat;
		background-size: cover;
		position: relative;
	}

	.hero-text h1 {
		text-align: left;
		position: absolute;
		bottom: 0;
		left: 0;
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
`;
