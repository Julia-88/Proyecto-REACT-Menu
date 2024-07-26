import "./Header.scss"
import Menu from "../Menu/Menu"

function Header() {
  
  return (
    <header className="header">
      <h1 className="logo">Restaurante de Julia</h1>
        <Menu />
    </header>
  )
}

export default Header
