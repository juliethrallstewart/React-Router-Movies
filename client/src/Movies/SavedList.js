import React from 'react';
import { Link, NavLink } from 'react-router-dom';

const SavedList = (props) => (
	<div className="saved-list">
		<h3>Saved Movies:</h3>
		{props.list.map((movie, index) => (
			<NavLink to={`/movies/${movie.id}`} key={index} className="saved-movie">
				{movie.title}
			</NavLink>
		))}
		<div className="home-button">
			<Link to="/">Home</Link>
		</div>
	</div>
);

export default SavedList;
