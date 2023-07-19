import { Link } from 'react-router-dom'

export default function Contato(){
	return(
		<div>
			<h1>Bem vindo a página contatos!</h1>
			<h3>Telefone: (xx) xxxxx-xxxx</h3>

			<Link to="/">Inicio</Link>
		</div>
	)
}