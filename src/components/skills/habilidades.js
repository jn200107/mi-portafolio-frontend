import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './habilidades.css'




const words = ['Front-end', 'Back-end'];


const Skills=()=>{
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
    <div className='cuerpo'>
        <div className="contenedor-header">
            <div className="cab">

                <div className='psp'>
                <span>
                    {displayText}
                </span>
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
                        
                        {/* <Link className='Link' to={'/Contacto'}>
                            <li className="list"><a href="#contacto" className="lin" >CONTACTO</a></li>
                        </Link> */}
                        {/* <Link className='Link' to={'/solicitudes'} >
                            <li className="list"><a href="#contacto" className="lin" >SOLICITUDES</a></li>
                        </Link> */}
                        </ul>
                    </div>
                </nav>
            </div>
        </div>

        <section id="skills" className="skills">
                <h3 className="titulo-t">HABILIDADES</h3>
            <div className="container_skills">

                <div className="tecnologias">
                    
                    <div className="tecnologia">
                        <div className='picture'>
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-html5" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                            <path d="M15.5 8h-7l.5 4h6l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">HTML 5</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-css3" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                            <path d="M8.5 8h7l-4.5 4h4l-.5 3.5l-2.5 .75l-2.5 -.75l-.1 -.5"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">CSS 3</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-javascript" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M20 4l-2 14.5l-6 2l-6 -2l-2 -14.5z"></path>
                            <path d="M7.5 8h3v8l-2 -1"></path>
                            <path d="M16.5 8h-2.5a.5 .5 0 0 0 -.5 .5v3a.5 .5 0 0 0 .5 .5h1.423a.5 .5 0 0 1 .495 .57l-.418 2.93l-2 .5"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">JAVASCRIPT</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-react" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M6.306 8.711c-2.602 .723 -4.306 1.926 -4.306 3.289c0 2.21 4.477 4 10 4c.773 0 1.526 -.035 2.248 -.102"></path>
                            <path d="M17.692 15.289c2.603 -.722 4.308 -1.926 4.308 -3.289c0 -2.21 -4.477 -4 -10 -4c-.773 0 -1.526 .035 -2.25 .102"></path>
                            <path d="M6.305 15.287c-.676 2.615 -.485 4.693 .695 5.373c1.913 1.105 5.703 -1.877 8.464 -6.66c.387 -.67 .733 -1.339 1.036 -2"></path>
                            <path d="M17.694 8.716c.677 -2.616 .487 -4.696 -.694 -5.376c-1.913 -1.105 -5.703 1.877 -8.464 6.66c-.387 .67 -.733 1.34 -1.037 2"></path>
                            <path d="M12 5.424c-1.925 -1.892 -3.82 -2.766 -5 -2.084c-1.913 1.104 -1.226 5.877 1.536 10.66c.386 .67 .793 1.304 1.212 1.896"></path>
                            <path d="M12 18.574c1.926 1.893 3.821 2.768 5 2.086c1.913 -1.104 1.226 -5.877 -1.536 -10.66c-.375 -.65 -.78 -1.283 -1.212 -1.897"></path>
                            <path d="M11.5 12.866a1 1 0 1 0 1 -1.732a1 1 0 0 0 -1 1.732z"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">REACT</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                        <svg xmlns="http://www.w3.org/2000/svg" width="55" height="55" viewBox="0 0 32 32" preserveAspectRatio="xMidYMid" fill="#ff008080"><path d="M14.656.427c.8-.453 1.82-.455 2.6 0L29.2 7.16c.747.42 1.247 1.253 1.24 2.114v13.5c.005.897-.544 1.748-1.332 2.16l-11.88 6.702a2.6 2.6 0 0 1-2.639-.073l-3.565-2.06c-.243-.145-.516-.26-.688-.495.152-.204.422-.23.642-.32.496-.158.95-.4 1.406-.656.115-.08.256-.05.366.022l3.04 1.758c.217.125.437-.04.623-.145l11.665-6.583c.144-.07.224-.222.212-.38V9.334c.016-.18-.087-.344-.25-.417L16.19 2.244a.41.41 0 0 0-.465-.001L3.892 8.93c-.16.073-.27.235-.25.415v13.37c-.014.158.07.307.215.375l3.162 1.785c.594.32 1.323.5 1.977.265a1.5 1.5 0 0 0 .971-1.409l.003-13.29c-.014-.197.172-.36.363-.34h1.52c.2-.005.357.207.33.405L12.18 23.88c.001 1.188-.487 2.48-1.586 3.063-1.354.7-3.028.553-4.366-.12l-3.4-1.88c-.8-.4-1.337-1.264-1.332-2.16v-13.5a2.46 2.46 0 0 1 1.282-2.141L14.656.427zM18.1 9.785c1.727-.1 3.576-.066 5.13.785 1.203.652 1.87 2.02 1.892 3.358-.034.18-.222.28-.394.267-.5-.001-1.002.007-1.504-.003-.213.008-.336-.188-.363-.376-.144-.64-.493-1.273-1.095-1.582-.924-.463-1.996-.44-3.004-.43-.736.04-1.527.103-2.15.535-.48.328-.624 1-.453 1.522.16.383.603.506.964.62 2.082.544 4.287.5 6.33 1.207.845.292 1.672.86 1.962 1.745.378 1.186.213 2.604-.63 3.556-.684.784-1.68 1.2-2.675 1.442-1.323.295-2.695.302-4.038.17-1.263-.144-2.577-.476-3.552-1.336-.834-.724-1.24-1.852-1.2-2.94.01-.184.193-.312.37-.297h1.5c.202-.014.35.16.36.35.093.6.322 1.25.854 1.6 1.026.662 2.313.616 3.487.635.973-.043 2.065-.056 2.86-.7.42-.367.543-.98.43-1.508-.123-.446-.6-.653-1-.8-2.055-.65-4.285-.414-6.32-1.15-.826-.292-1.625-.844-1.942-1.693-.443-1.2-.24-2.687.693-3.607.9-.915 2.22-1.268 3.47-1.394z"/></svg>
                        </div>
                        <h3 className="titulo">NODE.JS</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-mysql" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M13 21c-1.427 -1.026 -3.59 -3.854 -4 -6c-.486 .77 -1.501 2 -2 2c-1.499 -.888 -.574 -3.973 0 -6c-1.596 -1.433 -2.468 -2.458 -2.5 -4c-3.35 -3.44 -.444 -5.27 2.5 -3h1c8.482 .5 6.421 8.07 9 11.5c2.295 .522 3.665 2.254 5 3.5c-2.086 -.2 -2.784 -.344 -3.5 0c.478 1.64 2.123 2.2 3.5 3"></path>
                            <path d="M9 7h.01"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">MYSQL</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-git" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M16 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 8m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 16m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0"></path>
                            <path d="M12 15v-6"></path>
                            <path d="M15 11l-2 -2"></path>
                            <path d="M11 7l-1.9 -1.9"></path>
                            <path d="M13.446 2.6l7.955 7.954a2.045 2.045 0 0 1 0 2.892l-7.955 7.955a2.045 2.045 0 0 1 -2.892 0l-7.955 -7.955a2.045 2.045 0 0 1 0 -2.892l7.955 -7.955a2.045 2.045 0 0 1 2.892 0z"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">GIT</h3>
                    </div>
                    <div className="tecnologia">
                        <div className='picture' >
                            <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-brand-github" width="60" height="60" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                            <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                            <path d="M9 19c-4.3 1.4 -4.3 -2.5 -6 -3m12 5v-3.5c0 -1 .1 -1.4 -.5 -2c2.8 -.3 5.5 -1.4 5.5 -6a4.6 4.6 0 0 0 -1.3 -3.2a4.2 4.2 0 0 0 -.1 -3.2s-1.1 -.3 -3.5 1.3a12.3 12.3 0 0 0 -6.2 0c-2.4 -1.6 -3.5 -1.3 -3.5 -1.3a4.2 4.2 0 0 0 -.1 3.2a4.6 4.6 0 0 0 -1.3 3.2c0 4.6 2.7 5.7 5.5 6c-.6 .6 -.6 1.2 -.5 2v3.5"></path>
                            </svg>
                        </div>
                        <h3 className="titulo">GITHUB</h3>
                    </div>

                </div>
            </div>
        </section>
    </div>

    )
}

export default Skills