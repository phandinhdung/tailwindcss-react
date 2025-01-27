import { useEffect } from "react"
import { Link } from "react-router-dom"

function CoffeeStyle() {

  useEffect(() => {
    const topMenu = document.getElementById('pdd-top-menu');
    const toggleTopMenuIcon = document.getElementById('pdd-toggle-top-menu-icon')

    const handleClickCoffePage = (e) => {
      // click icon menu
      if (toggleTopMenuIcon.contains(e.target)) {
        topMenu.classList.toggle('hidden'); //hàm toggle(của javascript) sẽ thêm hoặc xóa class hidden trong danh sách class
        topMenu.classList.toggle('pdd-topmenu-expanded');

      } else { // click bên ngoài icon menu
        if (topMenu.classList.contains('pdd-topmenu-expanded')) {
          topMenu.classList.remove('pdd-topmenu-expanded');
          topMenu.classList.add('hidden');
        }
      }
    };
    // Phải bắt cả sự kiện bắt bên ngoài, để ẩn đi menu khi click ra ngoài
    document.addEventListener('click', handleClickCoffePage);
    return () => {
      document.removeEventListener('click', handleClickCoffePage);
    }
  }, []);


  return (
    <div>
      <div className="content-wrapper font-Karla max-w-screen-2xl text-base mx-auto px-8">
        <header className="py-6 mx-auto">
          <nav className="flex flex-row justify-between items-center relative">
            <div className="logo basis-2/6 font-bold text-2xl pl-6">
              CoffeeStyle.
            </div>

            <ul id="pdd-top-menu"
              className="basis-3/6 hidden lg:flex lg:items-center lg:justify-end lg:gap-8 uppercase text-sm text-gray-500 font-medium">
              <li className="pdd-top-menu-item pdd-top-menu-item-active">
                <Link to="/">Home</Link>
              </li>
              <li className="pdd-top-menu-item">
                <a href="#" className="">Products</a>
              </li>
              <li className="pdd-top-menu-item">
                <a href="#" className="">Blog</a>
              </li>
              <li className="pdd-top-menu-item">
                <a href="#" className="">About</a>
              </li>
              <li className="pdd-top-menu-item">
                <a href="#" className="">Contact</a>
              </li>
              <li className="pdd-top-menu-item">
                <a href="#" className="">StyleGuide</a>
              </li>
            </ul>

            <ul
              className="basis-3/6 lg:basis-1/6 flex justify-end lg:justify-start items-center ml-16 uppercase text-sm text-gray-500 font-medium">
              <li className="pdd-top-menu-item">
                <a href="" className="flex items-center">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z" />
                  </svg>
                  <span className="mx-2">Cart</span>
                  <span className="pdd-badge-circle bg-orange-400 text-white">7</span>
                </a>
              </li>
            </ul>
            <div id="pdd-toggle-top-menu-icon" className="basis-1/6 lg:hidden items-center cursor-pointer px-3 sm:px-8">
              <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            </div>
          </nav>
        </header>

        {/* ==============End Header===================== */}
        <main>
          <div className="slider h-[530px] bg-[url('./src/assets/image/slider-bg.jpg')] bg-cover bg-no-repeat bg-bottom rounded-md">
            <div className="w-full h-full flex justify-center items-center bg-gray-900 bg-opacity-35 rounded-md">
              <div className="mx-16 text-white text-center">
                <div className="uppercase mb-6">Best place to buy design</div>
                <div className="font-medium text-5xl mb-6">Coffee Mugs</div>
                <div className="font-medium text-lg mb-8">The most versatile furniture system ever created. Designed to fit
                  your life, made to move
                  and grow.</div>
                <div className="flex justify-center">
                  <div className="uppercase bg-white text-gray-900 w-max tracking-wider py-4 px-8 text-sm font-semibold
                cursor-pointer hover:bg-opacity-85 rounded-md">
                    Explore Our Products
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ==========End Slider================================= */}


          <div className="story flex justify-center items-center">
            <div className="px-4 sm:px-16 md:px-32 lg:px-64 xl:px-96 py-32 text-center">
              <div className="text-3xl leading-10 mb-6">
                Even the all-powerful Pointing has no control about the blind texts.
              </div>
              <div className="flex flex-col md:flex-row md:text-left gap-3">
                <div className="basis-1/2 md:w-[500px] lg:w-[700px]">
                  <video src="./src/assets/video/coffeeCup.mp4" autoPlay loop muted className="rounded-xl w-full h-ful object-cover" />
                </div>

                <div className="basis-1/2">
                  <div className="text-gray-500 leading-7 mb-6">
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                    <br />Even the all-powerful
                    Pointing has no control about the blind texts it is an almost unorthographic life One day however a
                    small line of blind text by the name of Lorem Ipsum decided to leave for the far World of Grammar.
                  </div>
                  <div className="">

                    <a href="#" className="text-coffee-400 hover:text-coffee-600 underline decoration-coffee-50 hover:decoration-coffee-400 
                underline-offset-8 duration-150 transition-all ease-in-out">
                      Read the full story
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* <!-- End story--> */}


          <div className="pdd-subheadline">
            <div className="pdd-subheadline-deco-line"></div>
            <div className="pdd-subheadline-label">Featured Mugs</div>
            <div className="pdd-subheadline-deco-line"></div>
          </div>


          <div className="featured-mugs w-[95%] lg:w-[65%] mx-auto mb-24">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-4">
              <div className="pdd-procduct-card">
                <div className="h-[400px] sm:h-[540px] bg-[url('./src/assets/image/mug0.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group rounded-md">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>

              <div className="pdd-procduct-card">
                <div className="h-[400px] sm:h-[540px] bg-[url('./src/assets/image/mug1.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div
                        className="absolute w-[100px] bg-white py-2 px-4 top-3 right-3 text-center font-semibold text-coffee-400">
                        On Sale.</div>
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Golden Designers Mug</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$50.00</span>
                    <span className="ml-2 text-gray-400 line-through">$69.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========================End featured-mugs ======================================*/}


          <div className="pdd-subheadline">
            <div className="pdd-subheadline-deco-line"></div>
            <div className="pdd-subheadline-label">More Products</div>
            <div className="pdd-subheadline-deco-line"></div>
          </div>

          <div className="more-products w-[95%] xl:w-[65%] mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug2.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug3.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$70.00</span>
                  </div>
                </div>
              </div>
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug4.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug5.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug1.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>
              <div className="pdd-procduct-card">
                <div className="h-[380px] bg-[url('./src/assets/image/mug0.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
                  hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                    hidden group-hover:block group-hover:animate-fadeIn">Explore Mugs</div>
                    </div>
                  </a>
                </div>
                <div className="text-center mt-8">
                  <a href="#" alt="product-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Pink Premium Ceramic</div>
                  </a>
                  <div>
                    <span className="text-lg text-coffee-400">$99.00</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* ========== End more procduct ============== */}

          <div className="pdd-subheadline">
            <div className="pdd-subheadline-deco-line"></div>
            <div className="pdd-subheadline-label">Buy 2 mugs and get a coffee magazine free</div>
            <div className="pdd-subheadline-deco-line"></div>
          </div>

          <div className="coffee-magazine w-[95%] xl:w-[65%] mx-auto mb-24">
            <div className="flex flex-col md:flex-row justify-center items-center gap-5">
              <div className="pdd-magazine-image basis-1/2 md:flex md:flex-row gap-5 w-full h-full mb-5 md:mb-0">
                <div
                  className="pdd-magazine-big-image h-[280px] basis-2/3 mb-3 xs:mb-5 md:mb-0 bg-[url('./src/assets/image/mug1.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                </div>
                <div className="pdd-magazine-small-image basis-1/3 flex flex-row md:flex-col gap-3 xs:gap-5">
                  <div
                    className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./src/assets/image/mug3.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  </div>
                  <div
                    className="h-[130px] xs:h-[200px] md:h-[130px] basis-1/2 bg-[url('./src/assets/image/mug4.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  </div>
                </div>
              </div>
              <div className="pdd-magazine-post basis-1/2 pl:8 xl:pl-14 text-center md:text-left">
                <div className="uppercase tracking-widest text-gray-500 font-medium text-xs mb-4">Premium Offer</div>
                <div className="text-4xl mb-4">Get our Coffee Magazine</div>
                <div className="text-gray-500 leading-7 mb-4">The most versatile furniture system ever created. Designed to
                  fit your life.</div>
                <div className="pdd-button bg-black text-white w-max mx-auto md:mx-0">Start shopping</div>
              </div>
            </div>
          </div>
          {/* <!--End coffe-magazine--> */}

          <div
            className="pdd-parallax-section bg-[url('./src/assets/image/animation-bg.jpg')] bg-cover bg-no-repeat bg-center h-[450px] mb-24 bg-fixed rounded-md">
          </div>

          <div className="pdd-subheadline">
            <div className="pdd-subheadline-deco-line"></div>
            <div className="pdd-subheadline-label">Behind the mugs, lifestyle stories</div>
            <div className="pdd-subheadline-deco-line"></div>
          </div>

          <div className="lifestyle-stories w-[95%] xl:w-[65%] mx-auto mb-24">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 md:gap-4">
              <div className="pdd-lifestyle-story-card">
                <div className="h-[300px] bg-[url('./src/assets/image/story1.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
              hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                hidden group-hover:block group-hover:animate-fadeIn">Read the full story</div>
                    </div>
                  </a>
                </div>
                <div className="text-left my-6">
                  <a href="#" alt="story-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Health Check: why do I get a headache when I
                      haven&apos;t
                      had my coffee?</div>
                  </a>
                  <div className="text-gray-500 leading-7 mb-3">
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </div>
                  <div className="text-gray-500 leading-7 uppercase tex-[13px] font-semibold tracking-widest">
                    October 9, 2018
                  </div>
                </div>
              </div>

              <div className="pdd-lifestyle-story-card">
                <div className="h-[300px] bg-[url('./src/assets/image/story2.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
              hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                hidden group-hover:block group-hover:animate-fadeIn">Read the full story</div>
                    </div>
                  </a>
                </div>
                <div className="text-left my-6">
                  <a href="#" alt="story-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Health Check: why do I get a headache when I
                      haven&apos;t
                      had my coffee?</div>
                  </a>
                  <div className="text-gray-500 leading-7 mb-3">
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </div>
                  <div className="text-gray-500 leading-7 uppercase tex-[13px] font-semibold tracking-widest">
                    October 9, 2018
                  </div>
                </div>
              </div>

              <div className="pdd-lifestyle-story-card">
                <div className="h-[300px] bg-[url('./src/assets/image/story3.jpg')] bg-cover bg-no-repeat bg-center rounded-md">
                  <a href="#" alt="phandinhdung">
                    <div className="rounded-md w-full h-full hover:bg-gray-900 hover:bg-opacity-10 hover:transition-all hover:ease-in-out
              hover:duration-300 relative group">
                      <div className="pdd-button absolute bg-white text-gray-900 w-11/12 bottom-4 left-1/2 -translate-x-1/2
                hidden group-hover:block group-hover:animate-fadeIn">Read the full story</div>
                    </div>
                  </a>
                </div>
                <div className="text-left my-6">
                  <a href="#" alt="story-pdd">
                    <div className="text-xl mb-3 hover:text-coffee-400">Health Check: why do I get a headache when I
                      haven&apos;t
                      had my coffee?</div>
                  </a>
                  <div className="text-gray-500 leading-7 mb-3">
                    It is a paradisematic country, in which roasted parts of sentences fly into your mouth.
                  </div>
                  <div className="text-gray-500 leading-7 uppercase tex-[13px] font-semibold tracking-widest">
                    October 9, 2018
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* =========End lifestyle-stories=================  1d1f2e*/}

          <div className="subscribe-us h-[350px] bg-[#2f3640] mb-24 mx-0 sm:mx-6 flex flex-col justify-center items-center rounded-md">
            <div className="flex justify-center items-center mb-3">
              <div className="w-8 h-px bg-gray-500"></div>
              <div className="uppercase mx-4 tracking-widest text-gray-400 font-medium text-xs text-center">Sign up and get
                free
                coffee bags</div>
              <div className="w-8 h-px bg-gray-500"></div>
            </div>

            <div className="text-4xl text-white mt-5 mb-10">Coffee Updates</div>
            <div className="pdd-form flex flex-col md:flex-row justify-center items-center gap-3">
              <div className="pdd-form-item">
                <input type="email" placeholder="abc@gmail.com"
                  className="px-3 py-4 w-[250px] sm:w-[350px] xs:max-w-full bg-inherit border-[1px] border-gray-500
          outline-none text-white leading-5 hover:border-gray-300 focus:border-gray-300 duration-500 placeholder:text-center
          placeholder:text-xs placeholder:tracking-widest placeholder:font-semibold rounded-md" />
              </div>
              <div className="pdd-form-item">
                <button type="submit" className="pdd-button bg-white text-gray-900 w-max">Subscribe</button>
              </div>
            </div>
          </div>
          {/* <!--End subscrib--> */}
        </main>

        <footer className="w-[95%] xl:w-[65%] mx-auto pb-24 text-gray-500 text-sm">
          <div className="flex flex-col sm:flex-row text-center sm:text-left gap-8">
            <div className="basis-2/6">
              <div className="font-bold text-xl text-gray-500">CoffeeStyle.</div>
              <div className="mb-5 sm:mb-20">Delivering the best coffee life since 1996. From coffee geeks to the real ones.
              </div>
              <div className="text-coffee-400">Phan Dinh Dung © 2025</div>
            </div>
            <div className="basis-1/6">
              <div className="uppercase font-semibold tracking-wider text-gray-600 mb-1 sm:mb-4">Menu</div>
              <div className="flex flex-col gap-1 sm:gap-3">
                <div className=""><a href="#" className="hover:text-coffee-400">Home</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Our products</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">About</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Contact</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Styleguide</a></div>
              </div>
            </div>

            <div className="basis-1/6">
              <div className="uppercase font-semibold tracking-wider text-gray-600 mb-1 sm:mb-4">Follow us</div>
              <div className="flex flex-col gap-1 sm:gap-3">
                <div className=""><a href="#" className="hover:text-coffee-400">Facebook</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Instagram</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Pinterest</a></div>
                <div className=""><a href="#" className="hover:text-coffee-400">Twitter</a></div>
              </div>
            </div>

            <div className="basis-2/6">
              <div className="uppercase font-semibold tracking-wider text-gray-600 mb-4">Contact Us</div>
              <div className="mb-4">We&apos;re always happy to help</div>
              <div className="mb-16 text-gray-800 text-[22px] tracking-wide"><a href="mailto:phandinhdungcv@gmail.com"
                className="hover:text-coffee-400">phandinhdungcv@gmail.com</a></div>
              <div className=""><a href="https://github.com/phandinhdung" target="_blank" className="hover:text-coffee-400">Code
                by
                Phan Dinh Dung</a></div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default CoffeeStyle