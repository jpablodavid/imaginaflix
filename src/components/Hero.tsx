import React from "react";

import placeholder from "../assets/hero.jpg";

import { faPlay, faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Hero = ({ title = "Vingadores", score = 10 }) => {
    const getBorderColor = () => {
        if(score >= 7) {
            return 'border-green-400';
        }else if (score >= 4 && score < 7) {
            return "border-yellow-400";
        }
        return "border-red-400";
    }

	return (
		<header className="relative min-h-screen">
			<img
				className="object-cover object-center h-full w-full"
				src={placeholder}
				alt="Filme em destaque"
			/>

			<article className="absolute bottom-0 mb-64 px-8">
				<p className="text-3xl mb-8">Assista Agora:</p>
				<h2 className="text-6xl font-bold mb-8 ">{title}</h2>
				<p className="text-base">
					Nota{" "}
					<span
						className={`inline-block mx-2 py-2 px-3 border-4 bg-black bg-opacity-75 rounded-full ${getBorderColor()}`}
					>
						{score}
					</span>
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
