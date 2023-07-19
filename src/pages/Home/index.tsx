import { Link } from 'react-router-dom'

export default function Home(){
	return(
		<div>
			<h1>Bem vindo ao Inicio</h1>
			<span>Essa  é minha primeira pagina com navegação</span>
			<br />

			<Link to="/sobre">Sobre</Link><br />
			<Link to="/contato">Contato</Link>
		</div>
	)
}