import { useState } from 'react'
import { IoIosArrowRoundBack, IoIosClose, IoIosAdd } from "react-icons/io";
import { Container, FirstContainer, SecondContainer, TitleMark } from './AddFilmeStyle'
import { Title, ThirdContainer, ForContainer, PaiContainer, MarkContainer, LastContainer, CardInternal } from './AddFilmeStyle'
import { CardCreate } from './AddFilmeStyle'
import { CardDefault } from './AddFilmeStyle'
import { MarkExternal } from './AddFilmeStyle'
import Marcacoes from '../../components/Marcacao/data'

function AddFilme() {
  const [title, setTittle] = useState('')
  const [nota, setNota] = useState('')
  const [observ, setObserv] = useState('')
  const [listaDeMarcadores, setListaDeMarcadores] = useState<string[]>(['React'])

  const handleDelete = (text: string) => {
    setListaDeMarcadores(prevState => prevState.filter(item => item != text))
  }

  // interface handleQuantityProps {
  //   quantidade_um?:number
  //   quantidade_dois:number
  // }

  // const handleQuantity = ({ quantidade_um, quantidade_dois }:handleQuantityProps) =>{
  //   if(quantidade_um) console.log(`QUANTIDADE UM = ${quantidade_um}`)
  //   console.log(`QUANTIDADE DOIS = ${quantidade_dois}`)
  // }

  // useEffect(() => {

  //   handleQuantity({
  //     quantidade_dois:10,
  //     quantidade_um:1,
  //   })

  // },[])

  return (
    <>
      <Container>
        <FirstContainer>
          <IoIosArrowRoundBack />
          <a href="#">Voltar</a>
        </FirstContainer>
        <PaiContainer>
          <SecondContainer>
            <Title>Novo filme</Title>
          </SecondContainer>
          <ThirdContainer>
            <input id="input_titulo" value={title} onChange={(e) => setTittle(e.target.value)} type="text" placeholder='Título' />
            <input id="input_nota" value={nota} onChange={(e) => setNota(e.target.value)} type="text" placeholder='Sua nota (de 0 a 5)' />
          </ThirdContainer>

          <ForContainer value={observ} onChange={(e) => setObserv(e.target.value)} placeholder='Observações'>
          </ForContainer>

          <MarkContainer>
            <TitleMark>
              Marcadores
            </TitleMark>
            <MarkExternal>
              {
                listaDeMarcadores.map((text, index) => (
                  <CardDefault key={index}>
                    <p>{text}</p>
                    <IoIosClose onClick={() => handleDelete(text)} />
                  </CardDefault>
                ))
              }
              <Marcacoes setListaDeMarcadores={setListaDeMarcadores} />
            </MarkExternal>
          </MarkContainer>
          <LastContainer>
            <button id="first_button">Excluir filme</button>
            <button id="second_button">Salvar alterações</button>
          </LastContainer>
        </PaiContainer>
      </Container>
    </>
  )
}

export default AddFilme