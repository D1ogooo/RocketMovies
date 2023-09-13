import Header from './components/Header/HeaderComponent'
import MeusFilmes from './pages/MeusFilmes/MeusFilmesComponent'
import AddFilme from './pages/AdicionarFilme/AddFilme'
import Marcacoes from './components/Marcacao/data.tsx'
import { TypeLista } from './pages/AdicionarFilme/type.ts'

function App() {
  return (
    <>
      <Header/>
      {/* <MeusFilmes/> */}
      <AddFilme/>
    </>
  )
}

export default App
