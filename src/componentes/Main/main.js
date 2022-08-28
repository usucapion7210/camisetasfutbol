import React from "react";
import estilos from "./main.module.css";

const Main = (props) => {
	return (
		<main className={estilos.main}>
			{/* <h2 className="main_titulo">Bienvenidos a Futbol equipamientos</h2> */}
			<h2>Hola {props.txt} </h2>
			<p className="main_p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse alias
				veritatis quos voluptatibus non ut repudiandae molestias dolorem quasi
				quae error suscipit, rem, corrupti et inventore earum ipsum facilis
				magni quaerat, neque numquam nemo? Amet iusto sit obcaecati natus eaque,
				deleniti vitae tenetur tempora nihil rem delectus a ullam perspiciatis!{" "}
			</p>
		</main>
	);
};

export default Main;
