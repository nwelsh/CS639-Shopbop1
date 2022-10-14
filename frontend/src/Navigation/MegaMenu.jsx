import React from "react";
import styles from "./MegaMenu.module.css";
import { useState } from "react";
// import Modal from "./Modal";
import { Link } from "react-router-dom";

const MegaMenu = () => {
  const [show, setShow] = useState(false);

  const [hover1, setHover1] = useState(false);
  const [hover2, setHover2] = useState(false);
  const [hover3, setHover3] = useState(false);
  const [hover4, setHover4] = useState(false);
  const [hover5, setHover5] = useState(false);
  const [hover6, setHover6] = useState(false);
  const [hover7, setHover7] = useState(false);
  const [hover8, setHover8] = useState(false);
  const [hover9, setHover9] = useState(false);

  show
    ? (document.querySelector("body").style.overflow = "hidden")
    : (document.querySelector("body").style.overflow = "");

  return (
    <>
      <div className={styles.drop}>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover1 && styles.tabStyles}`}>
            WHAT'S NEW
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover1(true)}
            onMouseLeave={() => setHover1(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>WHAT'S NEW</p>
                <a href="/">New Today</a>
                <a href="/">New This Week</a>
                <a href="/">Top Sellers</a>
                <Link to="/">Designer Boutique</Link>
                <Link to="/">All What's New</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>WHAT'S NEW BY CATEGORY</p>
                <Link to="/">Clothing</Link>
                <Link to="/">Shoes</Link>
                <Link to="/">Bags</Link>
                <Link to="/">Jewelery & Accessories</Link>
                <Link to="/">Men</Link>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">Party Perfect</a>
                <a href="/">Destination Dresses</a>
                <a href="/">The Latest Form Cult Gaia</a>
                <a href="/">Adventure Time</a>
                <a href="/">Dream Dresses</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_whatsnew_slot1_dresses.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>The Dress Shop</p>
                <Link to="/">Shop Now</Link>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover2 && styles.tabStyles}`}>
            OUR FAVORITES
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover2(true)}
            onMouseLeave={() => setHover2(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>OUR FAVORITES</p>
                <a href="/">Spring '22 Trend Edit</a>
                <a href="/">AAPI Designers & AAPI</a>
                <a href="/">Black Owned</a>
                <a href="/">Back in Stock</a>
                <a href="/">Caroline's Hearts</a>
                <a href="/">Designer Boutique</a>
                <a href="/">Editor's Pick</a>
                <a href="/">Fashion Finds</a>
                <a href="/">Most Hearted Styles</a>
                <a href="/">Shopbop Exclusives</a>
                <a href="/">Top Sellers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>SHOP BY OCCASION</p>
                <a href="/">Best-Dressed Guest</a>
                <a href="/">Daytime Drama</a>
                <a href="/">New 9-To-5</a>
                <a href="/">The Dress Shop</a>
                <a href="/">Vacation Wardrobe</a>
                <a href="/">Wedding Shop</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot1_topsellers.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Top Sellers</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2021/2021_07/sb_20210719_desktop_ourfavorites_slot2_mosthearted.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Most-Hearted Styles</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_ourfavorites_slot3_vacation.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Vacation Wardrobe</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover3 && styles.tabStyles}`}>
            BOP@SHOP
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover3(true)}
            onMouseLeave={() => setHover3(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>LOOT BOXES</p>
                <Link to="/">What's In the Box</Link>
                <Link to="/">Pricing</Link>
                <Link to="/choices">Try It Now</Link>
                <Link to="/">My Loot Boxes</Link>
                {/*<a href="/">STAND STUDIO</a>*/}
              </div>
              <div>
                {/*<p className={styles.dropHeadings}>TOP DESIGNERS</p>*/}
                {/*<a href="/">AGOLDE</a>*/}
                {/*<a href="/">Golden Goose</a>*/}
                {/*<a href="/">Nanuska</a>*/}
                {/*<a href="/">STAUD</a>*/}
                {/*<a href="/">STAND STUDIO</a>*/}
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_designers_slot1_NiliLotan.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>
                  Polisehd Pieces: Nili Lotan
                </p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_designers_slot2_cultgaia.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Just Beachy: Cult Gaia</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover4 && styles.tabStyles}`}>
            CLOTHING
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover4(true)}
            onMouseLeave={() => setHover4(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>CLOTHING</p>
                <a href="/">Activewear</a>
                <a href="/">Coats</a>
                <a href="/">Dresses</a>
                <a href="/">Jackets</a>
                <a href="/">Jeans</a>
                <a href="/">Pants</a>
                <a href="/">Shorts</a>
                <a href="/">Skirts</a>
                <a href="/">Sweaters</a>
                <a href="/">Tops</a>
                <a href="/">All Clothing</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>NAMES TO KNOW</p>
                <a href="/">AGOLDE</a>
                <a href="/">Levi's</a>
                <a href="/">MOTHER</a>
                <a href="/">Sea</a>
                <a href="/">Vince</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">Most Hearted Styles</a>
                <a href="/">Black Designers</a>
                <a href="/">Designer Boutique</a>
                <a href="/">Editor's Pick</a>
                <a href="/">Extended Sizes</a>
                <a href="/">Fashion Finds</a>
                <a href="/">Top Sellers</a>
                <p className={styles.dropHeadings}>SHOP BY OCCASION</p>
                <a href="/">Best-Dressed Guest</a>
                <a href="/">New 9-To-5</a>
                <a href="/">Polished Pieces</a>
                <a href="/">The Dress Shop</a>
                <a href="/">Vacation Wardrobe</a>
                <a href="/">Wedding Shop</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_clothing_slot1_EnglishFactory.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>New From English Factory</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_clothing_slot2_oneshoulder.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>One Shoulder Dresses</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover5 && styles.tabStyles}`}>
            ACTIVE
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover5(true)}
            onMouseLeave={() => setHover5(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>CLOTHING</p>
                <a href="/">Dresses & Jumpsuits</a>
                <a href="/">Leggings</a>
                <a href="/">Matching Sets</a>
                <a href="/">Shorts & Skirts</a>
                <a href="/">Sport Bras</a>
                <a href="/">Sweatpants</a>
                <a href="/">Tops</a>
                <a href="/">Sweatshirts</a>
                <a href="/">All Clothing</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>ACCESSORIES</p>
                <a href="/">Active Accessories</a>
                <a href="/">Bags</a>
                <a href="/">Sneakers</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>NAMES TO KNOW</p>
                <a href="/">Alo Yoga</a>
                <a href="/">Beyond Yoga</a>
                <a href="/">Girlfriend Collective</a>
                <a href="/">Sweaty Betty</a>
                <a href="/">Year of Ours</a>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">24/7 Active</a>
                <a href="/">Ski</a>
                <a href="/">Sport</a>
                <a href="/">Tennis</a>
                <a href="/">Yoga & Lounge</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot1_tennis.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Tennis Essentials</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_active_slot2_accessories.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Gear Up: Active Staples</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover6 && styles.tabStyles}`}>
            SHOES
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover6(true)}
            onMouseLeave={() => setHover6(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>SHOES</p>
                <a href="/">Boots</a>
                <a href="/">Espadrilles</a>
                <a href="/">Flats</a>
                <a href="/">Mules & Slides</a>
                <a href="/">Pumps</a>
                <a href="/">Rain Boots</a>
                <a href="/">Sandals</a>
                <a href="/">Sneakers</a>
                <a href="/">All Shoes</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>NAMES TO KNOW</p>
                <a href="/">Gia Borghini</a>
                <a href="/">Golden Goose</a>
                <a href="/">Kahmune</a>
                <a href="/">Larroude</a>
                <a href="/">On</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">Designer Boutique</a>
                <a href="/">Evening-Ready Shoes</a>
                <a href="/">Wedding Shoes</a>
                <p className={styles.dropHeadings}>TRENDS</p>
                <a href="/">Cool Clogs</a>
                <a href="/">Neutral Tones</a>
                <a href="/">Puffed-Up Pairs</a>
                <a href="/">Strappy Sandals</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot1_BadgleyMishka.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Step into Badgley Mischka</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_shoes_slot2_Soludos.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Lace up in Soludos</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover7 && styles.tabStyles}`}>
            BAGS
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover7(true)}
            onMouseLeave={() => setHover7(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>BAGS</p>
                <a href="/">Backpacks</a>
                <a href="/">Beach Bags</a>
                <a href="/">Belt Bags</a>
                <a href="/">Bucket Bags</a>
                <a href="/">Clutches</a>
                <a href="/">Cross Body Bags</a>
                <a href="/">Luggage</a>
                <a href="/">Mini Bags</a>
                <a href="/">Satchels</a>
                <a href="/">Shoulder Bags</a>
                <a href="/">Totes</a>
                <a href="/">Wallet</a>
                <a href="/">Bag Accessories</a>
                <a href="/">All Bags</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>NAMES TO KNOW</p>
                <a href="/">Clare V.</a>
                <a href="/">JW Anderson</a>
                <a href="/">Marc Jacobs</a>
                <a href="/">STAUD</a>
                <a href="/">Tory Burch</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">Designer Boutique</a>
                <a href="/">Vintage Bags</a>
                <p className={styles.dropHeadings}>TRENDS</p>
                <a href="/">Cool Crochet</a>
                <a href="/">Neutral Tones</a>
                <a href="/">Night-Out Bags</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_bags_slot1_ReeProjects.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>
                  Spotlight On: Ree Projects
                </p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_bags_slot2_bucketbags.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Bring-it-All Bucket Bags</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover8 && styles.tabStyles}`}>
            ACCESSORIES
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover8(true)}
            onMouseLeave={() => setHover8(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>ACCESSORIES</p>
                <a href="/">Active Accessories</a>
                <a href="/">Belts</a>
                <a href="/">Gloves</a>
                <a href="/">Hair Accessories</a>
                <a href="/">Hats</a>
                <a href="/">Home</a>
                <a href="/">Scarves</a>
                <a href="/">Socks</a>
                <a href="/">Sunglasses</a>
                <a href="/">Travel Accessories</a>
                <a href="/">All Accessories</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>JEWELERY</p>
                <a href="/">Fine Jewelery</a>
                <a href="/">Anklets</a>
                <a href="/">Bracelets</a>
                <a href="/">Earrings</a>
                <a href="/">Necklaces</a>
                <a href="/">Rings</a>
                <a href="/">Watches</a>
                <a href="/">All Jewelery</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">Designer Boutique</a>
                <a href="/">Home Decor</a>
                <a href="/">Wedding Accessories</a>
                <p className={styles.dropHeadings}>TRENDS</p>
                <a href="/">Crafty Accents</a>
                <a href="/">Metal Jewelery</a>
                <a href="/">Statement Pieces</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_05/sb_20220502_desktop_accessories_slot1_HatAttack.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Top it Off: Hat Attack</p>
                <a href="/">Shop Now</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_accessories_slot2_baseball.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Home Run Hats</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <p className={`${styles.dropbtn} ${hover9 && styles.tabStyles}`}>
            MEN
          </p>
          <div
            className={styles.dropdownContent}
            onMouseEnter={() => setHover9(true)}
            onMouseLeave={() => setHover9(false)}
          >
            <div className={styles.dropdownFlex}>
              <div>
                <p className={styles.dropHeadings}>MEN</p>
                <a href="/">Clothing</a>
                <a href="/">Shoes</a>
                <a href="/">Bags</a>
                <a href="/">Accessories</a>
                <a href="/">Sale</a>
                <a href="/">Shop All</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>FEATURED DESIGNERS</p>
                <a href="/">AMI</a>
                <a href="/">Isabel Marant</a>
                <a href="/">Maison Kitsune</a>
                <a href="/">Polo Ralph Lauren</a>
                <a href="/">Veja</a>
                <a href="/">Vince</a>
              </div>
              <div>
                <p className={styles.dropHeadings}>DISCOVER</p>
                <a href="/">What's New</a>
                <a href="/">Top Sellers</a>
                <a href="/">The Basics</a>
                <a href="/">Explore the Latest</a>
              </div>
              <div className={styles.menuCta}>
                <img
                  src="https://m.media-amazon.com/images/G/01/Shopbop/media/desktop/topnav/2022/2022_04/sb_20220425_desktop_men_slot1_freedommoses.jpg"
                  alt=""
                />
                <p className={styles.dropHeadings}>Slide Into: Freedom Moses</p>
                <a href="/">Shop Now</a>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.dropdown}>
          <span
            onClick={() => {
              setShow(true);
            }}
            style={{cursor: 'pointer'}}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-search"
              viewBox="0 0 16 16"
            >
              <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
            </svg>
          </span>
          {/*<Modal show={show} setShow={setShow} />*/}
        </div>
      </div>
    </>
  );
};

export default MegaMenu;
