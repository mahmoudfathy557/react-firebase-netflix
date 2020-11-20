import React from 'react';
import styled from 'styled-components';

export default function MovieCard({ movie }) {
	const { title, img, description } = movie;
	const desc = description.split(' ').splice(0, 8).join(' ');

	return (
		<MovieCardWrapper>
			<div className='card m-2 '>
				<img className='card-img' src={img} alt='photo' />
				<div className='info-container'>
					<div className='info'>
						<h4 className='title'>{title}</h4>
						<p className='description'>{desc}</p>
					</div>
				</div>
			</div>
		</MovieCardWrapper>
	);
}

const MovieCardWrapper = styled.div`
	.card {
		width: 263px;
		height: 360px;
		border-radius: 15px;
		padding: 1.5rem;
		background: white;
		position: relative;
		display: flex;
		align-items: flex-end;
		transition: 0.4s ease-out;
		box-shadow: 0px 7px 10px rgba(black, 0.5);
	}
	.card:hover {
		transform: translateY(20px);
	}
	.card:hover::before {
		opacity: 1;
	}

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
	}
	.card:hover img {
		transition: 0.5s;
	}
	.card .info-container {
		position: absolute;
		margin: 0 2rem;
	}
	.card .info {
		position: relative;
		z-index: 3;
		color: white;
		opacity: 1;
		transform: translateY(30px);
		transition: 0.5s;
		left: 0px;
		bottom: -263px;
	}
	.card .info h4 {
		margin: 0px;
	}
	.card .info .description {
		opacity: 0;
		letter-spacing: 1px;
		font-size: 15px;
		margin-top: 8px;
	}
	.card:hover .info .description,
	.card:hover .info .title {
		overflow: hidden;
		opacity: 1;
		transition: 0.5s;
		transform: translateY(-100px);
	}
	.card:hover {
		background-image: linear-gradient(0deg, black);
	}
`;
