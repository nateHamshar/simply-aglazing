import './App.css';
function App() {
  return (
    <div className="App">
      <div className="landing">
        <h1 className='nameFirst'>Simply</h1>
        <h1 className='nameSecond'>A'glazing</h1>
        <p className='slogan'>Donuts done right.</p>
      </div>
      <div className="border"></div>
      <div className="contentRight">
        <div className="imgRight">
          <img src={require("./images/blueLemon.jpg")} alt="donuts" className='images' />
        </div>
        <h1 className="rightText">Delicious</h1>
      </div>
      <div className="contentLeft">
        <div className="imgLeft">
          <img src={require("./images/germanChoc.jpg")} alt="donuts" className='images' />
        </div>
        <h1 className="leftText">Homestyle</h1>
      </div>
      <div className="contentRight">
        <div className="imgRight">
          <img src={require("./images/cookieMonster.jpg")} alt="donuts" className='images' />
        </div>
        <h1 className="rightText">Perfection</h1>
      </div>
    </div>
  );
}

export default App;
