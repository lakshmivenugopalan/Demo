
import React,{useState} from 'react';
import './App.css';
import Nav from './Components/Nav'
import Search1 from './Components/Search1';
import Card1 from './Components/Card1';
import MsPage  from './Pages/MsPage';


function App() {

         
         
  const[showPage,setShowPage]=useState('')

 
   
  return (
    <div className="App">
      <Nav />
     
      <Search1/>
      
      <div className='jobDetails-main'>
        <div className="jobDetails-content">


          <Card1 data={setShowPage}
                     />
         
        </div>


      
        < MsPage item={showPage}/>
        
               
      
      </div>

    </div>
  );
}

export default App;
