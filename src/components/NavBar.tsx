import React, { useState} from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import logo from "../assets/imagiflix.png";
import placeholderUser from "../assets/user.jpg";
import { faSearch, faCaretDown } from "@fortawesome/free-solid-svg-icons";

import "./NavBar.css";

const NavBar = () => {
    const [ isMenuOpen, setIsMenuOpen ] = useState(false);
    const handleClick = () => {
        setIsMenuOpen(!isMenuOpen);
    };

	return (
		<nav className="navbar absolute top-0 left-0 grid grid-cols-2 w-full p-8">
			<div className="flex gap-8 items-center">
				<h1 className="hidden">Imagiflix</h1>
				<img src={logo} alt="logo imagiflix" />

				<ul className="flex gap-4 ">
					<li className="font-bold">inicio</li>
					<li>
						<a href="#series">Séries</a>
					</li>
					<li>
						<a href="#movies">Filmes</a>
					</li>
				</ul>
			</div>

			<div className="flex gap-4 items-center justify-self-end">
				<form className="relative w-64">
					<input
						className="w-full bg-black border border-white rounded py-1 px-3 transition-all duration-300 ease-in-out opacity-0 hover:opacity-100 focus:opacity-100"
						type="text"
						placeholder="Titulos, gente e gêneros"
					/>
					<button
						className="absolute right-0 py-1 px-2"
						onClick={(event) => event.preventDefault()}
					>
						<FontAwesomeIcon icon={faSearch} />
					</button>
				</form>

				<div className="flex gap-1 items-center relative">
					<img
						onClick={handleClick}
						src={placeholderUser}
						alt="foto do usuario"
					/>
					<button className="self-end" onClick={handleClick}>
						<FontAwesomeIcon icon={faCaretDown} />
					</button>
					<ul
						className={`absolute top-0 mt-10 w-32 right-0 bg-black rounded py-2 px-3 transition-all duration-300 ease-in-out ${
							!isMenuOpen && `opacity-0 invisible`
						}`}
					>
						<li>
							<a onClick={handleClick} href="#account">
								Minha conta
							</a>
						</li>
						<li>
							<a onClick={handleClick} href="#logout">
								Sair
							</a>
						</li>
					</ul>
				</div>
			</div>
		</nav>
	);
};
export default NavBar;
