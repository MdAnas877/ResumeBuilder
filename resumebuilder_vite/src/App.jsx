import { BrowserRouter,Route,Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import DashBoard from './components/DashBoard';
import FirstTemplateForm from './components/FirstTemplateForm';
import Resume from './components/Resume';
import Resume2 from './components/Resume2';
import Resume3 from './components/Resume3';
import Resume4 from './components/Resume4';
import Resume5 from './components/Resume5';
import Resume6 from './components/Resume6';
import Resume7 from './components/Resume7';
import Resume8 from './components/Resume8';
import Main from './components/Main';
import Atest from './components/Atest';
import Template from './components/Template';




function App() {
  
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/template' element={<Template/>}/>
      <Route path='/dash' element={<DashBoard/>}/>
      <Route path='/main' element={<Main/>}/>
      <Route path='/firstform' element={<FirstTemplateForm/>}/>
      <Route path='/resume' element={<Resume/>} />
      <Route path='/resume2' element={<Resume2/>}/>
      <Route path='/resume3' element={<Resume3/>}/>
      <Route path='/resume4' element={<Resume4/>}/>
      <Route path='/resume5' element={<Resume5/>}/>
      <Route path='/resume6' element={<Resume6/>}/>
      <Route path='/resume7' element={<Resume7/>}/>
      <Route path='/resume8' element={<Resume8/>}/>
      <Route path='/test' element={<Atest/>}/>
      </Routes>
      </BrowserRouter>
       
    </div>
  );
}

export default App;
