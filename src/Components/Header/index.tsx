import { Link } from 'react-router-dom'
import './Header.css'

export default function Header(){
	return(
		<header>
			<h1>T8ninho</h1>
			<div>
				<Link to="/">Inicio</Link>
				<Link to="/sobre">Sobre</Link>
				<Link to="/contato">Contato</Link>
			</div>
		</header>
	)
}