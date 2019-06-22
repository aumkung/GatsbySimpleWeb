import React from "react"
import Layout from '../components/layout'
import images from '../assets/images/test.svg'

const textCenter = {
    textAlign: 'center'
}

export default () => (
    <Layout>
        <div>
            <h3 style={textCenter}>สวัสดีนี่คือ Gatsby Web Framework</h3>
            <p style={textCenter}>ใช้ง่ายอยู่นะ ?</p>
            <img src={images} />
        </div>
    </Layout>
)
