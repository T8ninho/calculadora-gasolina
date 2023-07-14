import LogoImg from './assets/Logo.jpg'
import './App.css'

export default function App() {

  return (
    <div>
      <main className='container'>
        <img 
          className='logo' 
          src={LogoImg} 
          alt='Logo da gasolina o alcool' 
        />
        <h1 className='title'>Qual melhor opção?</h1>
        <form className='form'>
          <label>Alcool (preço por litro):</label>
          <input 
            className='input'
            type="number"
            placeholder='4,9' 
            min="1"
            step="0.01"
            required
          />
          <label>Gasolina (preço por litro):</label>
          <input 
            className='input'
            type="number"
            placeholder='4,9' 
            min="1"
            step="0.01"
            required
          />
          <input className='button' type='submit' value="Calcular" />
        </form>
      </main>
    </div>
  )
}



