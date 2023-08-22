import { useState } from "react"
import { styled } from "styled-components"

const InputCampo = styled.input`
    background: write;
    border: 1px solid black;
    padding: 15px 100px;
    border-radius: 50px;
    width: 200px;
    color: black;
    font-size: 16px;
    margin-bottom: 10px;
    text-align: center;

    &::placeholder {
        color: rgb(129, 129, 129);
        font-size: 18px;
    }
`
const Input = (props) => {

    const [valor, setValor] = useState("")

    return(
        <div>
            <InputCampo placeholder={props.placeholder}  onChange={e => setValor(e.target.value)} />
            <p>{valor}</p>
        </div>
    )
}

export default Input