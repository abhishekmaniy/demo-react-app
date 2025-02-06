import './App.css';
import CarClass from './components/CarClass';
import CarTable from './components/CarTable';
import ClassComponent from './components/ClassComp';
import CountClass from './components/CountClass';
import Counter from './components/Counter';
import FunctionComponent from './components/FuncComp';
import Maps from './components/Maps';
import Props from './components/Props';

function App() {
  return (
    <>
      <ClassComponent />
      <FunctionComponent />
      <Props name="Abhishek Maniyar" />
      <Counter />
      <CountClass />
      <CarClass />
      <Maps />
      <CarTable/>
    </>
  );
}

export default App;
