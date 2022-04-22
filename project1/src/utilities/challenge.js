const challenge = (challenge_details) => {
  let Latex = require('react-latex');
  if (challenge_details.files == true) {
    let scriptpath = challenge_details.filepath + challenge_details.scriptfile;
    let outpath = challenge_details.filepath + challenge_details.outfile;
    console.log("scriptfile: "+scriptpath);
    console.log("outfile: "+outpath);

    return(
      <>
        <div class="flex text-text justify-center text-center p-1">
            <div class="text-text text-center rounded-md border w-2/3  border-navfocus p-1">
              <h1 class="basis-1/2 text-lg font-IBMPlexMonoBold">{challenge_details.title}</h1>
              <div class="items-center text-center">
                <div class=""><a class="font-IBMPlexMonoBold">Author:</a> {challenge_details.author}</div>
                <div class="">{challenge_details.points} <a class="font-IBMPlexMonoRegular">pts</a></div>
              </div>
              {challenge_details.text.map( line => (
                <p><Latex trust={true}>{line}</Latex></p>
              ))}
              <div class="flex flex-col pt-4">
                <a class="flex-initial font-IBMPlexMonoRegular text-darkred text-center" href={scriptpath} download={challenge_details.scriptfile}>{challenge_details.scriptfile}</a>
                <a class="flex-initial font-IBMPlexMonoRegular text-darkred text-center" href={outpath} download={challenge_details.outfile}>{challenge_details.outfile}</a>
              </div>
              <div class="flex flex-row pt-4">
                <a class="w-1/12"></a>
                <input class="flex-initial w-7/12 back bg-bgmid rounded-md p-1" placeholder={challenge_details.placeholder}></input>
                <a class="w-1/12"></a>
                <button class="flex-initial w-2/12 rounded-md bg-green p-1 text-text font-IBMPlexMonoRegular">SUBMIT</button>
                <a class="w-1/12"></a>
              </div>
            </div>
        </div>
      </>
    );
  } else {
    return(
      <>
        <div class="flex text-text justify-center text-center p-1">
            <div class="text-text text-center rounded-md border w-2/3  border-navfocus p-1">
              <h1 class="basis-1/2 text-lg font-IBMPlexMonoBold">{challenge_details.title}</h1>
              <div class="items-center text-center">
                <div class=""><a class="font-IBMPlexMonoBold">Author:</a> {challenge_details.author}</div>
                <div class="">{challenge_details.points} <a class="font-IBMPlexMonoRegular">pts</a></div>
              </div>
              {challenge_details.text.map( line => (
                <p><Latex trust={true}>{line}</Latex></p>
              ))}
              <div class="flex flex-row pt-4">
                <a class="w-1/12"></a>
                <input class="flex-initial w-7/12 back bg-bgmid rounded-md p-1" placeholder={challenge_details.placeholder}></input>
                <a class="w-1/12"></a>
                <button class="flex-initial w-2/12 rounded-md bg-green p-1 text-text font-IBMPlexMonoRegular">SUBMIT</button>
                <a class="w-1/12"></a>
              </div>
            </div>
        </div>
      </>
    );
  }
}

export default challenge;
  