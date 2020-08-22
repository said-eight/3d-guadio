import Link from 'next/link'

const Header = () => (
  
  <div className="header">
    <div className="brand">
      <img src="/logo2.png" alt=""/>
    </div>
  <div className="topnav">
    <Link href="/">
    <a >What we do</a>
    </Link>
    <Link href="/">
    <a >Who we are</a>
    </Link>
    <Link href="/team">
    <a >Our team</a>
    </Link>
    <Link href="/">
    <a >Contact Us</a>
    </Link>
    
    <a className="navbutton" href="#about">Hire Us</a>
  </div>
  </div>

)

export default Header