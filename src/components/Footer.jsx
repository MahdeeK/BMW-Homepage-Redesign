import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="content-wrapper">
        <div className="newsletter-container">
          <div className="newsletter-text">
            <img src="src/assets/pictures/BMW.png" alt="BMW logo" className="logo" style={{width: 'clamp(32px, 5vw, 64px)', height: 'clamp(32px, 5vw, 64px)'}}/>
            <p>Stay up to date with all things BMW.</p>
          </div>
          <div className="button-container">
            <a href="https://www.bmw.ca/en/ssl/1_cta_stay-connected_en.html" target="_blank" className="static-opacity-links">
              <button className="footer-button">Subscribe</button>
            </a>
            <a href="https://open.bmwgroup.com/bmw.html" target="_blank" className="static-opacity-links">
              <button className="footer-button">Download My BMW</button>
            </a>
          </div>
        </div>
        <div className="footer-links-wrapper">
          <div className="footer-links">
            <h1 className="footer-title">Shopping Tools</h1>
            <ul className="links">
              <li className="link-item"><a href="https://www.bmw.ca/en/fastlane/dealer-locator.html" className="link-url" target="_blank">Find a Retailer</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/configurator.html" className="link-url" target="_blank">Build Your Own</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/SpecialOffers.html" className="link-url" target="_blank">Special Offers</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/InventorySearch.html" className="link-url" target="_blank">New Vehicles</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/DemoInventorySearch.html" className="link-url" target="_blank">Pre-Owned Vehicles</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/more-bmw/parts-and-accessories/bmw-accessories-hub.html" className="link-url" target="_blank">Original BMW Accessories</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/bmw-financial-services.html" className="link-url" target="_blank">Financial Services</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="footer-title">Models and Innovation</h1>
            <ul className="links">
              <li className="link-item"><a href="https://www.bmw.ca/en/all-models.html" className="link-url" target="_blank">All Models</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/all-models.html?fuelType=e,h" className="link-url" target="_blank">Electric & Plug-In Hybrid</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/all-models.html?specialCategory=c" className="link-url" target="_blank">BMW Neue Klasse</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/all-models.html?specialCategory=c" className="link-url" target="_blank">Concept Cars</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/topics/details/cias-model-walkaround.html" className="link-url" target="_blank">Virtual Walkaround</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="footer-title">Contact and Support</h1>
            <ul className="links">
              <li className="link-item"><a href="https://www.bmw.ca/en/more-bmw/customer-support.html" className="link-url" target="_blank">Contact Us</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/Contact-Retailer.html" className="link-url" target="_blank">Contact Retailer</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/RequestTestDrive.html" className="link-url" target="_blank">Request a Test Drive</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/service-portal.html#roadside-assistance" className="link-url" target="_blank">Roadside Assistance</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/ssl/RSA-BMW.html" className="link-url" target="_blank">Book a Service Appointment</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/topics/owners/parts_service_warranty/warranties.html" className="link-url" target="_blank">Warranties</a></li>
            </ul>
          </div>
          <div className="footer-links">
            <h1 className="footer-title">Corporate and Brand</h1>
            <ul className="links">
              <li className="link-item"><a href="https://www.bmwgroup.com/en/company.html" className="link-url" target="_blank">About BMW</a></li>
              <li className="link-item"><a href="https://www.bmwgroup.jobs/ca/en.html" className="link-url" target="_blank">Careers</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/topics/experience/bmw-group.html" className="link-url" target="_blank">BMW Group</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/more-bmw/why-bmw.html" className="link-url" target="_blank">Why BMW</a></li>
              <li className="link-item"><a href="https://www.bmwgroup.com/en/news.html" className="link-url" target="_blank">News & Events</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/topics/details/supply-chain-integrity.html" className="link-url" target="_blank">Supply Chain Integrity</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/footer/metanavigation/aoda-policy.html" className="link-url" target="_blank">BMW Accessibility Standards</a></li>
            </ul>
          </div>
        </div>
        <hr />
        <div className="sub-footer-container" style={{paddingTop: "16px", paddingBottom: "32px"}}>
            <ul className="legal-links">
              <li className="link-item"><a href="https://www.bmw.ca/en/footer/footer-section/cookie-policy.html" className="link-url" target="_blank">Cookies & Ads</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/footer/metanavigation/Privacy_policy.html" className="link-url" target="_blank">Privacy Policy</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/footer/metanavigation/Terms_of_use.html" className="link-url" target="_blank">Terms of Use</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/footer/metanavigation/Customer_notice.html" className="link-url" target="_blank">Consumer Notice</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/more-bmw/quebec-consumers.html" className="link-url" target="_blank">Quèbec Consumers</a></li>
              <li className="link-item"><a href="https://www.bmw.ca/en/topics/details/first-responders.html" className="link-url" target="_blank">First Responders</a></li>
            </ul>
          <div className="social-media-links">
            <a href="https://www.facebook.com/BMW.Canada" target="_blank"><i class="ri-facebook-circle-fill" style={{fontSize: '24px'}} /></a>
            <a href="https://www.instagram.com/bmwcanada/" target="_blank"><i class="ri-instagram-fill" style={{fontSize: '24px'}} /></a>
            <a href="https://www.youtube.com/bmwcanada" target="_blank"><i class="ri-youtube-fill" style={{fontSize: '24px'}} /></a>
          </div>
        </div>
        <div className="copyright-container">
          <p style={{opacity: "70%", margin: "0"}}>&copy; BMW Canada 2025</p>
          <a href="https://www.bmw.ca/fr/home.html" target="_blank">
            <div className="language-selector">
              <i class="ri-global-fill"></i>
              <p style={{fontWeight: "600"}}>EN</p>
            </div>
          </a>
        </div>
      </div>
    </footer>
  )
} 

export default Footer;