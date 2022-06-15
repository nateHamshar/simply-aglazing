import './App.css';
function App() {



  const reveal = () => {
    let reveals = document.querySelectorAll(".reveal")

    for (let i = 0; i < reveals.length; i++){
      let windowheight = window.innerHeight;
      let revealtop = reveals[i].getBoundingClientRect().top;
      let revealpoint = 150;

      if (revealtop < windowheight - revealpoint){
        reveals[i].classList.add('active')
      } else {
        reveals[i].classList.remove('active')
      }
    }
  }
  window.addEventListener('scroll', reveal);

  return (
    <div className="App">
      <div className="landing">
        <h1 className='nameFirst'>Simply</h1>
        <h1 className='nameSecond'>A'glazing</h1>
        <p className='slogan'>Donuts done right<span className="period">.</span></p>
      </div>

      <div className="border"></div>

      <div className="contentRight reveal">
        <div className="imgRight">
          <img src={require("./images/blueLemon.jpg")} alt="donuts" className='images' />
        </div>
        <div className="overlayRight">
          <h1>You've Got Options</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>
          <a href="/" className="overlayLink">Look at our menu!</a>
        </div>
      </div>

      <div className="contentLeft reveal">
        <div className="imgLeft">
          <img src={require("./images/germanChoc.jpg")} alt="donuts" className='images' />
        </div>
        <div className="overlayLeft">
          <h1>We make ordering easy</h1>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Corrupti sed est eos.</p>
          <a href="/" className="overlayLink">Order Now!</a>
        </div>
      </div>

      <div className="contentRight reveal">
        <div className="imgRight">
          <img src={require("./images/cookieMonster.jpg")} alt="donuts" className='images' />
        </div>
        <div className="overlayRight">
          <h1>Yes, We Cater</h1>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam, non?</p>
          <a href="/" className="overlayLink">Got to Catering</a>
        </div>
      </div>
    </div>
  );

  
}

export default App;
