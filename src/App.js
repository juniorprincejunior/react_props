
import './App.css';
import { Profile } from './profile/Profile';
import 'bootstrap/dist/css/bootstrap.min.css'
let FullName="Junior";
let  Bio="jnourvrrnrfbrbrur"
let profession = "cybersecurité"
const clickme=()=>{
  if(FullName===undefined){
    alert(profession)
  }
  else{
    alert(FullName+' est un expert en '+profession +'😎.')
  }
}

function App() {
  
  return (
    <div style={{ 
      padding: '20px',
      color: '#ffff',
      border: '1px solid #ffff',
      borderRadius: '5px',
      width: '30%',
      margin: '5% auto',
      display: 'grid',
      justifyContent: 'center',}} className="App">
      <Profile FullName={FullName} Bio={Bio}  profession = {profession} clickme= {clickme}/>
    </div>
  );
}

export default App;
