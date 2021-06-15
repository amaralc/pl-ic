import React from "react"

// import { useCallback, useEffect, useState } from "react"
import logo from "./assets/peerlab-logo.svg"
import icon from "./assets/peerlab-icon.svg"
import "./App.css"
// import { counter } from "./agent"

function App() {
  // const [count, setCount] = useState()

  // const refreshCounter = useCallback(async () => {
  //   const res: any = await counter.getValue()
  //   setCount(res.toString())
  // }, [])

  // useEffect(() => {
  //   refreshCounter()
  // }, [])

  // const onIncrementClick = useCallback(async () => {
  //   await counter.increment()
  //   refreshCounter()
  // }, [counter])

  return (
    <div className="app" >
        <main>
          <section>
            <img 
              src={icon}
              alt="Peerlab"
              width={300}
              height={300}
            />
          </section>             
        </main>
        <footer>
          Powered by
          <span className="footer-span">
            <a href="https://www.peerlab.com.br" target="_blank">
              <img 
                src={logo}
                alt="Peerlab"
                width={100}
                height={15}
              />
            </a>
          </span>          
        </footer>
      </div>
  )
}

export default App
