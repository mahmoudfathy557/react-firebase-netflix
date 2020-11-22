import React from 'react';
import styled from 'styled-components';

export default function MovieCard({ movie }) {
	const { title, img, description, originalTitle } = movie;
	const desc = description.split(' ').splice(0, 10).join(' ');

	return (
		<MovieCardWrapper>
			<div className='card m-2 '>
				<img className='card-img' src={img} alt='photo' />
				<div className='overlay'>
					<div className='title'>{originalTitle || title}</div>
					<div className='description'>{desc}</div>
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

	.card img {
		width: 100%;
		height: 100%;
		object-fit: cover;
		position: absolute;
		top: 0;
		left: 0;
		border-radius: 15px;
	}

	.overlay {
		position: absolute;
		bottom: 0;
		left: 0;
		right: 0;
		background: linear-gradient(to bottom, #8e0e00, #1f1c18);
		overflow: hidden;
		width: 100%;
		height: 0;
		transition: .5s ease;
	}

	.card:hover .overlay {
		height: 100%;
		opacity: .8;
	}

	.title {
		color: white;
		font-size: 30px;
		position: absolute;
		top: 30%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}
	.description {
		color: white;
		font-size: 18px;
		position: absolute;
		top: 75%;
		left: 50%;
		-webkit-transform: translate(-50%, -50%);
		-ms-transform: translate(-50%, -50%);
		transform: translate(-50%, -50%);
		text-align: center;
	}
`;
