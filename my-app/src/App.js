import logo from './logo.svg';
import './style.css';
import './App.css';
import mysourceimage from "./pikachu.png";
function App() {
  return (
    <div className="App">
       <div style={{border:'solid 1px black',maxWidth:'100vw'}}>
          <h1 className='title red'>Pokemon Lovers</h1>
          <img src={mysourceimage} alt ='pikachu' width='250' /> 
          <br/>
          <img src="/bolbasaur.png" width='250' ></img>
          <br/>
          <video 
              width="320" 
              height="240" 
              controls 
              src="myVideo.mp4" 
              type="video/mp4">
          </video>
       </div>
    </div>   
  );
}

export default App;
