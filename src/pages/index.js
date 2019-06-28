import React from "react"
import Layout from '../components/layout'
import images from '../assets/images/test.svg'
import styles from './style.module.scss'

const textCenter = {
    textAlign: 'center'
}

export default () => (
    <Layout>
        <div>
            <h3 style={textCenter}>สวัสดีนี่คือ Gatsby Web Framework</h3>
            <p style={textCenter}>ใช้ง่ายอยู่นะ ?</p>
            <img src={images} />
            <div className={styles.container}>
                <div className={styles.videoWrapper}>
                    <iframe src="https://seeme.mthai-demo.com/ch/test-almip/embed/JkP3mK" frameborder="0" allow="encrypted-media" allowfullscreen scrolling="no"></iframe>
                </div>
            </div> 
        </div>
    </Layout>
)
