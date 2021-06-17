import React from "react"
import {Helmet} from "react-helmet";

import favicon from '../../assets/favicon.ico'
import icon from "../../assets/peerlab-icon.svg"
import styles from './index.module.scss'
import { PageProps } from "../index.interface";

export const Equipment:React.FC<PageProps> = ({title}) => {

  return (
    <>        
      <div className={styles.contentContainer}>
        <Helmet>
          <title>{title}</title>
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
      </div> 
    </>
  )
}