import React, { useState } from 'react';
import { Route, Switch } from 'react-router-dom';
import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList.js';
import Movie from './Movies/Movie.js';

const App = () => {
	const [
		savedList,
		setSavedList
	] = useState([]);

	const addToSavedList = (movie) => {
		setSavedList([
			...savedList,
			movie
		]);
	};
	console.log(savedList, 'savedList');
	return (
		<div>
			<SavedList list={savedList} />
			<Switch>
				<Route exact path="/" render={(props) => <MovieList {...props} addToSavedList={addToSavedList} />} />
				{/* <Route exact path="/" component={MovieList} /> */}

				<Route path="/movies/:id" render={(props) => <Movie {...props} addToSavedList={addToSavedList} />} />
			</Switch>
		</div>
	);
};

export default App;
