import { styled } from "styled-components"
import livro from "../../Img/node.jpeg"
import Cards from "../Cards"
import imagemLivro from "../../Img/angular.png"

const OpcoesLivrosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;

`
const Titulo = styled.h2`
    width: 100%;
    padding: 30px 0;
    background-color: #FFF;
    color: #EB9B00;
    font-size: 36px;
    text-align: center;
    margin: 0;
`
const OpcoesContainer = styled.div`
    margin-top: 30px;
    display: flex;
    justify-content: center;
    width: 100%;
    cursor: pointer;
`
const livrosOpcoes = [
    {nome: 'Liderança em Design', src: livro, id: 1},
    {nome: 'Cangaceiro JavaScript', src: livro, id: 3},
    {nome: 'Apache Kafka e Spring Boot', src: livro, id: 4}
]

const OpcoesLivros = () => {
    return(

        <OpcoesLivrosContainer>
            <Titulo>Alguma opções para você!</Titulo>

            <OpcoesContainer >
                {livrosOpcoes.map( item => (
                    <img src={item.src} alt="img opções livros"/>
                ) )}
            </OpcoesContainer>

            <Cards titulo="Talvez você se interesse por"
                subtitulo="Angular 11"
                descricao="Construindo uma aplicação com a plataforma Google"
                img={imagemLivro} />
          
        </OpcoesLivrosContainer>
    )
}

export default OpcoesLivros