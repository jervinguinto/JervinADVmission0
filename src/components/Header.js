import styles from './Header.module.css'
import {useState} from "react"
export default function Header(){
// const [burgerMenu,setBurgerMenu]=useState(true)
// const toOpen =() =>{burgerMenu(!burgerMenu)}

    return(
        <div>
<div className={styles.header}>
    <div className={styles.leftSide}>
<img className={styles.myImg} src="me.png" alt="me"></img>
<p>The Pink Spork</p>
</div>
{/* <div className={burgerMenu?styles.rightSide:styles.ul}> */}
<ul className={styles.rightSide}>
<li>Home</li>
<li>About</li>
<li>Contact </li>
<btn>Support</btn>
</ul>
{/* <ul className={styles.hamburger}>
<li>Menu 1</li>
<li>Menu 2</li>
<li>Menu 3</li>
<btn>Log In</btn>
</ul> */}
</div>
</div>


        // </div>
    )
}