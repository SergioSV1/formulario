import '../css/boton.css';
const Boton = ({caption, funcion, tipo, ide}) => {
  return (
    <button className='boton' onClick={funcion} type={tipo} id={ide}>
        {caption}
    </button>
  )
}

export default Boton