// import React from "react";
// import "./Home.scss";
// import Featured from "../../components/featured/Featured";
// import TrustedBy from "../../components/trustedBy/TrustedBy";
// import Slide from "../../components/slide/Slide";
// import CatCard from "../../components/catCard/CatCard";
// import ProjectCard from "../../components/projectCard/ProjectCard";
// import { cards, projects } from "../../data";

// function Home() {
//   return (
//     <div className="home">
//       <Featured />
//       <TrustedBy />
//       <Slide slidesToShow={5} arrowsScroll={5}>
//         {cards.map((card) => (
//           <CatCard key={card.id} card={card} />
//         ))}
//       </Slide>
//       <div className="features">
//         <div className="container">
//           <div className="item">
//             <h1>A whole world of freelance talent at your fingertips</h1>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               The best for every budget
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Quality work done quickly
//             </div>
//             <p>
//               Find the right freelancer to begin working on your project within
//               minutes.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Protected payments, every time
//             </div>
//             <p>
//               Always know what you'll pay upfront. Your payment isn't released
//               until you approve the work.
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               24/7 support
//             </div>
//             <p>
//               Find high-quality services at every price point. No hourly rates,
//               just project-based pricing.
//             </p>
//           </div>
//           <div className="item">
//             <video src="./img/video.mp4" controls />
//           </div>
//         </div>
//       </div>
//       <div className="explore">
//         <div className="container">
//           <h1>Explore the marketplace</h1>
//           <div className="items">
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/graphics-design.d32a2f8.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Graphics & Design</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/online-marketing.74e221b.svg"
//                 alt=""
//               />
//               <div className="line"></div>

//               <span>Digital Marketing</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/writing-translation.32ebe2e.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Writing & Translation</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/video-animation.f0d9d71.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Video & Animation</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/music-audio.320af20.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Music & Audio</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/programming.9362366.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Programming & Tech</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/business.bbdf319.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Business</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/lifestyle.745b575.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Lifestyle</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/data.718910f.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Data</span>
//             </div>
//             <div className="item">
//               <img
//                 src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/photography.01cf943.svg"
//                 alt=""
//               />
//               <div className="line"></div>
//               <span>Photography</span>
//             </div>
//           </div>
//         </div>
//       </div>
//       <div className="features dark">
//         <div className="container">
//           <div className="item">
//             <h1>
//               fiverr <i>business</i>
//             </h1>
//             <h1>
//               A business solution designed for <i>teams</i>
//             </h1>
//             <p>
//               Upgrade to a curated experience packed with tools and benefits,
//               dedicated to businesses
//             </p>
//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Connect to freelancers with proven business experience
//             </div>

//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Get matched with the perfect talent by a customer success manager
//             </div>

//             <div className="title">
//               <img src="./img/check.png" alt="" />
//               Manage teamwork and boost productivity with one powerful workspace
//             </div>
//             <button>Explore Fiverr Business</button>
//           </div>
//           <div className="item">
//             <img
//               src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//       <Slide slidesToShow={4} arrowsScroll={4}>
//         {projects.map((card) => (
//           <ProjectCard key={card.id} card={card} />
//         ))}
//       </Slide>
//     </div>
//   );
// }

// export default Home;
import React from "react";
import "./Home.scss";
import Featured from "../../components/featured/Featured";
import TrustedBy from "../../components/trustedBy/TrustedBy";
import Slide from "../../components/slide/Slide";
import CatCard from "../../components/catCard/CatCard";
import ProjectCard from "../../components/projectCard/ProjectCard";
import { cards, projects } from "../../data";

function Home() {
  return (
    <div className="home">
      <Featured />
      <TrustedBy />
      <Slide slidesToShow={5} arrowsScroll={5}>
        {cards.map((card) => (
          <CatCard key={card.id} card={card} />
        ))}
      </Slide>
      <div className="features">
        <div className="container">
          <div className="item">
            <h1>ODOP Kashmir: Craftsmanship for the Ages</h1>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Echoes of Elegance:
            </div>
            <p>
              ODOP Kashmir products resonate with a timeless elegance that
              transcends generations, embodying the enduring beauty of Kashmiri
              craftsmanship.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Heritage's Finest:
            </div>
            <p>
              These products are like a fine vintage, steeped in tradition and
              crafted with the precision that stands the test of time, appealing
              to those who appreciate the classics.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Artistry with a Legacy:
            </div>
            <p>
              ODOP Kashmir products are a testament to centuries-old artisanal
              mastery, preserving and passing down the heritage of Kashmir
              through each meticulously created piece.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Time-Honored Treasures:
            </div>
            <p>
              ODOP Kashmir products are not just items; they are heirlooms in
              the making, destined to be cherished by families for generations
              as symbols of Kashmir's rich cultural heritage.
            </p>
          </div>
          <div className="item">
            <img src="./img/map.png" alt="" />
          </div>
        </div>
      </div>
      <div className="explore">
        <div className="container">
          <h1>Explore the marketplace</h1>
          <div className="items">
            <div className="item">
              <img
                src="/public/icons/Apple-removebg-preview.png"
                alt=""
              />
              <div className="line"></div>
              <span>Fruits</span>
            </div>
            <div className="item">
              <img
                src="/public/icons/Saf-removebg-preview.png"
                alt=""
              />
              <div className="line"></div>

              <span>Saffron</span>
            </div>
            <div className="item">
              <img
                src="/public/icons/milk-removebg-preview.png"
                alt=""
              />
              <div className="line"></div>
              <span>Dairy Products</span>
            </div>
            <div className="item">
              <img
                src="/public/icons/meat-removebg-preview.png"
                alt=""
              />
              <div className="line"></div>
              <span>Meat Products</span>
            </div>
            <div className="item">
              <img
                src="/public/icons/olive_product-removebg-preview.png"
                alt=""
              />
              <div className="line"></div>
              <span>Olive Products</span>
            </div>
          </div>
        </div>
      </div>
      <div className="features dark">
        <div className="container">
          <div className="item">
            <h1>
              ODOP <i>business</i>
            </h1>
            <h1>
              A business solution designed for <i>local sellers</i>
            </h1>
            <p>
            Kashmiri artisans: Crafting dreams, one masterpiece at a time.
            </p>
            <div className="title">
              <img src="./img/check.png" alt="" />
              Connect to sellers with proven quality assurance
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Get matched with the perfect seller
            </div>

            <div className="title">
              <img src="./img/check.png" alt="" />
              Our commitment to excellence in every product
            </div>
            <button>Explore ODOP Business</button>
          </div>
          <div className="item">
            <img style={{height:"80%",width:"100%"}}
              src="/public/icons/jk_business.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
      <Slide slidesToShow={4} arrowsScroll={4}>
        {projects.map((card) => (
          <ProjectCard key={card.id} card={card} />
        ))}
      </Slide>
    </div>
  );
}

export default Home;
