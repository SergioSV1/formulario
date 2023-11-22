import '../css/main.css';
import Campos from './Campos';
import Footer from './Footer';
import Header from './Header';

const Main = () => {
  return (
    <div className="main">
        <Header/>
        <Campos/>
        <Footer/>
    </div>
  )
}

export default Main