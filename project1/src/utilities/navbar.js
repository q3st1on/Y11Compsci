import React from "react";

const NavigationBar = () => {
    return (
        <div className="sidenav" class="transition-colors hover:transition-colors flex h-fit w-full z-1 top-0 left-0 bg-bgdark justify-evenly pb-5 pt-3">
        <a href="/pages/HOME.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">HOME</a>
        <a href="/pages/INTRODUCTION.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">INTRODUCTION</a>
        <a href="/pages/MATHS.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">MATHS</a>
        <a href="/pages/RSA.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">RSA</a>
        <a href="/pages/DIFFIE-HELLMAN.js" class="transition-colors hover:transition-colors text-text font-IBMPlexMonoBold text-xl hover:text-darkred">DIFFIE-HELLMAN</a>
        </div>
    );
};

export default NavigationBar;