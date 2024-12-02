import "./Navbar.css";
import react from "react"
function Navbar() {
    return(
        <nav className="navbar">
            <div className="logo">
                <h1>Tienda de Tenis</h1>
            </div>
            <ul className="nav-links">
                <li><a href="#home">Inicio</a></li>
                <li><a href="#products">Productos</a></li>
                <li><a href="#contact">Contacto</a></li>
            </ul>
            <div className="cart-widget">
                <CartWidget />
            </div>
        </nav>
    );
};

const CartWidget = () => {
    return (
        <div className="cart-icon">
            🛒<span className="cart-count">0</span>
        </div>

    )
} 
export default Navbar ;