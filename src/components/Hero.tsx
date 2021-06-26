import React from "react";

import CONST from '../data/constants';

import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Score from './Score';
import placeholder from "../assets/hero.jpg";

const Hero = ({ backdrop_path = null, title = "Vingadores", vote_avarege = 10 }) => {
    
	const { IMAGEURL} = CONST;

	return(

		<header className=" box-border relative min-h-screen -mb-32">
			<img
				className="object-cover object-center w-full h-full"
				src={backdrop_path ? `${IMAGEURL}/original/${backdrop_path}` : placeholder}
				alt="Filme em destaque"
			/>
			<div className='absolute left-0 bottom-0 w-full h-full bg-gradient-to-b from-transparent to-black' ></div>
			<article className="absolute bottom-0 mb-64 px-8">
				<p className="text-3xl mb-8">Assista Agora:</p>
				<h2 className="text-6xl font-bold mb-8 ">{title}</h2>
				<p className="text-base">
					Nota{" "}
					<Score value={vote_avarege} />
				</p>

				<button className="text-base mt-8 mr-4 py-2 px-8 rounded bg-black bg-opacity-50  transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
					<FontAwesomeIcon className="mr-2" icon={faPlay} />
					Assistir
				</button>
				<button className="text-base mt-8 mr-4 py-2 px-8 rounded bg-black bg-opacity-50  transition-all duration-300 ease-in-out hover:bg-white hover:bg-opacity-75 hover:text-black">
					<FontAwesomeIcon className="mr-2" icon={faPlus} />
					Minha lista
				</button>
			</article>
		</header>
	);
};

export default Hero;
