import { styled } from "styled-components"
import Input from "../Input"
import { useState } from "react"
import { livros } from "./dados"

const PesquisaContainer = styled.section`
        color: #FFF;
        text-align: center;
        padding: 85px 0;
        height: 270px;
        width: 100%;
`
const Titulo = styled.h2`
        color: #FFF;
        font-size: 30px;
        font-weight: 200;
        text-align: center;
        margin-bottom: 40px;
        width: 100%;
`
const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`

const Pesquisa = () =>{

    const [livrosPesquisados, setLivrosPesquisados] = useState([])
    console.log(livrosPesquisados);

    return(
        <PesquisaContainer>
            <Titulo>Enconte seu livro em nossa estante</Titulo>

            <Input 
                placeholder="Digite seu livro..." 
                onChange={e => {
                    const textoDigitado = e.target.value
                    const resultado = livros.filter( (item) => item.nome.includes(textoDigitado))
                    setLivrosPesquisados(resultado)
                } }/>

            {livrosPesquisados.map(item => (
                <Resultado key={item.id}>
                    <img src={item.src} alt="img livro"/>
                    <p>{item.nome}</p>
                </Resultado>
             
            ))}
        </PesquisaContainer>
    )
}

export default Pesquisa