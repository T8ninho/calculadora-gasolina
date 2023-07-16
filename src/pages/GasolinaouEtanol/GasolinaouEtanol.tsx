import LogoImg from './Logo.png'
import './GasolinaouEtanol.css'
import {useState, FormEvent} from 'react'

interface InfoProps{
  title: string;
  gasolina: string | number;
  alcool: string | number;
}

export default function GasolinaouEtanol() {

  const [gasolinaInput, setGasolinaInput] = useState(1)
  const [alcoolInput, setAlcoolInput] = useState(1)
  const [info, setInfo] = useState<InfoProps>()

  

  function Calcular(event: FormEvent){
    event.preventDefault()

    let calculo = (alcoolInput / gasolinaInput)

    if (calculo <= 0.7){
      setInfo({
        title: "Compensa usar álcool",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    } else {
      setInfo({
        title: "Compensa usar Gasolina",
        gasolina: formatarMoeda(gasolinaInput),
        alcool: formatarMoeda(alcoolInput),
      })
    }
  }

  function formatarMoeda( valor: number) {
    let valorFormatado = valor.toLocaleString("pt-br", 
    {
      style: 'currency',
      currency: 'BRL'
    })
    return valorFormatado;
  }

  return (
    <div>
      <main className='container'>
        <img 
          className='logo' 
          src={LogoImg} 
          alt='Logo da gasolina o alcool' 
        />
        <h1 className='title'>Qual melhor opção?</h1>
        <form className='form' onSubmit={Calcular}>
          <label>Alcool (preço por litro):</label>
          <input 
            className='input'
            type="number"
            placeholder='4,9' 
            min="1"
            step="0.01"
            required
            value={alcoolInput}
            onChange={(e) => setAlcoolInput(Number(e.target.value))}
          />
          <label>Gasolina (preço por litro):</label>
          <input 
            className='input'
            type="number"
            placeholder='4,9' 
            min="1"
            step="0.01"
            required
            value={gasolinaInput}
            onChange={(e) => setGasolinaInput(Number(e.target.value))}
          />
          <input className='button' type='submit' value="Calcular"/>
        </form>
        {info && Object.keys(info).length > 0 && (
          <section className='result'>
          <h2 className='result-title'>{info.title}</h2>

          <span>Àlcool: {info.alcool}</span>
          <span>Gasolina: {info.gasolina}</span>
        </section>
        )}
      </main>
    </div>
  )
}