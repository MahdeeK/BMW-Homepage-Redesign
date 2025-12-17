import React, { useState } from 'react';
import './SideNav.css'

const menuData = [
  {
    title: "Shopping Tools",
    links: [
      { text: "Find a Retailer", url: "https://www.bmw.ca/en/fastlane/dealer-locator.html" },
      { text: "Build Your Own", url: "https://www.bmw.ca/en/configurator.html" },
      { text: "Special Offers", url: "https://www.bmw.ca/en/ssl/SpecialOffers.html" },
      { text: "New Vehicles", url: "https://www.bmw.ca/en/ssl/InventorySearch.html" },
      { text: "Pre-Owned Vehicles", url: "https://www.bmw.ca/en/ssl/DemoInventorySearch.html" },
      { text: "Original BMW Accessories", url: "https://www.bmw.ca/en/more-bmw/parts-and-accessories/bmw-accessories-hub.html" },
      { text: "Financial Services", url: "https://www.bmw.ca/en/bmw-financial-services.html" },
    ],
  },
  {
    title: "Models and Innovation",
    links: [
      { text: "All Models", url: "https://www.bmw.ca/en/all-models.html" },
      { text: "Electric & Plug-In Hybrid", url: "https://www.bmw.ca/en/all-models.html?fuelType=e,h" },
      { text: "BMW Neue Klasse", url: "https://www.bmw.ca/en/all-models.html?specialCategory=c" },
      { text: "Concept Cars", url: "https://www.bmw.ca/en/all-models.html?specialCategory=c" },
      { text: "Virtual Walkaround", url: "https://www.bmw.ca/en/topics/details/cias-model-walkaround.html" },
    ],
  },
  {
    title: "Contact and Support",
    links: [
      { text: "Contact Us", url: "https://www.bmw.ca/en/more-bmw/customer-support.html" },
      { text: "Contact Retailer", url: "https://www.bmw.ca/en/ssl/Contact-Retailer.html" },
      { text: "Request a Test Drive", url: "https://www.bmw.ca/en/ssl/RequestTestDrive.html" },
      { text: "Roadside Assistance", url: "https://www.bmw.ca/en/service-portal.html#roadside-assistance" },
      { text: "Book a Service Appointment", url: "https://www.bmw.ca/en/ssl/RSA-BMW.html" },
      { text: "Warranties", url: "https://www.bmw.ca/en/topics/owners/parts_service_warranty/warranties.html" },
    ],
  },
  {
    title: "Corporate and Brand",
    links: [
      { text: "About BMW", url: "https://www.bmwgroup.com/en/company.html" },
      { text: "Careers", url: "https://www.bmwgroup.jobs/ca/en.html" },
      { text: "BMW Group", url: "https://www.bmw.ca/en/topics/experience/bmw-group.html" },
      { text: "Why BMW", url: "https://www.bmw.ca/en/more-bmw/why-bmw.html" },
      { text: "News & Events", url: "https://www.bmwgroup.com/en/news.html" },
      { text: "Supply Chain Integrity", url: "https://www.bmw.ca/en/topics/details/supply-chain-integrity.html" },
      { text: "BMW Accessibility Standards", url: "https://www.bmw.ca/en/footer/metanavigation/aoda-policy.html" },
    ],
  },
];

function SideNav({ isMenuOpen, onClose }) {
  const [activeCategory, setActiveCategory] = useState(null);
  const currentCategoryData = menuData.find(
    (category) => category.title === activeCategory
  );

  const handleDrillDown = (title) => {
    setActiveCategory(title);
  };
  
  const handleBack = () => {
    setActiveCategory(null);
  };

  const handleClose = () => {
    setActiveCategory(null);
    onClose(); 
  };

  return (
    <nav className={`side-menu ${isMenuOpen ? 'is-open' : ''}`}>
      <div className="menu-header">
          {activeCategory ? (
            <i class="ri-arrow-left-long-line" onClick={handleBack}></i>
          ) : (
            <span className="back-button-placeholder"></span>
          )}
          <i className="ri-close-line" onClick={handleClose}></i>
      </div>
      
      <div className="menu-content-wrapper">
          <div className="menu-content">
            <div className={`menu-animation-container ${activeCategory ? 'drilled-down' : ''}`}>
                <div className="menu-panel categories-panel">
                <ul className="categories-list">
                    {menuData.map((category) => (
                    <li
                        key={category.title}
                        className="category-item"
                        onClick={() => handleDrillDown(category.title)} 
                    >
                        <h3 className="category-title">{category.title}</h3>
                        <i className="ri-arrow-right-wide-line drill-icon"></i>
                    </li>
                    ))}
                </ul>
                </div>
                <div className="menu-panel links-panel">
                {currentCategoryData && (
                    <ul className="menu-links">
                    {currentCategoryData.links.map((link) => (
                        <li key={link.text} className="menu-item">
                        <a
                            href={link.url}
                            className="item-url"
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={handleClose}
                        >
                            {link.text}
                        </a>
                        </li>
                    ))}
                    </ul>
                )}
                </div>
            </div>
            </div>
          <div className="bottom-menu">
                  <div className="button-container">
                    <a href="https://www.bmw.ca/en/ssl/1_cta_stay-connected_en.html" target="_blank" className="static-opacity-links">
                      <button className="menu-button">Subscribe</button>
                    </a>
                    <a href="https://open.bmwgroup.com/bmw.html" target="_blank" className="static-opacity-links">
                      <button className="menu-button">Download My BMW</button>
                    </a>
                  </div>
              <div className="option-wrapper">
                  <div className="social-media-links">
                        <a href="https://www.facebook.com/BMW.Canada" target="_blank"><i class="ri-facebook-circle-fill" style={{fontSize: '24px'}} /></a>
                        <a href="https://www.instagram.com/bmwcanada/" target="_blank"><i class="ri-instagram-fill" style={{fontSize: '24px'}} /></a>
                        <a href="https://www.youtube.com/bmwcanada" target="_blank"><i class="ri-youtube-fill" style={{fontSize: '24px'}} /></a>
                  </div>
                  <a href="https://www.bmw.ca/fr/home.html" target="_blank">
                    <div className="language-selector">
                      <i class="ri-global-fill"></i>
                      <p style={{fontWeight: "600"}}>EN</p>
                    </div>
                  </a>
              </div>
          </div>
      </div>
    </nav>
  );
}

export default SideNav