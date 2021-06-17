import React from "react"
import {Helmet} from "react-helmet";

// import { useCallback, useEffect, useState } from "react"
import favicon from '../../assets/favicon.ico'
import logo from "../../assets/peerlab-logo.svg"
import icon from "../../assets/peerlab-icon.svg"
import styles from './index.module.scss'
// import { counter } from "./agent"

export const Labs:React.FunctionComponent = () => {
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
          <title>Peerlab | Labs</title>
          <link rel="shortcut icon" href={favicon} type="image/x-icon" />
        </Helmet>
        <main>
          <section>
            <img 
              src={icon}
              alt="Peerlab"
              width={400}
              height={400}
            />
          </section>             
        </main>
      </div> 
    </>
  )
}