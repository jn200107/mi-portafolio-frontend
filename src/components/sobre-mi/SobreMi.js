import React, { useState, useEffect } from 'react';
import './sobreMi.css'
import wave from '../sobre-mi/img/svg2.png'
import { Link } from 'react-router-dom';
import user from './img/user.svg'
import interes from './img/thumb-up.svg'
import whatsapp from './icons/WhatsApp.svg.png'
import linkedin from './icons/linkedin.png'
import github from './icons/github-logo.png'
import hombre from './img/hombre2.png'


const words = ['Front-end', 'Back-end'];

const SobreMi=()=>{
  

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
        


      <div>
      {/* cabezera */}
        <div className="contenedor-header">
    
            <div className="cab">

                <div className='psp'>
                  {/* <p>Soy un developer</p> */}
                  <span>
                      {displayText}
                  </span>
                  {/* <p className='junior' >junior.</p> */}
                </div>
                
                <nav id="nav" className="navi">
                    <div>
                        <ul className="lista">
                          <Link className='Link' to={'/skills'}>
                            <li className="list"><a href="#skills" className="lin">SKILLS</a></li>
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
      
      {/* sobremi 2 */}
        <div id="inicio" className='inicio'>

          <div className='inicio2'>
            <div className='hijo1'>
              <h3>hola, soy <br></br> 
                <div className='code-loader'>
                  <span>{'{'}</span>jorge Navarro<span>{'}'}</span>
                </div> 
              </h3>
              <p>fullstack developer junior</p>
            </div>
            <div className='hijo2'> <img className='perfil' src={hombre} alt='perfil' ></img> </div>
          </div>

              <img  className='waves' src={wave} alt='ola' ></img>   
        </div>


        <section id="sobremi" className="sobremi">
        <div className="contenedor_sobre">
            <div className="conte-sobremi">
              <div className='sbremi'>
                <hr className='br'></hr>
                <h1 className="titulo2">SOBRE MÍ</h1>
              </div>

                <p className="descrip" >Mi nombre es Jorge Navarro, tengo 21 años de edad, soy un estudiante apasionado por el desarrollo tanto FrontEnd como BackEnd. Me gustaría tener la oportunidad de unirme a una empresa que me permita aplicar mis habilidades y conocimientos en un entorno en el que pueda continuar creciendo y desarrollándome profesionalmente.
                    <br></br>
                    Como resultado de mi formación y dedicación a la educación, estoy seguro de que puedo aportar valor y contribuir al crecimiento de una organización que comparta mis valores y objetivos a largo plazo.
                </p>

                <div className="botoni">
                    {/* <a href="https://www.facebook.com/profile.php?id=100019093819038" className="button" target="_blank" rel='noreferrer'>
                        <i className="fa-brands fa-facebook-messenger">Escribeme </i>
                    </a> */}
                    {/* <a href="cv/CV-GabrielMeza.pdf" className="button" target="_blank" download="Curriculum-GabrielMeza.pdf">
                        Descargar CV <i className="fa-solid fa-file-pdf"></i></a> */}
                    <button>
                      <span className='box'>
                          descargar CV
                      </span>
                    </button>
                </div>
            </div>
            <div className="contenido-seccion">

                <div className="conte-detalles">
                  <img className='user' src={user} alt='persona' ></img>
                    <h3 className="titu"> Datos Personales</h3>
                    <ul className="lista">
                        <li className="list">
                            <strong>Nacimiento</strong>
                            25 octubre 2001
                        </li>
                        <li className="list">
                            <strong>Celular</strong>
                            +57 3012159838
                        </li>
                        <li className="list">
                            <strong>E-mail</strong>
                            jn200107@gmail.com
                        </li>
                        <li className="list">
                            <strong>Dirección</strong>
                            codazzi (cesar) - COLOMBIA
                        </li>
                        <li className="list">
                            <strong>Especialidad</strong>
                            <span>Desarrollador Web FrontEnd JR</span>
                        </li>
                    </ul>
                </div>

                <div className="conte-intereses">
                <img className='intere' src={interes} alt='persona' ></img>

                    <h3 className="titu2"><i></i>Intereses</h3>

                    <div className="contenedor">

                        <div className="div1 int">
                          <div className='bolas'>
                              <svg xmlns="http://www.w3.org/2000/svg" id='icon' className="icon icon-tabler icon-tabler-barbell" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                                <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                                <path d="M2 12h1"></path>
                                <path d="M6 8h-2a1 1 0 0 0 -1 1v6a1 1 0 0 0 1 1h2"></path>
                                <path d="M6 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                                <path d="M9 12h6"></path>
                                <path d="M15 7v10a1 1 0 0 0 1 1h1a1 1 0 0 0 1 -1v-10a1 1 0 0 0 -1 -1h-1a1 1 0 0 0 -1 1z"></path>
                                <path d="M18 8h2a1 1 0 0 1 1 1v6a1 1 0 0 1 -1 1h-2"></path>
                                <path d="M22 12h-1"></path>
                              </svg>
                          </div>
                            <span className='spn' >
                              gym
                            </span>
                        </div>

                        <div className="div2 int">
                          <div className='bolas'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-code" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M7 8l-4 4l4 4"></path>
                              <path d="M17 8l4 4l-4 4"></path>
                              <path d="M14 4l-4 16"></path>
                            </svg>
                          </div>
                            <span className='spn' >PROGRAMACIÓN</span>
                        </div>

                        <div className="div3 int">
                          <div className='bolas'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-tv" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M3 7m0 2a2 2 0 0 1 2 -2h14a2 2 0 0 1 2 2v9a2 2 0 0 1 -2 2h-14a2 2 0 0 1 -2 -2z"></path>
                              <path d="M16 3l-4 4l-4 -4"></path>
                            </svg>
                          </div>
                            <span className='spn' >PELÍCULAS</span>
                        </div>

                        <div className="div4 int">
                          <div className='bolas'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-music" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M6 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                              <path d="M16 17m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0"></path>
                              <path d="M9 17l0 -13l10 0l0 13"></path>
                              <path d="M9 8l10 0"></path>
                            </svg>
                          </div>
                            <span className='spn' >musica</span>
                        </div>

                        <div className="div5 int">
                          <div className='bolas'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-bowl" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M4 8h16a1 1 0 0 1 1 1v.5c0 1.5 -2.517 5.573 -4 6.5v1a1 1 0 0 1 -1 1h-8a1 1 0 0 1 -1 -1v-1c-1.687 -1.054 -4 -5 -4 -6.5v-.5a1 1 0 0 1 1 -1z"></path>
                            </svg>
                          </div>
                            <span className='spn' >COMIDA</span>
                        </div>

                        <div className="div6 int">
                          <div className='bolas'>
                            <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-device-gamepad-2" width="24" height="24" viewBox="0 0 24 24" stroke-width="1.75" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">
                              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                              <path d="M12 5h3.5a5 5 0 0 1 0 10h-5.5l-4.015 4.227a2.3 2.3 0 0 1 -3.923 -2.035l1.634 -8.173a5 5 0 0 1 4.904 -4.019h3.4z"></path>
                              <path d="M14 15l4.07 4.284a2.3 2.3 0 0 0 3.925 -2.023l-1.6 -8.232"></path>
                              <path d="M8 9v2"></path>
                              <path d="M7 10h2"></path>
                              <path d="M14 10h2"></path>
                            </svg>
                          </div>
                            <span className='spn' >video-juegos</span>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </section>

    <div className='redes'>
      <div className='caja'>
        <hr className='br2'></hr>
          <ul className="wrapper">
              <li className="icon facebook">
                  <span className="tooltip">Facebook</span>
                  <span> 
                    <a href={'https://www.facebook.com/profile.php?id=100009824020112'} target={'_blank'} rel='noreferrer' >
                      <svg xmlns="http://www.w3.org/2000/svg" height="60" width="60" viewBox="-204.79995 -341.33325 1774.9329 2047.9995"><path d="M1365.333 682.667C1365.333 305.64 1059.693 0 682.667 0 305.64 0 0 305.64 0 682.667c0 340.738 249.641 623.16 576 674.373V880H402.667V682.667H576v-150.4c0-171.094 101.917-265.6 257.853-265.6 74.69 0 152.814 13.333 152.814 13.333v168h-86.083c-84.804 0-111.25 52.623-111.25 106.61v128.057h189.333L948.4 880H789.333v477.04c326.359-51.213 576-333.635 576-674.373" fill="#1877f2"/><path d="M948.4 880l30.267-197.333H789.333V554.609C789.333 500.623 815.78 448 900.584 448h86.083V280s-78.124-13.333-152.814-13.333c-155.936 0-257.853 94.506-257.853 265.6v150.4H402.667V880H576v477.04a687.805 687.805 0 00106.667 8.293c36.288 0 71.91-2.84 106.666-8.293V880H948.4" fill="#fff"/></svg>
                    </a>
                  </span>
              </li>
              <li className="icon whatsap">
                  <span className="tooltip">Whatsapp</span>
                  <span>
                    <a href={"https://api.whatsapp.com/send?phone=573012159838&text=Hola,%20vi%20tu%20página%20web%20y%20me%20gustaría%20obtener%20más%20información"} target={'_blank'} rel='noreferrer' >
                        <img className='whatsapp' src={whatsapp} alt='logo' ></img>
                    </a>
                  </span>
              </li>
              <li className="icon linkedin">
                  <span className="tooltip">Linkedin</span>
                  <span>
                    <a href={'https://www.linkedin.com/in/jorge-navarro-880267254/'} target={'_blank'} rel='noreferrer' >
                        <img className='linke' src={linkedin} alt='linkedin' ></img>
                    </a>
                  </span>
              </li>
              <li className="icon Github">
                  <span className="tooltip">Github</span>
                  <span>
                    <a href={'https://github.com/jn200107'} target={'_blank'} rel='noreferrer' >
                      <img className='insta' src={github} alt='github' ></img>
                    </a> 
                  </span>
              </li>
          </ul>
        <hr className='br2'></hr>
      </div>
    </div>
        
      </div>



      








)
    
}

export default SobreMi