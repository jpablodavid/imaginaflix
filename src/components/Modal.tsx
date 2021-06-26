import CONST from "../data/constants";
import emitter from "../utils/eventEmitter";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";

import Score from "./Score";

const Modal = ({
	poster_path,
	title,
	name,
	original_title,
	original_name,
	overview,
	vote_average,
	runtime,
	number_of_seasons,
}: any) => {

    const { IMAGEURL } = CONST;

	const handleClick = () => {
		emitter.emit(CONST.EVENTS.ModalClose);
	};

	return (
		<div className="fixed top-0 left-0 z-20  w-full h-screen grid place-items-center ">
			<article className="w-4/5 h-4/5 grid grid-flow-col grid-cols-2 p-8 bg-black shadow-lg">
				<img
					className="w-4/5 h-4/5"
					src={`${IMAGEURL}/w500/${poster_path}`}
					alt={title ? title : name}
				/>
				<div className="relative">
					<FontAwesomeIcon
						className="cursor-pointer absolute top-0 right-0 text-red-600"
						icon={faTimesCircle}
						size="2x"
						onClick={handleClick}
					/>
					<h2 className="text-3xl font-bold">{title ? title : name}</h2>
					<h6 className="font-bold italic">
						{original_title ? original_title : original_name}
					</h6>
					<p className="my-8 mr-8">{overview}</p>
					<Score value={vote_average} />
					<span className="bg-red-600 rounded py-2 px-4 ml-2">
						{runtime ? `${runtime} min` : `${number_of_seasons} temporadas`}
					</span>
				</div>
			</article>
		</div>
	);
};

export default Modal;
