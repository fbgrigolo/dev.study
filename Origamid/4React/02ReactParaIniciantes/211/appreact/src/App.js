import React from "react";
import Form from "./form/Form";

const Titulo = ({texto, cor, children}) => {
	return (
		<h1 style={{ color: cor }}>{ texto }, {children}</h1>
	);
};

function App() {
	return (
		<>
			{/* <Titulo cor="red" texto="Meu titulo 1"> />
				Isso é o Children
				
			</Titulo>
			<Titulo cor="red" texto="Meu titulo 2" />
			<Titulo texto="Meu titulo 3" /> */}

			<Form />
		</>
	);
}

export default App;
