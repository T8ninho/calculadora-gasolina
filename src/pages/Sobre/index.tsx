import { Link } from 'react-router-dom'

export default function Sobre(){
	return(
		<div>
			<h1>Bem vindo ao Sobre</h1>
			<span>Essa  é minha primeira pagina com navegação</span>
			<br />

			<Link to="/">Inicio</Link>
		</div>
	)
}