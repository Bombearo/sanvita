import Link from "next/link";
import "./Footer.css";

function Footer() {
    return (<footer className="footer">
        <div className="footer-decoration" >
            <img src="/footer.svg" alt="Decoration" />
        </div>
        <div className="footer-content">
            
            <div className="footer-shop">
                <h3>Shop</h3>
                <Link href="/about">Accupuncture Needles</Link>
                <Link href="/contact">Electroacupuncture</Link>
                <Link href="/products">Cosmo MOQ</Link>
                <Link href="/learn">Shop All</Link>
            </div>
            <div className="footer-learn">
                <h3>Learn</h3>
                <Link href="/learn">Our Products</Link>
                <Link href="/learn">Our Brands</Link>
                <Link href="/learn">Acupuncture Needles</Link>
            </div>
            <div className="footer-info">
                <h3>Further Information</h3>
                <Link href="/about">About us</Link>
                <Link href="/contact">Contact us</Link>
                <Link href="/privacy">Privacy Policy</Link>
                <Link href="/terms">Terms of Service</Link>
            </div>

            <div className="footer-misc">
                <h3>Sanvita</h3>
                <p>Official UK importer and distributor of Hwato.</p>
                <p>Website: <a href="https://www.sanvitahealth.com">www.sanvitahealth.com</a></p>
                <p>Email: info@sanvitahealth.com</p>
                <p>Phone: +44 (0) 1234 567890</p>
                <p>Address: 123 Sanvita Street, London, UK</p>
                <p>Website built by <a href="https://www.jadenshek.com">Jaden Shek</a></p>
            </div>
        </div>
        

        
        </footer> );
}

export default Footer;