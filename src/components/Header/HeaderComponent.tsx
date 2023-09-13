import { Container, PaiContainer, LogoHeader, UserContainer, FirstContainer, SecondContainer } from './HeaderStyle'
import { FindContainer, LineHeader } from './HeaderStyle'

function Header(){
  return (
    <>
    <Container>
     <PaiContainer>
      <LogoHeader>
       <p>RocketMovie</p>
      </LogoHeader>
      <FindContainer>
       <input type="text" placeholder='Pesquisar pelo título'/>
      </FindContainer>
      <UserContainer>
       <FirstContainer>
        <h2>Diogo maçal</h2>
        <a href="#">sair</a>
       </FirstContainer>
       <SecondContainer>
        <img src="https://github.com/D1ogooo.png" alt="Foto do usuário" />
       </SecondContainer>
      </UserContainer>
     </PaiContainer>
    </Container>
    <LineHeader/>
    </>
  ) 
}

export default Header