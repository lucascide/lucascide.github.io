import logo from './logo.svg';
import './App.css';
//import Form from './Form';
import Start from './Start';
import RealStart from './RealStart';
import { useState } from 'react';
import Chat from './Chat';



function App() {


const [click, setClick] = useState(0);

const mudar = ()=> {
  setClick(click + 1);
  return;
}

  if(click == 0){
    return (
      <div className="App" style={{ }}>
            <RealStart f={mudar}/>
          {/*<Form/>*/}
      </div>
    );
  } else if (click == 1){
    return (
      <div className="App" style={{ }}>
            <Start f={mudar}/>
          {/*<Form/>*/}
      </div>
    );
  } else if (click == 2) {
    return (
      <div className="App" style={{ }}>
            <Chat />
          {/*<Form/>*/}
      </div>
    );
  }

}

export default App;
