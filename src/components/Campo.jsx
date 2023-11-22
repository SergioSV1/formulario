import '../css/campo.css';
const Campo = ({imagen, holder, tipo,ide}) => {
  return (
    <div className="campo">
        <img src={imagen} alt="" />
        <input type={tipo}  placeholder={holder} id={ide} autoComplete='off'/>
    </div>
  )
}

export default Campo