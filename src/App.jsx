import React from "react";
import "./App.css";
import heroImg from "./assets/hero.jpg";
import CEO from "./assets/CEO.jpg";
import coral from "./assets/coral.jpg";
import coastal from "./assets/coastal.png";
import aristocrat from "./assets/aristocarat.jpg";
import costalImg from "./assets/costalImg.png";
import coralImg from "./assets/coralImg.jpg";
import packaging from "./assets/packaging.png";
import shopDeco from "./assets/shop.png";

const App = () => {
  return (
    <>
      <main>
        <section className="hero">
          <img src={heroImg} alt="" />
          <div className="hero-txt">
            <span className="text-lg">THE NEW</span>
            <br />
            <span>ARISTOCRAT CORAL AND COASTAL</span>
          </div>
        </section>
        <article>
          <p className="">
            Immerse yourself in a world of refreshing and invigorating scents
            with <span>Aristocrat coral & coastal</span>.Surrender to their
            irresistible allure as these captivating fragrances become your
            guide to moments of pure serenity.
          </p>
          <div className="deco-logo">
            <img src={shopDeco} alt="" />
          </div>
        </article>
        <section className="shop">
          <h2 className="shop-header">SHOP NOW</h2>
          {/* CEO saying */}
          <Card
            className="flex-row"
            img={CEO}
            heading="As Expressed By The Curator"
            desc="‘Aristocrat Coral’ for women encapsulates a dreamy, ethereal charm, while ‘Aristocrat Coastal’ for men embodies a refined, worldly aura. With these scents, we continue our journey of creating not just perfumes, but personal stories in each bottle"
            footer="- Abdulla Ajmal, CEO of Ajmal Perfumes."
          />
          {/* coral */}
          <Card
            className="flex-row-reverse"
            img={coral}
            heading="ARISTOCRAT CORAL"
            desc="Entices with a fusion of succulent peach and exotic osmanthus. A captivating floral medley of tuberose, rose, narcissus, jasmine, and geranium follows with Woody vetiver and cedarwood provide depth, while ambergris adds allure. The musky undertones leave an elegant and charming impression"
            btnTxt="Discover Now"
          />
          {/* coastal */}
          <Card
            className="flex-row"
            img={coastal}
            heading="ARISTOCRAT COASTAL"
            desc="A invigorating fragrance that starts with a burst of fresh and spicy notes, including grapefruit, black pepper, and olibanum. The heart of the fragrance reveals an aromatic and floral blend of basil and jasmine. The base notes bring depth and warmth with woody accents of patchoull and vetiver, balanced by a rich and ambery touch of amber."
            btnTxt="Discover Now"
          />
          <div className="aristocrat-demo">
            <img src={aristocrat} alt="" />
          </div>
        </section>
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
            <img src={packaging} alt="" />
          </div>
        </article>
        <section className="flex images-section">
          <div className="coral-img">
            <img src={coralImg} alt="" />
          </div>
          <div className="costal-img">
            <img src={costalImg} alt="" />
          </div>
        </section>
        <section className="legacy">
          <h2 className="shop-header package-header">FOLLOW THE LEGACY</h2>
          <div className="legacy__cards">
            <LegacyCard img={coral} />
            <LegacyCard img={coastal} />
            <LegacyCard img={coral} />
          </div>
        </section>
      </main>
    </>
  );
};

export default App;

export const Card = ({ img, heading, desc, btnTxt, footer, className }) => (
  <div className={`card ${className}`}>
    <div className="card-left">
      <img src={img} alt="" />
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

export const LegacyCard = ({ img }) => (
  <div className="legacy-card">
    <img src={img} alt="" />
  </div>
);
