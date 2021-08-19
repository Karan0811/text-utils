import './App.css';
import NavBar from './components/NavBar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <NavBar title='Text-Utils' />
      <div className='container'>
        <TextForm heading='Enter Your Text' />
      </div>
    </>
  );
}

export default App;
