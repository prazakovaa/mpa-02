import './App.css'
import {useState} from 'react'
import ControlledInput from './components/ControlledInput'

function App() {
  const [vali, setVali] = useState<string>("hi");

  return (
    <>
      <ControlledInput defaultValue='vali' label='vstup' onChange={x => {setVali(x)}}/>
      <ControlledInput defaultValue='vali' label='vstup' onChange={e => {}}/>
        <div>{vali}</div>
    </>
  )
}

export default App
