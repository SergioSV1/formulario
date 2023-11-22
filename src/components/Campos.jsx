import Campo from "./Campo"
import passWordV from '../img/passwordVerification.svg';
import phone from '../img/phone.svg';
import emailImg from '../img/email.svg';
import user from '../img/user.svg';
import '../css/campos.css';
import Boton from "./Boton";
import { useEffect } from "react";

const Campos = () => {



useEffect (()=>{
  const nombre = document.getElementById('nombre');
  const apellido = document.getElementById('apellido');
  const email = document.getElementById('email');
  const telefono = document.getElementById('telefono');
  const pass1 = document.getElementById('pass1');
  const pass2 = document.getElementById('pass1');
  const btnEnviar = document.getElementById('btnEnviar');
  const formulario = document.getElementById('formulario');

},[])

const errorFunc = (campo,holder) =>{
  
  campo.style.background='rgba(172, 14, 14, 0.2)'
  campo.value = '';
  campo.placeholder = 'Corrija éste Campo..!';
  setTimeout(()=>{
    campo.style.background= 'rgba(252, 216, 207, 0.20)';
    campo.placeholder = holder;
  },4000)

}

const borrar = ()=>{
  pass1.placeholder='';
  pass2.placeholder='';
  nombre.focus();
  formulario.reset();
}

const registrar = (e)=>{
  e.preventDefault();

  let valor = nombre.value;
  let expresion =  /^[A-Za-z2\s]+$/;
  if((valor === null) || (valor.length === 0) || !(expresion.test(valor)) ){
    errorFunc(nombre,'Nombre');
    return;
  } 

  valor = apellido.value;
  if((valor === null) || (valor.length === 0) || !(expresion.test(valor))){
    errorFunc(apellido,'Apellido');
    return;
}

expresion = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
valor = email.value;
if((valor === null) || (valor.length === 0) || !(expresion.test(valor))){
  errorFunc(email,'');
  return;
}

expresion = /^[0-9]+$/;
valor = telefono.value;
if((valor === null) || (valor.length === 0) || !(expresion.test(valor))){
  errorFunc(telefono,'');
  return;
}

valor = pass1.value;
if((valor === null) || (valor.length === 0)) {
  errorFunc(pass1,'');
  return;
} 

valor = pass2.value;
if((valor === null) || (valor.length === 0)) {
    errorFunc(pass2,'');
    return;
}
  
  if(pass1.value != pass2.value){
      errorFunc(pass1,'Password diferente')
      errorFunc(pass2,'Password diferente')  
      return;
  }



  alert('Formuladio enviado con éxito');
  borrar();

}


  return (
    <>
    <form action="" id="formulario">
      <div className="campos">
        <Campo imagen={user} holder='Nombre' tipo='text' ide='nombre' />
        <Campo imagen={user} holder='Apellido' tipo='text' ide='apellido'/>
        <Campo imagen={emailImg} holder='' tipo='email' ide='email'/>
        <Campo imagen={phone} holder='' tipo='tel' ide='telefono'/>
        <Campo imagen={passWordV} holder='' tipo='password' ide='pass1'/>
        <Campo imagen={passWordV} holder='' tipo='password' ide='pass2'/>
      </div>
      <div style={{marginTop:"22px", display:"flex"}}>
        <Boton caption='Registrar' funcion={registrar} tipo='submit' ide='btnEnviar'/>
      </div>
      </form>
    </>
  )
}

export default Campos