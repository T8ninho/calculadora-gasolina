import './DevFrases.css'
import {useState} from 'react'
import Logo from './Logo.png'

export default function DevFrases() {

	const [textoFrase, setTextoFrase] = useState('')
	const [categoriaSelecionada, setCategoriaSelecionada] = useState(0)

	const allFrases = [
		{
			id: 1,
			nome: "Motivação",
			frases: [
				'Siga os bons e aprenda com eles.',
				'O bom-senso vale mais do que muito conhecimento.',
				'O rios é a menor distância entre duas pessoas.',
				'Deixe de lado as preocupaões e seja feliz.',
				'Realise o óbvio, pense no improvável e conquiste o impossivel.'
			]
		},
		{
			id: 2,
			nome: "Bom dia",
			frases: [
				'Bom dia! Cada manhã marca o início de uma nova página no livro da sua vida. Então, escreva hoje o melhor capítulo de todos!',
				'O ontem já passou, o amanhã é um mistério. Mas o hoje é uma bênção! Bom dia!',
				'Bom dia! “A vida por si só é o mais maravilhoso dos contos de fada.” ',
				'Bom dia! “Hoje, assim que acordo, eu sorrio. 24 horas novinhas em folha estão diante de mim. Prometo viver ao máximo cada momento.” ',
				'A sua caminhada será muito mais leve se você não levar com você o peso do passado. Bom dia!'
			]
		},
		{
			id: 3,
			nome: "Boa Noite",
			frases: [
				'Para boas recompensas, não há atalhos! Boa noite.',
				'Encontramos a verdadeira felicidade quando somos felizes sem motivos. Boa noite!',
				'Direcione o seu rosto sempre na direção do sol, para que as sombras fiquem para trás. Boa noite!',
				'Cerque-se de pessoas que acreditam e lutam por você. Este é o primeiro passo para o sucesso. Boa noite!',
				'A cada noite temos uma nova oportunidade de recarregar as nossas energias e refletir sobre a nossa evolução espiritual. Bom descanso.'
			]
		},
	]

	function handleSwitchCategory(index: number) {
		setCategoriaSelecionada(index)
	}
	function gerarFrase(){
		let numeroAleatorio = Math.floor(Math.random() * allFrases[categoriaSelecionada].frases.length)
		setTextoFrase(`❝ ${allFrases[categoriaSelecionada].frases[numeroAleatorio]} ❞`)
	}

	return(
		<div className='container'>
			<img 
				alt='Logo Frases'
				src={Logo}
				className='logo'
			/>
			<h2 className='title'>Categorias</h2>
			<section className='category-area'>
				{allFrases.map((item, index) => (
					<button 
						key={item.id}
						className='category-button'
						style={{
							borderWidth: item.nome === allFrases[categoriaSelecionada].nome ? 2 : 0,
							borderColor: '#1fa4db'
						}}
						onClick={() =>handleSwitchCategory(index)}
					>
						{item.nome}
					</button>
				))}
			</section>
			
			<button className='button-frase' onClick={gerarFrase}>Gerar Frase</button>
			{textoFrase !== '' && <p className='textoFrase'>{textoFrase}</p>}
		</div>
	)
}