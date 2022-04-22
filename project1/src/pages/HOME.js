const Home = () => {
    return (
      <>
      <div className="App" class = "bg-bgdark">
        <header className="App-header" class = "flex flex-col content-center items-center align-middle min-h-screen bg-bgdark text-text">
          <p class = "text-highlightlight font-IBMPlexMonoBold text-5xl align-middle">
            CryptoCode
             
          </p>
          <p class = "text-text font-IBMPlexMonoRegular align-middle">
              Welcome to CryptoCode, the easy and fun way to learn
              how cryptography works, and how to hack it
          </p>
          <a class = "text-highlightdark font-IBMPlexMonoBold align-middle text-xl pt-4">
            Why Make This Site?
          </a>
          <p class = "text-text font-IBMPlexMonoRegular align-middle">
            because I needed to make a website for a school project, duh.
          </p>
          <a class = "text-highlightdark font-IBMPlexMonoBold align-middle text-xl pt-4">
            But I want to actually learn crypto.
          </a>
          <p class = "text-text font-IBMPlexMonoRegular align-middle">
            Good, then go check out the amazing <a href="https://cryptohack.org/" class="text-darkred">cryptohack</a> for some of the best crypto challenges you can find online.
          </p>
        </header>
      </div>
      </>
    );
}
  
export default Home;