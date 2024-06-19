import React from 'react';
import pic1 from '../Assets/pic1.png';
import pic3 from '../Assets/pic3.jpg';
import na from '../Assets/name.png';
import no from '../Assets/phone.png';
import ad from '../Assets/ad.png';
import fb from '../Assets/icons8-facebook.gif';
import wapp from '../Assets/icons8-whatsapp.gif';
import utube from '../Assets/icons8-youtube.gif';
import tw from '../Assets/icons8-twitter-circled.gif';
import './Home.css'; 
//import videoSrc from '../Assets/particles.mp4';


function Home() {
  return (
    <div className='Home'>
      <div className="part1">
        <div className="p1">
          <img src={pic1} alt='Fashion' />
        </div>
        <div className="p2 ">
          <video src="particles.mp4"  muted=" " autoPlay="" ></video>
          {/* <video src={videoSrc} muted autoPlay loop></video> */}
          <h1><span>Fashion Industry Overview</span></h1>
          <br />
          <p className='typed'>Any brand that is involved in the fashion business is referred to as a "fashion brand" or "fashion label.” To be successful in the market, a fashion brand must differentiate itself from the competition and manage its supply chain.</p>
          <hr />
          <p className='typed'>Fashion blends style, symbolism, and experiential components. Brands are frequently used by consumers to express their true selves or their idealized selves, which they hope to attain.</p>
          <hr />
          <p className='typed'>Gucci, Hermès, Louis Vuitton, Versace, Zara, Chanel, Dior, and Adidas are widely known luxury fashion brands in the world.</p>
          <hr />
          <p className='typed'>The following listed brands have shown massive growth in the year 2024.</p>
        </div>
      </div>

      <div className="part2">
        <div className="p1">
        <img src={pic3} alt='' className="animated-pic" />
        </div>
        <div className="p2">
          <table>
            <tbody>
              <tr>
                <td>Brand name</td>
                <td>Features</td>
              </tr>
              <tr>
                <td>Louis Vuitton</td>
                <td>
                  <li>High quality </li>
                  <li>High quality</li>
                  <li>Potential investment</li>
                  <li>Expensive</li>

                 </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p3">
          <table>
            <tbody>
              <tr>
                <td>Brand name</td>
                <td>Features</td>
              </tr>
              <tr>
                <td>Versace</td>
                <td>
                <li>Distinctive style </li>
                  <li>Long lasting quality</li>
                  <li>Strong Brand Identity</li>
                  <li>Expensive</li>

                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="p4">
          <table>
            <tbody>
              <tr>
                <td>Brand name</td>
                <td>Features</td>
              </tr>
              <tr>
                <td>Loewe</td>
                <td>Row 2, Cell 2</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="part3">
        <div className="p1">
          <h2>Versace</h2>
          <hr/>
          <p>
Usually referred to as Versace  Gianni Versace Italian luxury fashion company created by Gianni Versace in 1978. It is recognized for its eye-catching designs and vibrant colors.
The company licenses its name and trademark to Luxottica for eyewear and manufactures ready-to-wear, accessories, and haute couture under the Atelier Versace brand Given that Gianni Versace was born in Calabria, which was a part of ancient Magna Grecia (Greater Greece), the company's emblem was influenced by the Greek mythological figure Medusa.</p>
          <a href="https://www.versace.com/us/en/"> <button>Button</button></a>
        </div>

        <div className="p2">
          <h2>Loewe</h2>
          <hr/>
          <p>
A group of Spanish leather artisans founded the business in Madrid in 1846, and when Enrique Loewe joined the company in 1876, the brand was born. Early in the 20th century, Loewe attracted the attention of many well-known individuals, and Queen Victoria Eugenie started shopping there frequently.
Following the issuance of the Royal Warrant of Appointment by Alfonso XIII in 1905, Loewe assumed the role of Purveyor of the Spanish Royal Household. Popular people like Ernest Hemingway, Ava Gardner, Rita Hayworth, Marlene Dietrich, and Sophia Loren, among others, helped to boost the rapidly rising company's profile</p>
<a href="https://www.loewe.com/usa/en/home"> <button>Button</button></a>
        </div>

        <div className="p3">
          <h2>Louis Vuitton</h2>
          <hr/>
          <p>
Founded in 1854 by Louis Vuitton, Louis Vuitton Malletier—more often known as just Louis Vuitton—is a luxury fashion brand and company based in France. The majority of the brand's merchandise, which includes ready-to-wear, shoes, perfumes, watches, jewelry, accessories, sunglasses, books, and luxury bags and leather goods, is emblazoned with the LV monogram.
One of the most prestigious worldwide fashion houses in the world is Louis Vuitton. It offers its goods via e-commerce on its website, lease departments in upscale department stores, and standalone boutiques.
From 2006 to 2012, Louis Vuitton held the title of the most valuable luxury brand in the world for six years running. In 2012, it was valued at $25.9 billion USD. With US$9.4 billion in revenue, the brand was valued US$28.4 billion in 2013.</p>
<a href="https://eu.louisvuitton.com/eng-e1/homepage"> <button>Button</button></a>
        </div>

        <div className="p4">
        <h2>Versace</h2>
          <hr/>
          <p>
Usually referred to as Versace  Gianni Versace Italian luxury fashion company created by Gianni Versace in 1978. It is recognized for its eye-catching designs and vibrant colors.
The company licenses its name and trademark to Luxottica for eyewear and manufactures ready-to-wear, accessories, and haute couture under the Atelier Versace brand Given that Gianni Versace was born in Calabria, which was a part of ancient Magna Grecia (Greater Greece), the company's emblem was influenced by the Greek mythological figure Medusa.</p>
         <a href="https://www.versace.com/us/en/"> <button>Button</button></a>
        </div>
      </div>

      <div className="part4">
        <div className="p1">
          <table>
            <tbody>
              <tr>
                <th><h2>Contact Us</h2></th>
              </tr>
              <tr>
                <td>
                  <img src={na} alt='Company' />
                  ABC Company
                </td>
              </tr>
              <tr>
                <td>
                  <img src={no} alt='Phone' />
                  081-2002002
                </td>
              </tr>
              <tr>
                <td>
                  <img src={ad} alt='Address' />
                  123 Office, Peradeniya, Kandy
                </td>
              </tr>
            </tbody>
          </table> 

          <div className="social">
            <a href="www.facebook.com"><img src={fb} alt=''/></a>
            <a href="#"><img src={wapp} alt=''/></a>
            <a href="#"><img src={utube} alt=''/></a>
            <a href="#"><img src={tw} alt=''/></a>
          </div> 
        </div>
        <div className="p2">
          
            <form action="mailto:thilakshiwijerathne55@gmail.com" method="POST" enctype="text/plain">
              <div className="row">
                <div className="data">
                  <input type="text" name="name" className="form-control" placeholder="Your Name" required />
                </div>
                <div className="data">
                  <input type="email" name="email" className="form-control" placeholder="Your Email" required />
                </div>
              </div>
              <div className="form-group">
                <input type="text" name="sub" className="form-control" placeholder="Subject" />
              </div>
              <div className="form-group">
                <textarea className="form-control" rows="5" name="msg" placeholder="Message"></textarea>
              </div>
              <div>
                <button className="btn" type="submit">Send Message</button>
                <button className="btn" type="reset">Reset</button>
              </div>
            </form>
          
        </div>
      </div>
    </div>
  );
}

export default Home;
