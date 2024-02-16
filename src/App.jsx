import React, { useState } from "react";
import "./App.css";
import video from "./assets/video-vector.png"

const App = () => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);
  const [isImageVisible, setIsImageVisible] = useState(true);

  const handleImageClick = () => {
    setIsVideoVisible(!isVideoVisible);
    setIsImageVisible(!isImageVisible);
  };
  return (
    <>
      <main>
        {/* =======section 1 start===== */}
        <section className="hero">
          <img
            src="https://en-ae.ajmal.com/media/wysiwyg/new/header_img.jpg"
            alt=""
          />
          <div className="hero-txt">
            <span className="text-lg">THE NEW</span>
            <br />
            <span>ARISTOCRAT CORAL AND COASTAL</span>
          </div>
        </section>
        {/* =======section 1 end===== */}
        <article>
          <p className="">
            Immerse yourself in a world of refreshing and invigorating scents
            with <span>Aristocrat Coral & Coastal</span>.Surrender to their
            irresistible allure as these captivating fragrances become your
            guide to moments of pure serenity.
          </p>
          <div className="deco-logo">
            <img
              src="https://en-ae.ajmal.com/media/wysiwyg/new/flower1.jpeg"
              alt=""
            />
          </div>
        </article>
        {/* =======section 2 start===== */}
        <section className="shop">
          <h2 className="shop-header">SHOP NOW</h2>
          {/* 1st card (CEO) */}
          <div className={`card flex-row`}>
            <div className="card-left" onClick={handleImageClick}>
              {isImageVisible && (
                <>
                
                <img
                  src="https://en-ae.ajmal.com/media/wysiwyg/new/section_1.jpg"
                  alt="loading"
                />
                <img src={video} alt="" className="vector-video" />
                </>
              )}
              {isVideoVisible && (
                <video
                  src="https://ajmalassets.s3.me-central-1.amazonaws.com/ceo-ajmal.mp4"
                  autoPlay
                  controls
                ></video>
              )}
            </div>
            <div className="card-right">
              <h2 className="card__header">As Expressed By The Curator</h2>
              <p className="card__desc">
                ‘Aristocrat Coral’ for women encapsulates a dreamy, ethereal
                charm, while ‘Aristocrat Coastal’ for men embodies a refined,
                worldly aura. With these scents, we continue our journey of
                creating not just perfumes, but personal stories in each bottle
              </p>
              <div className="footer__text">
                - Abdulla Ajmal, CEO of Ajmal Perfumes.
              </div>
            </div>
          </div>
          {/* 2nd card (coral) */}
          <Card
            className="flex-row-reverse"
            img={"https://en-ae.ajmal.com/media/wysiwyg/new/section_3.jpg"}
            heading="ARISTOCRAT CORAL"
            desc="Entices with a fusion of succulent peach and exotic osmanthus. A captivating floral medley of tuberose, rose, narcissus, jasmine, and geranium follows with Woody vetiver and cedarwood provide depth, while ambergris adds allure. The musky undertones leave an elegant and charming impression"
            btnTxt="Discover Now"
          />
          {/*3rd card (coastal) */}
          <Card
            className="flex-row"
            img={"https://en-ae.ajmal.com/media/wysiwyg/new/section_4.png"}
            heading="ARISTOCRAT COASTAL"
            desc="A invigorating fragrance that starts with a burst of fresh and spicy notes, including grapefruit, black pepper, and olibanum. The heart of the fragrance reveals an aromatic and floral blend of basil and jasmine. The base notes bring depth and warmth with woody accents of patchoull and vetiver, balanced by a rich and ambery touch of amber."
            btnTxt="Discover Now"
          />
          <div className="aristocrat-demo" onClick={handleImageClick}>
            {isImageVisible && (
             <>
             
             <img
                src="https://en-ae.ajmal.com/media/wysiwyg/new/section_5.jpg"
                alt="loading"
              />
              <img src={video} alt="" className="vector-video" />
             
             </>

            )}
            {isVideoVisible && (
              <video
                src="https://ajmalassets.s3.me-central-1.amazonaws.com/coral-coastal.mp4"
                autoPlay
                controls
              ></video>
            )}
          </div>
        </section>
        {/* =======section 2 end===== */}
        <article>
          <h2 className="shop-header package-header">THE CRAFT OF PACKAGING</h2>
          <p className="package-desc">
            The bottles packaging has been meticulously crafted to exude a sense
            of luxury, with a premium feel that is nothing short of exquisite.
            The design aesthetics embody a timeless and sophisticated essence,
            evoking a feeling of class and aristocracy. Adding to its allure,
            the cap features a magnetic opening, effortlessly granting easy
            access when opening the bottle.
          </p>
          <div className="deco-logo">
            <img
              src="https://en-ae.ajmal.com/media/wysiwyg/new/flower2.jpeg"
              alt=""
            />
          </div>
        </article>
        {/* =======section 3 start===== */}
        <section className="flex images-section">
          <div className="coral-img">
            <img
              src={`https://en-ae.ajmal.com/media/wysiwyg/new/section_6.jpg`}
              alt=""
            />
          </div>
          <div className="costal-img">
            <img
              src={`https://en-ae.ajmal.com/media/wysiwyg/new/section_7.png`}
              alt=""
            />
          </div>
        </section>
        {/* =======section 3 end===== */}
        {/* =======section 4 start===== */}

        <section className="legacy">
          <h2 className="shop-header package-header">FOLLOW THE LEGACY</h2>
          <div className="legacy__cards">
            <LegacyCard
              img={`https://en-ae.ajmal.com/media/wysiwyg/new/section_4.png`}
            />
            <LegacyCard
              img={`https://en-ae.ajmal.com/media/wysiwyg/new/section_3.jpg`}
            />
            <LegacyCard
              img={`https://en-ae.ajmal.com/media/wysiwyg/new/section_4.png`}
            />
          </div>
        </section>
        {/* =======section 4 end===== */}
      </main>
    </>
  );
};

export default App;

export const Card = ({
  img,
  video,
  heading,
  desc,
  btnTxt,
  footer,
  className,
}) => {
  return (
    <div className={`card ${className}`}>
      <div className="card-left">
        {img && <img src={img} alt="loading" />}
        {video && <video src={video} autoPlay controls></video>}
      </div>
      <div className="card-right">
        <h2 className="card__header">{heading}</h2>
        <p className="card__desc">{desc}</p>
        {btnTxt && (
          <div role="button" className="card__btn">
            {btnTxt}
          </div>
        )}
        <div className="footer__text">{footer}</div>
      </div>
    </div>
  );
};
export const LegacyCard = ({ img }) => (
  <div className="legacy-card">
    <img src={img} alt="" />
  </div>
);
