import React from 'react';
import reactDom from 'react-dom';
import './Modal.css'

function Modal({ children }){
    return reactDom.createPortal(
        <div className='ModalBackground'>
            {children}
        </div>,
        document.getElementById('modal')
    );
}

export {Modal};

//es aqui donde creamos la nueva ventana, que aparecera enfrente de nuestra aplicacion al darle click, esto para agregar nuevos todos
//revisar que la palabra react este vien escrita ya que si en el import esta con mayusculas R y abajo con minusculas, suelta un error.