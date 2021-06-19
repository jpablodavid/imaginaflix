import React, { useState, useEffect } from "react";

import CONST from "./data/constants";

import Loading from './components/Loading';
import Hero from "./components/Hero";
import NavBar from "./components/NavBar";
import Carousel from "./components/Carousel";
import Footer from "./components/Footer";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const App = () => {
	const { URL, APISTRING } = CONST;

	const [movies, setMovies] = useState({
		results: [],
	});
	const [series, setSeries] = useState({
		results: [],
	});
	const [loading, setLoading] = useState(true);

	const fetchData = async () => {
		const movies = await fetch(
			`${URL}/discover/movie${APISTRING}&sort_by=popularity.desc`
		);
		const moviesData = await movies.json();
		setMovies(moviesData);

		const series = await fetch(
			`${URL}/discover/tv${APISTRING}&sort_by=popularity.desc`
		);
		const seriesData = await series.json();
		setSeries(seriesData);

		setLoading(false);
	};

	useEffect(() => {
		fetchData();
	}, []);

	//useEffect(() => movies && console.log(movies), [ movies ]);

	const getFeaturedMovies = () => movies && movies?.results[0];

	const getMovieList = () => {
		if (movies) {
			const [featured, ...movieList] = movies?.results;
			return movieList;
		}
		return [];
	};

	return (
		<div className="m-auto antialised font-sans bg-black text-white">
			{loading && (
				<>
					<Loading />
					<NavBar />
				</>
			)}
			{!loading && (
				<>
					<Hero {...getFeaturedMovies()} />

					<NavBar />

					<Carousel title="Filmes Populares" data={getMovieList()} />
					<Carousel title="Séries Populares" data={series?.results} />
					<Carousel title="Placeholder" />
				</>
			)}
			
			<Footer />
		</div>
	);
};

export default App;
