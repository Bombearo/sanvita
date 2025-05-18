import "./Footer.css";

function Footer() {
    return (<footer className="footer">
        <div className="footer-decoration" >
            <img src="/footer.svg" alt="Decoration" />
        </div>
        <div className="footer-content">
            <div className="footer-logo">
                <img src="/logo.svg" alt="Logo" />
            </div>
            <div className="footer-links">
                <a href="#">Home</a>
                <a href="#">About us</a>
                <a href="#">Contact</a>
                <a href="#">Products</a>
                <a href="#">Learn</a>
            </div>
            <div className="footer-socials">
                <i className="fa-brands fa-facebook"></i>
                <i className="fa-brands fa-instagram"></i>
                <i className="fa-brands fa-twitter"></i>
            </div>
        </div>
        

        
        </footer> );
}

export default Footer;