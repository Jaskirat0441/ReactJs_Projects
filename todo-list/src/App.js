// import './App.css';

const bodycontainer = {
  display: 'flex',
  justifyContent : 'center',
  alignItems : 'center',
  height : '100vh',
  backgroundColor : '#283564',
  padding :'10px'
}

const toDoList = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  backgroundColor: '#79608a',
  borderRadius: '100px',
  width: '600px',
  boxShadow: '0 0 10px 0 rgba(255,255,255,.5)',
  background: 'linear-gradient(135deg, #14fc25, #ffeb3b, #ff00e0)',
}

function App() {
  return (
    <>
     <div style={bodycontainer}>
        <div style={toDoList}>

        </div>

     </div>
    </>
  );
}

export default App;
