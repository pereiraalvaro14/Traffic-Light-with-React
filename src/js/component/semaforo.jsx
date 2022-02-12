import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [color, setColor] = useState("");

	return (
		<div className="containerSem">
			<div className="semaforo">
				<div className="estado">
					<p>Luz de color {color}</p>{" "}
				</div>
				<div
					onClick={() => setColor("red")}
					className={`luz red ${
						color == "red" ? "brillante" : ""
					}`}></div>{" "}
				<div
					onClick={() => setColor("yellow")}
					className={`luz yellow ${
						color == "yellow" ? "brillante" : ""
					}`}></div>
				<div
					onClick={() => setColor("green")}
					className={`luz green ${
						color == "green" ? "brillante" : ""
					}`}></div>
			</div>
		</div>
	);
};

<div className="if(true){ 'blue'}"></div>;

export default Home;
