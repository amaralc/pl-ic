import React from "react"
import {Helmet} from "react-helmet";

import favicon from '../../assets/favicon.ico'
import icon from "../../assets/peerlab-icon.svg"
import styles from './index.module.scss'
import { PageProps } from "../index.interface";

export const Labs:React.FC<PageProps> = ({title}) => {

  console.log(title)

  return (
    <>        
      <div className={styles.contentContainer}>
        <Helmet>
          <title>{title}</title>
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