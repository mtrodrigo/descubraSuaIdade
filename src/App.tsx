import { useState } from 'react'
import './App.css'

function App() {
  const [nome, setNome] = useState<string>("")
  const [ano, setAno] = useState<number>()
  const [idade, setIdade] = useState<number>()
  const [nomeExibir, setNomeExibir] = useState<string>("")
  const [checkbox, setCheckBox] = useState<boolean>(false)
    
  const dataAtual = new Date()
  const anoAtual = dataAtual.getFullYear()
 
  const gerarIdade = () => {
    if(checkbox === true){
      const idadeGerada = ano ? (anoAtual - ano) - 1 : 0;
      setIdade(idadeGerada)
      setNomeExibir(nome)
      setNome("")
    }
    else{
      const idadeGerada = ano ? anoAtual - ano : 0;
      setIdade(idadeGerada)
      setNomeExibir(nome)
      setNome("")
    }
  }

  return (
    <main className='main'>
      <section className='container'>
        <h1>Descubra sua idade</h1>
        <div className='app_container'>
          <div className='input_container'>
          <label>Qual seu nome?</label>
          <input 
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder='Digite seu nome'
          />
          </div>
          <div className='input_container'>
          <label>Qual ano você nasceu?</label>
          <input
          value={ano}
          onChange={(e) => setAno(Number(e.target.value))} 
          type="text"
          placeholder='Digite ano que você nasceu'
          />
          </div>
          <div className='checkbox_container'>
            <label>Já fe aniversário esse ano?</label>
            <input type="checkbox" 
            checked={checkbox} 
            onChange={ (e) => setCheckBox(e.target.checked)}
            />
          </div>
          <div className='btn_container'>
            <button onClick={gerarIdade}>Descobrir idade</button>
          </div>
        </div>
        {nomeExibir !== "" && 
          <div>
            <h3>{nomeExibir}</h3>
            <h4>Sua idade é: {idade}</h4>
          </div>
        }
      </section>
    </main>
  )
}

export default App
