import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {DataService} from "./services/data.ts";
import {F} from "@grammarly/focal";
import {map} from "rxjs";

const dataService = new DataService()

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <F.div>
          {dataService.counter$.pipe(map(
              (c) =>
                  <>
                      <span>{c}</span>
                      <span onClick={() => {dataService.increment()}}>Increment</span>
                  </>
          ))}
      </F.div>
    </>
  )
}

export default App
