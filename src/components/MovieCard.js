import React from 'react';
import styled from 'styled-components';

export default function MovieCard() {
	return (
		<MovieCardWrapper>
			<div className='card m-2 '>
				<img
					className='card-img'
					src='https://images.unsplash.com/photo-1477666250292-1419fac4c25c?auto=format&fit=crop&w=667&q=80&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D'
					alt='photo'
				/>
				<div className='info'>
					<h4 className='title'>title</h4>
					<p className='description'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint, ad?</p>
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

	.card::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		display: block;
		width: 100%;
		height: 100%;
		border-radius: 15px;
		background: rgba(black, 0.6);
		z-index: 2;
		transition: 0.5s;
		opacity: 0;
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
		filter: grayscale(80%);
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
		opacity: 1;
		transition: 0.5s;
		transform: translateY(-100px);
	}
`;
