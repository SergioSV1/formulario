import '../css/header.css';
import imgRegis from '../img/document1.svg';
const Header = () => {
  return (
    <header>
        <img src={imgRegis} alt="" />
        <h2>REGISTRO DE DATOS</h2>
    </header>
  )
}

export default Header