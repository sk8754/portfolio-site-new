import React, { useState } from "react";
import mainvisual from "../images/24353281_m.jpg";

function Header() {
  const [openMenu, setOpenMenu] = useState(false);

  const handleMenuOpen = () => {
    setOpenMenu(!openMenu);
  };
  return (
    <div>
      <header
        className="h-screen relative opacity-[75%] overflow-x-clip"
        style={{
          backgroundImage: `url(${mainvisual})`,
          backgroundPosition: "top,center",
        }}
      >
        <div className="max-w-[1280px] mx-auto">
          <div className="flex justify-between px-4 text-black font-bold h-[4rem]  md:flex md:flex-row relative ">
            <h1 className="absolute top-[18px]">
              <a href="/" className=" text-3xl md:text-4xl inline-block">
                sk8754Code
              </a>
            </h1>

            {/* ハンバーガーメニューのボタンアイコン */}
            <button
              id="burger-btn"
              className="md:hidden fixed top-7 right-0 z-50"
              onClick={handleMenuOpen}
            >
              <span>hamburger</span>
              <span></span>
              <span></span>
            </button>

            <nav
              className={`${
                openMenu
                  ? "translate-x-[0] bg-white z-30 opacity-90 text-center pt-[25vh] w-full h-screen transition-[0.6]"
                  : "translate-x-[100%] transition-[0.6]"
              }  right-[0] pt-[25vh] fixed md:absolute md:top-[1.5rem] md:right-12 md:pt-0`}
            >
              {/* ナビゲーションの要素 */}
              <ul className="md:absolute md:right-[0]  md:flex text-2xl md:gap-8">
                <li>
                  <a
                    href="/"
                    className="inline-block p-4 border-b-2 border-black md:p-0 md:border-b-0"
                  >
                    Home
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="inline-block p-4 border-b-2 border-black  md:p-0 md:border-b-0"
                  >
                    About
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="inline-block p-4 border-b-2 border-black  md:p-0 md:border-b-0"
                  >
                    Skiills
                  </a>
                </li>
                <li>
                  <a
                    href="/"
                    className="inline-block p-4 border-b-2 border-black  md:p-0 md:border-b-0"
                  >
                    Contact
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>

        <div className="absolute top-[50%] left-[50%] text-white text-center text-6xl sm:text-8xl translate-x-[-50%] translate-y-[-50%]">
          <h2>
            WEB<span className=" text-red-500">d</span>esign
          </h2>
          <h2>&</h2>
          <h2>Programing</h2>
        </div>
        <div className="absolute right-[10%] bottom-[10%]">
          <a
            href="/"
            className="text-black font-bold md:text-[32px] bg-gradient-to-r from-[#FCBB3E] to-[#E683F6] py-[9px] px-[29px] rounded-[35px]"
          >
            お問い合わせはこちら
          </a>
        </div>
      </header>
    </div>
  );
}

export default Header;
