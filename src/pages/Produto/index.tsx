import { Link, useParams } from 'react-router-dom'

export default function Produto(){
	const { id } = useParams();
	return(
		<div>
			<h1>Bem vindo ao Produto {id}</h1>
			<span>Essa  é minha primeira pagina com navegação</span>
			<br />

			<Link to="/">Inicio</Link>
		</div>
	)
}