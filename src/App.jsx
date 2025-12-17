import './App.css'
import { useState, useRef, useEffect } from 'react'
import { motion } from "framer-motion"
import Navbar from './components/navbar'
import ModelCard from './components/ModelCard'
import OfferCard from './components/OfferCard.jsx'
import Footer from './components/Footer.jsx'

function App() {
  return (
    <>
      <Hero />
      <Models />
      <Vehicles />
      <Offers />
      <Configure />
      <Footer />
    </>
  )
}

export default App


function Hero() {
  return (
    <section className="hero">
      <div className="gradient" />
      <video className="hero-video" src="/BMW-Homepage-Redesign/videos/HeroVideo.mov" autoPlay loop muted></video>
      <Navbar />
      <div className="hero-text">
        <p className="hero-headline">Sheer Driving Pleasure</p>
        <div className="hero-cta-wrapper">
          <div className="hero-cta">
            <p className="hero-subheadline">CHANGE YOUR WORLD</p>
            <hr className="hero-line"/>
            <a href="https://www.bmw.ca/en/all-models.html" target="_blank" className="static-opacity-links">
              <button className="hero-button">Discover</button>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

function Models() {
  const allModels = [
    { modelName: "X Series", modelImage: "/BMW-Homepage-Redesign/pictures/XSeries.jpg", modelCaption: "Versatile utility meets sophisticated, clean design.", modelTags: "Gasoline | Hybrid", modelVideo: "/BMW-Homepage-Redesign/videos/XSeries.mov", modelURL: "https://www.bmw.ca/en/all-models.html?series=x"},
    { modelName: "M Series", modelImage: "/BMW-Homepage-Redesign/pictures/MSeries.avif", modelCaption: "Uncompromising performance, precision driving redefined.", modelTags: "Gasoline | Hybrid | Electric", modelVideo: "/BMW-Homepage-Redesign/videos/MSeries.mov", modelURL: "https://www.bmw.ca/en/all-models.html?bmwM=yes"},
    { modelName: "2 Series", modelImage: "/BMW-Homepage-Redesign/pictures/2Series.jpg", modelCaption: "Compact power meets sporty, agile dynamics.", modelTags: "Gasoline", modelVideo: "/BMW-Homepage-Redesign/videos/2Series.mov", modelURL: "https://www.bmw.ca/en/all-models.html?series=2"},
    { modelName: "3 & 4 Series", modelImage: "/BMW-Homepage-Redesign/pictures/3&4Series.jpg", modelCaption: "Perfect balance of performance and iconic style.", modelTags: "Gasoline | Electric", modelVideo: "/BMW-Homepage-Redesign/videos/3&4Series.mov", modelURL: "https://www.bmw.ca/en/all-models.html?series=3,4"},
    { modelName: "5 Series", modelImage: "/BMW-Homepage-Redesign/pictures/5Series.webp", modelCaption: "Advanced digital luxury for the business class.", modelTags: "Gasoline | Hybrid | Electric", modelVideo: "/BMW-Homepage-Redesign/videos/5Series.mov", modelURL: "https://www.bmw.ca/en/all-models.html?series=5"},
    { modelName: "6 Series", modelImage: "/BMW-Homepage-Redesign/pictures/6Series.jpg", modelCaption: "Space, comfort, and elegance for any distance.", modelTags: "Gasoline | Hybrid", modelVideo: "/BMW-Homepage-Redesign/videos/6Series.mov", modelURL: "https://www.bmw.ca/en/ssl/PreOwnedSearch.html"},
    { modelName: "7 & 8 Series", modelImage: "/BMW-Homepage-Redesign/pictures/7&8Series.webp", modelCaption: "Masterful design meets the pinnacle of comfort.", modelTags: "Gasoline | Hybrid | Electric", modelVideo: "/BMW-Homepage-Redesign/videos/7&8Series.mov", modelURL: "https://www.bmw.ca/en/all-models.html?series=7,8"},
    { modelName: "i Series", modelImage: "/BMW-Homepage-Redesign/pictures/iSeries.jpg", modelCaption: "Innovative electric mobility with dynamic performance.", modelTags: "Electric", modelVideo: "/BMW-Homepage-Redesign/videos/iSeries.mov", modelURL: "https://www.bmw.ca/en/all-models.html?fuelType=e"},
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const observerRef = useRef(null);
  const cardRefs = useRef([]);
  const carouselRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      scrollToIndex((activeIndex + 1) % allModels.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [activeIndex, isPaused]);

  const scrollToIndex = (index) => {
    const container = carouselRef.current;
    const targetCard = cardRefs.current[index];

    if (container && targetCard) {
      const targetOffset = targetCard.offsetLeft - container.offsetLeft;
      container.scrollTo({
        left: targetOffset,
        behavior: 'smooth',
      });
      setActiveIndex(index);
    }
  };

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = Number(entry.target.dataset.index);
            setActiveIndex(index);
          }
        });
      },
      {
        root: null,
        threshold: 0.6,
      }
    );

    cardRefs.current.forEach((card) => {
      if (card) observerRef.current.observe(card);
    });

    return () => {
      if (observerRef.current) observerRef.current.disconnect();
    };
  }, []);

  const handleVideoEnd = () => {
    const nextIndex = (activeIndex + 1) % allModels.length;
    scrollToIndex(nextIndex);
  };
  
  return (
    <section className="models">
      <div className="models-wrapper">
        <motion.h2 
          className="model-headline" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          The Complete BMW Lineup
        </motion.h2>
        <motion.p 
          className="model-subheadline" 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        >
          Experience power, pleasure, and performance like no other.
        </motion.p>
        <div className="carousel-wrapper" ref={carouselRef} onMouseEnter={() => setIsPaused(true)} onMouseLeave={() => setIsPaused(false)}>
          {allModels.map((model, index) => (
            <a 
              href={model.modelURL} 
              target='_blank' 
              key={index} 
              rel='noopener noreferrer'
              ref={(el) => (cardRefs.current[index] = el)}
              data-index={index}
              className="static-opacity-links"
            >
              <ModelCard {...model} onVideoEnd={activeIndex === index ? handleVideoEnd : undefined}/>
            </a>
          ))}
        </div>
        <div className="carousel-nav-wrapper">
          <ul className="carousel-nav">
            {allModels.map((_, index) => (
              <li 
                key={index} 
                className={`carousel-dot ${activeIndex === index ? 'active' : ''}`}
                onClick={() => scrollToIndex(index)}
                style={{ cursor: 'pointer' }}
              ></li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

function Vehicles() {
  return (
    <section className="vehicles" style={{backgroundImage: `url("/BMW-Homepage-Redesign/pictures/vehicleBackground.jpg")`}}>
      <motion.div 
        className="vehicle-text"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="full-width-title" >Find Your BMW: New & Certified Pre-Owned</h2>
        <p className="full-width-text" >
          Your ultimate driving machine awaits. Explore our full inventory of top-of-the-line luxury vehicles. 
          Ready to experience it? Book a test drive and find the machine that speaks to you.
        </p>
        <div className="button-container vehicle-buttons">
          <a href="https://www.bmw.ca/en/ssl/InventorySearch.html" target="_blank" className="static-opacity-links">
            <button>Vehicle Search</button>
          </a>
          <a href="https://www.bmw.ca/en/ssl/RequestTestDrive.html" target="_blank" className="static-opacity-links">
            <button>Book a Test Drive</button>
          </a>
        </div>
      </motion.div>
    </section>
  )
}

function Offers() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };

  return (
    <section className="offers">
      <h2 style={{textAlign: "center", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: "300", marginBottom: "clamp(24px, 5vw, 64px)"}}>
        Current Offers
      </h2>
      <motion.div 
        className="offer-list"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2, margin: "0px 0px -100px 0px" }}
      >
        <motion.a 
          href="https://www.bmw.ca/en/ssl/SpecialOffers.html" 
          target="_blank"
        >
          <OfferCard 
            href="https://www.bmw.ca/en/ssl/SpecialOffers.html" 
            title="The Road Home Sales Event" 
            caption="Secure exceptional lease rates for a limited time on select new BMW models. Your path to ownership starts here." 
            imageURL="/BMW-Homepage-Redesign/pictures/BMWRoadHomeSale.jpg" 
            backgroundPosition="55% 50%"
          />
        </motion.a>
        <motion.a 
          href="https://www.bmw.ca/en/ssl/SpecialOffers.html" 
          target="_blank"
        >
          <OfferCard 
            href="https://www.bmw.ca/en/ssl/SpecialOffers.html" 
            title="The X5: Exclusive Offer" 
            caption="Experience the legendary, one-of-a-kind, SUV with attractive terms. Discover how to save on your new X5 today." 
            imageURL="/BMW-Homepage-Redesign/pictures/X5Offer.webp" 
            backgroundPosition="80% 50%"
          />
        </motion.a>
        <motion.a 
          href="https://www.bmw.ca/en/ssl/RequestTestDrive.html" 
          target="_blank"
        > 
          <OfferCard 
          href="https://www.bmw.ca/en/ssl/RequestTestDrive.html" 
          title="The BMW Golf Experience" 
          caption="Book a test drive for a chance to win a golf trip for two to Cabot Cape Breton, one of Canada’s prestigious courses." 
          imageURL="/BMW-Homepage-Redesign/pictures/golfOffer.jpg" 
          backgroundPosition="40% 50%"/>
        </motion.a>
      </motion.div>
    </section>
  )
}

function Configure() {
  return (
    <section className="configure" style={{backgroundImage: `url("/BMW-Homepage-Redesign/pictures/configureBackground.jpg")`, marginBottom: "24px"}}>
      <motion.div 
        className="configure-text" 
        style={{maxWidth: "1310px"}}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2 className="full-width-title">Forge Your Ultimate Driving Machine</h2>
        <p className="full-width-text">
          Begin the journey of crafting a machine built to your exact specifications. Dive into the online configurator to 
          customize your one-of-a-kind spec and secure delivery of a truly personal luxury vehicle, right to your home.
        </p>
        <a href="https://www.bmw.ca/en/configurator.html" target='_blank' className='static-opacity-links'>
          <button>Configure</button>
        </a>
      </motion.div>
    </section>
  )
}