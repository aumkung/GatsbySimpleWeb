import React from 'react'
import Layout from '../components/layout'
import images from '../assets/images/undraw_warning_cyit.svg'
import styles from './about.module.scss'
export default () => (
    <Layout>
        <h3 className={styles.textCenter}>หน้านี้ยังไม่มีอะไรให้ดู</h3>
        <img className={styles.image} src={images} alt="test" />
        <iframe width="640" height="360" src="https://www.youtube.com/embed/UbZJNPYWcXc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </Layout>
)