import React from "react";

const lonelyPrimes = () => {
    let challenge = {
        title: "Lonely Primes",
        points: 50,
        text: ["I was cooking up a fresh batch of RSA when I got distracted, and forgot to generate the second prime. It's still secure ... right?"],
        author: "q3st1on",
        placeholder: "Enter flag here: crypto{FLAG}",
        files: true,
        filepath: "/challenges/RSA/primes/lonelyPrimes/",
        scriptfile: "lonelyPrimes.py",
        outfile: "output.txt",
    };
    return (
        challenge
    );
};

export default lonelyPrimes;