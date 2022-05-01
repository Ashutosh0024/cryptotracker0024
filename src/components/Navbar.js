import React, {useState} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import './Navbar.css'

const Navbar = () => {
const [click, setClick] = useState(false)
const handleClick = () => setClick(!click)


    return (
        <div className='header'>
            <div className='container'>
                <h1>CRYPTO</h1>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <a href='https://cryptowebapp0024.netlify.app/'>Home</a>
                    </li>
                    <li>
                        <a href='/'>Tracker</a>
                    </li>
                
                </ul>
                <div className='input-container'>
                    <button className='btn'><a href='https://wallet-demo-react.netlify.app/'>Go to crypto Wallet</a></button>
                </div>
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={20} style={{color: '#333'}}/>) : (<FaBars size={20} style={{color: '#333'}} />)}
                    
                </div>
            </div>
        </div>
    )
}

export default Navbar

