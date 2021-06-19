import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
	faFacebookSquare,
	faInstagram,
	faTwitter,
	faYoutube,
} from "@fortawesome/free-brands-svg-icons";


const Footer = () => {
	const today = new Date();
	return (
		<footer className="mt-32 px-12 pb-4 text-white">
			<div className="flex gap-3 text-3xl">
				<FontAwesomeIcon
					className="cursor-pointer opacity-40 hover:opacity-100"
					icon={faFacebookSquare}
				/>
				<FontAwesomeIcon
					className="cursor-pointer opacity-40 hover:opacity-100"
					icon={faInstagram}
				/>
				<FontAwesomeIcon
					className="cursor-pointer opacity-40 hover:opacity-100"
					icon={faTwitter}
				/>
				<FontAwesomeIcon
					className="cursor-pointer opacity-40 hover:opacity-100"
					icon={faYoutube}
				/>
			</div>
			<div className="grid grid-cols-4 gap-2 my-8 text-sm">
				<a className="opacity-40 hover:opacity-100" href="#">
					Idiomas e Legendas
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Audiodescrição
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Central de ajuda
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Cartão pré-pago
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Imprensa
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Relação com investidores
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Carreiras
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Termos de uso
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Privacidade
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Avisos legias
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Prefêrencias de cookies
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Informações corporativas
				</a>
				<a className="opacity-40 hover:opacity-100" href="#">
					Entre em contato
				</a>
			</div>
			<p className='opacity-40'>₢ 1997 - {today.getFullYear()} Imagiflix, Inc. </p>
		</footer>
	);
};

export default Footer;
