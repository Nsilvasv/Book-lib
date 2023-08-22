import { styled } from "styled-components"
import Input from "../Input"

const PesquisaContainer = styled.section`
        background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
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

const Pesquisa = () =>{
    return(
        <PesquisaContainer>
            <Titulo>Enconte seu livro em nossa estante</Titulo>
            <Input placeholder="Digite seu livro..."/>
        </PesquisaContainer>
    )
}

export default Pesquisa