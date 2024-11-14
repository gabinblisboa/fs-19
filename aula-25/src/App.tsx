import './App.css'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Main } from './components/Main'
import { Card } from './components/Card'

function App() {
  
  return (
    
      <div>
        <Header title={"HEADER"} />
        <Main>
        <div className="p-4">
          <Card
            title={"Título do Card"}
            content={"Conteúdo principal"}
            footer={"Rodapé do Card"}
          />
        </div>
        </Main>
        <Footer value={"FOOTER"} />
      </div>
    
  )
}

export default App
