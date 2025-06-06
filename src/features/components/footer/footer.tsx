import Link from "next/link";
import "./footer.css";
import Image from "next/image";

function Footer() {
    return (<footer className="footer">
        <div className="footer-decoration" >
            <Image src="/footer.svg" alt="Decoration" height={100} width={100}/>
        </div>
        <div className="footer-content">
            
            <div className="footer-shop">
                <h3>Shop</h3>
                <Link href="/shop">Accupuncture Needles</Link>
                <Link href="/shop">Electroacupuncture</Link>
                <Link href="/shop">Cosmo MOQ</Link>
                <Link href="/shop">Shop All</Link>
            </div>
            <div className="footer-learn">
                <h3>Learn</h3>
                <Link href="/products">Our Products</Link>
                <Link href="/products">Our Brands</Link>
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
                <p>We are the MHRA-registered importer of medical devices in the UK, and the official distributor of Suzhou Medical Appliance Factory — the world’s oldest and largest manufacturer of acupuncture needles.</p>
                <p>Website: <a href="https://www.sanvitahealth.com">www.sanvitahealth.co.uk</a></p>
                <p>📩 For the full Hwato catalogue or any enquiries, please email us at: 
                    <span className="footer-link"><a href="mailto:info@sanvitahealth.co.uk">info@sanvitahealth.co.uk</a></span>
                </p>
                <p>Phone: +44 (0) 1234 567890</p>
                <p>Address: 12 Prince St, London W1G 8JN</p>
                <p>Website built by  
                    <span className="footer-link"> <a href="https://www.jadenshek.com">Jaden Shek</a></span>
                </p>
            </div>
        </div>
        

        
        </footer> );
}

export default Footer;