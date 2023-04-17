import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './portafolio.css'



const tarjetas = [
    {titulo:'CRUD de pokemones',descripcion:'tabla para visualizar,añadir,actualizar y eliminar datos de una base de datos de mysql' },
];
const tarjeta2=[
    {titulo1:'Marketplace',descripcion2:'pagina con logueo,ruta protegida, CRUD para adminstar proveedores y clientes carrito de compras y productos' }
];


const words = ['Front-end', 'Back-end', 'Full stack'];

const Portafolio=()=>{
    const [currentIndex, setCurrentIndex] = useState(0);
    const [currentWord, setCurrentWord] = useState(words[currentIndex]);
    const [displayText, setDisplayText] = useState('');

        useEffect(() => {
        let interval;

        if (displayText === currentWord) {
            interval = setInterval(() => {
            setCurrentIndex((currentIndex + 1) % words.length);
        }, 1000);
        } else {
            interval = setInterval(() => {
            setDisplayText(
            currentWord.substring(0, displayText.length + 1)
        );
            }, Math.floor(Math.random() * 200) + 100);
        }

        return () => clearInterval(interval);
    }, [currentIndex, currentWord, displayText]);

    useEffect(() => {
        setCurrentWord(words[currentIndex]);
        setDisplayText('');
    }, [currentIndex]);





    return(
        <>
            <div className="contenedor-header">
                <div className="cab">

                    <div className='psp'>
                    <p>Soy un developer{' '}</p>
                    <span>
                        {displayText}
                    </span>
                    <p className='junior' >junior.</p>
                    </div>
                    
                    <nav id="nav" className="navi">
                        <div>
                            <ul className="lista">
                            <Link className='Link' to={'/'}>
                                <li className="list"><a href="#skills" className="lin">inicio</a></li>
                            </Link>

                            <Link className='Link' to={'/portafolio'}>
                                <li className="list"><a href="#portafolio" className="lin">PORTAFOLIO</a></li>
                            </Link>
                            
                            <Link className='Link' to={'/Contacto'}>
                                <li className="list"><a href="#contacto" className="lin" >CONTACTO</a></li>
                            </Link>
                            <Link className='Link' to={'/solicitudes'} >
                                <li className="list"><a href="#contacto" className="lin" >SOLICITUDES</a></li>
                            </Link>
                            </ul>
                        </div>
                    </nav>
                </div>
            </div>  

            <div className='cont-portafolio'>
            {tarjetas.map((row)=>
                <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        <div className='img23'>{row.titulo}</div>
                        <div className='img22'>{row.descripcion}</div>

                        <div className='img'> <p>backend: https://github.com/jn200107/backend-CRUD-pokemones.git</p> </div>
                        <div className='descripcion'> <p>frontend: https://github.com/jn200107/front-CRUD-pokemones.git</p></div>
                    </div>
                </div>
            )}
            {tarjeta2.map((row)=>
                <div class="card">
                    <div class="circle"></div>
                    <div class="circle"></div>
                    <div class="card-inner">
                        <div className='img23'>{row.titulo1}</div>
                        <div className='img25'>{row.descripcion2}</div>

                        <div className='img'> <p>backend:https://github.com/jn200107/marketplace-backend.git </p> </div>
                        <div className='descripcion'> <p>frontend: https://github.com/jn200107/marketplace-frontend.git</p></div>
                    </div>
                </div>
            )}

            </div>
        </>
    )
}

export default Portafolio