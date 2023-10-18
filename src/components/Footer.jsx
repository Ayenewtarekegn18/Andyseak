import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#5c5aee] text-white">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-4 md:gap-8 -mt-80">
          <div className="col-span-1 mx-auto md:ml-10 md:mr-0 text-center md:text-left -mt-10">
            <img
              className="py-5 h-24 md:h-32 bg-opacity-50"
              src="https://cdn-icons-png.flaticon.com/128/1946/1946429.png"
              alt="Logo"
            />
            <ul>
              <li className="mb-4 text-opacity-75">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Blanditiis, pariatur odio, modi soluta ullam, officiis dolorum
                ratione maxime nostrum quam adipisci molestiae impedit? A
                nostrum laborum veniam vitae dolores fugit!
              </li>
              <ul class="flex flex-row">
                <li className="mb-2">
                  <a
                    href="https://t.me/LKHCyouth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="Telegram" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://instagram.com/lebu_khc?igshid=MzRlODBiNWFlZA=="
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="Instagram" />
                  </a>
                </li>
                <li className="mb-2">
                  <a
                    href="https://www.tiktok.com/@godlymelody?refer=creator_embed"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="TikTok" />
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.youtube.com/@lebukhcyouth"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img src="" alt="YouTube" />
                  </a>
                </li>
              </ul>
            </ul>
          </div>
          <div className="col-span-1 ml-4 md:ml-20">
            <h3 className="text-lg font-bold mb-4">Company</h3>
            <ul>
              <li className="mb-2">About Us</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">Community</li>
              <li className="mb-2">Testimonial</li>
            </ul>
          </div>
          <div className="col-span-1 ml-4 md:ml-20">
            <h3 className="text-lg font-bold mb-4">Support</h3>
            <ul>
              <li className="mb-2">Help Center</li>
              <li className="mb-2">Tweet @ Us</li>
              <li className="mb-2">Webians</li>
              <li className="mb-2">Feedback</li>
            </ul>
          </div>
          <div className="col-span-1 ml-4 md:ml-20">
            <h3 className="text-lg font-bold mb-4">Link</h3>
            <ul>
              <li className="mb-2">Courses</li>
              <li className="mb-2">Become Teacher</li>
              <li className="mb-2">Services</li>
              <li className="mb-2">All in One</li>
            </ul>
          </div>
          <div className="col-span-1 mt-4 md:mt-0">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul>
              <li className="mb-2">Sub-row 1</li>
              <li className="mb-2">Support@gmil.com</li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
