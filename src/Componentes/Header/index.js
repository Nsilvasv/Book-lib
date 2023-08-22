import "./Header.css"
import Logo from "../../Img/logo.svg"
import { BsPersonCircle } from "react-icons/bs";
import { BsFillBagFill } from "react-icons/bs";


const Header = () => {

    const links = ["CATEGORIAS", "FAVORITOS", "MINHA ESTANTE"]

    return(

        <header className="header">

            <nav className="navbar">

                <div className="logo">
                    <img src={Logo} alt="Logo"/>
                    <p> <strong>Book</strong>aS</p>
                </div>
               
                <ul className="opcoes">
                    {links.map(link => ( <li key={link} className="opcao" >{link}</li> ))}
                  
                </ul>

                <ul className="icones">
                    <li className="icone"><BsPersonCircle/></li>
                    <li className="icone"><BsFillBagFill/></li>    
                </ul>

            </nav>
        </header>
    )
}

export default Header