import React from 'react'
import styles from './layout.module.scss'
import { Link } from 'gatsby'

const ListLink = props => (
    <li className={styles.listmenu}>
      <Link to={props.to}>{props.children}</Link>
    </li>
)

export default ({ children }) => (
    <div className={styles.layout} >
        <header style={{ marginBottom: `1.5rem` }}>
            <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
                <h3 style={{ display: `inline` }}>AummStudio</h3>
            </Link>
            <ul style={{ listStyle: `none`, float: `right` }}>
                <ListLink to="/">Home</ListLink>
                <ListLink to="/about/">About</ListLink>
                <ListLink to="/contact/">Contact</ListLink>
            </ul>
        </header>
        {children}
    </div>
)