import '../style/Header.css'
import {Link} from 'react-router-dom'

export default function Header(){
    return(
        <header>
            <h1>MiniStore</h1>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Produtos">Produtos</Link></li>
                    <li><Link to="/Cadastrar">Cadastrar</Link></li>
                </ul>
            </nav>
        </header>
    )
}