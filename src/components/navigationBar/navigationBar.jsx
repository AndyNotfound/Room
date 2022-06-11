import React, { useState } from 'react'
import { GiHamburgerMenu} from 'react-icons/gi'
import { AiOutlineClose } from 'react-icons/ai'
import logo from '../../images/logo.svg'
import '../scss/style.scss'

function NavigationBar() {
  const [toggleMenu, setToggleMenu] = useState(false);
  const toggleHandler = () => {
    setToggleMenu(!toggleMenu);
    console.log(toggleMenu);
  };
  return (
    <nav id='mainNavigation' className='mainNavigation'>
      <img src={logo} alt='Room company logo' className='mainNavigationLogo' />
      <ul className={toggleMenu? 'navLinks navLinksActive' : 'navLinks'}>
        <li><a href="">home</a></li>
        <li><a href="">shop</a></li>
        <li><a href="">about</a></li>
        <li><a href="">contact</a></li>
      </ul>
      <button onClick={toggleHandler} className="toggleMenu">
        {toggleMenu? <AiOutlineClose /> : <GiHamburgerMenu />}
      </button>
    </nav>
  )
}

export default NavigationBar