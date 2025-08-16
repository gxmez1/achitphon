import './css/General.css'
import './css/Header.css'
import './css/Hero.css'
import './css/Projects.css'
import './css/About.css'
import Project from './Project.jsx'

function App() {
  const scrollToHome = () => {
    const aboutSection = document.querySelector('.hero-content');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToAbout = () => {
    const aboutSection = document.querySelector('.about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const scrollToProjects = () => {
    const aboutSection = document.querySelector('.projects');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };
  const handleClick = () => {
    scrollToHome();
    setTimeout(() => {
      const elements = document.querySelectorAll('.brandlogo');

      elements.forEach((element) => element.classList.add('trigger'));
      
      setTimeout(() => {
        elements.forEach((element) => element.classList.remove('trigger'));
      }, 801);
    }, 500);
    
  }
  return (
    <>
      <header>
        <div className="left">
          <img className="logo" src="https://logo-icons.com/cdn/shop/files/99-logo-1711889994.2.svg?v=1712759094&width=823" alt="Logo"></img>
          <div>Achitphon Saithong</div>
        </div>
        <div className="right">
          <div className="menu" onClick={scrollToHome}>Home</div>
          <div className="menu" onClick={scrollToAbout}>About</div>
          <div className="menu" onClick={scrollToProjects}>Projects</div>
          <div className="menu" onClick={handleClick}>Contact</div>
        </div>
      </header>
      <main>
        <section className="hero-content">
          <div className="hero-header">
            <div className="greet">Hi, <span className="span1">I'm</span> </div>
            <div className="name">Inter</div>
            
            <div className='foranimation'>
              <div className="text">A Beginner Web Developer</div> 
            </div>

            
            <div className="navigating">
              <a href='https://www.instagram.com/gamez121102/' target='blank'><img className="brandlogo logo1" src="https://www.svgrepo.com/show/506668/instagram.svg"></img></a>
              
              <a href='https://www.facebook.com/Achitphxn/' target='blank'><img className="brandlogo logo2" src="https://www.svgrepo.com/show/506656/facebook.svg"></img></a>
              <a href='https://github.com/Achitphon121' target='blank'><img className="brandlogo logo3" src="https://cdn-icons-png.flaticon.com/512/25/25231.png"></img></a>
            </div>
          </div>
          
        </section>
      </main>
      <main>
        <section className='about'>
          <div className='about-header'>
            <div className="topic">About Me</div>
            <div className="text">I am a Thai student with a strong passion for technology, creativity, and personal development. I am currently building my skills in web development, especially frontend technologies. I recently began exploring backend development with <a href='https://nodejs.org/en' className='link'>Node.js </a> and <a href='https://expressjs.com/' className='link'>Express.js</a> to become a full-stack developer. I enjoy solving problems logically, which also ties into my interest in cybersecurity, C++ programming, and mathematics, particularly as I prepare for the Computer <a href='https://www.posn.or.th/en/' className='link'>POSN 1</a> entrance exam.
            </div>
            <div className="text">I've been learning to create beautiful websites since 2022, starting with HTML and CSS, and I am now expanding my knowledge to include JavaScript and <a href='https://react.dev/' className='link'>React.js</a>. My goal is to become a proficient full-stack developer, capable of building dynamic and interactive web applications.
            </div>
            
          </div>
        </section>
      </main>
      <main>
        <section className='projects'>
            <h1 className="topic">Projects</h1>
            <p className='text'>This is my project I currently working on</p>
            <div className="container">
              <Project img='https://cdn-icons-png.freepik.com/512/10548/10548497.png' name='1# Portfolio' des='This is my first real-world project, a personal portfolio. It gives you information about myself in simple terms. This site has home, about, projects, and contact information.' tech='HTML CSS JavaScript React' status='Successfully developed' color='rgba(58, 205, 25, 1)' link=''/>
              <Project img='https://www.svgrepo.com/show/55980/task-list.svg' name='2# To-Do-List ' des='This project is currently in development' tech='HTML CSS JavaScript React' status='The website has been developing' color='rgba(255, 168, 46, 1)'/>
              <Project img='https://www.svgrepo.com/show/89910/calculator.svg' name='3# Calculator' des='This project is also currently in development. ' tech='HTML CSS JavaScript React' status='Future project' color='rgba(255, 24, 24, 1)'/>
            </div>
            <div className='copyright'>© 2025 Achitphon Saithong.</div>
        </section>
      </main>
      

    </>
  )
}

export default App
