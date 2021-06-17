import React from "react"
import {Helmet} from "react-helmet";

// import { useCallback, useEffect, useState } from "react"
import favicon from '../../assets/favicon.ico'
import logo from "../../assets/peerlab-logo.svg"
import icon from "../../assets/peerlab-icon.svg"
import styles from './index.module.scss'
// import { counter } from "./agent"

export const Home:React.FunctionComponent = () => {
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
    <>        
      <div className={styles.contentContainer}>
        <Helmet>
          <title>Peerlab | Home</title>
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <main>
          <section>
            <a href="https://www.peerlab.com.br" target="_blank">
              <img 
                src={icon}
                alt="Peerlab"
                width={400}
                height={400}
              />
            </a>
          </section>             
        </main>
        <footer>
          Powered by
          <span>
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
    </>
  )
}