import RSAIntro1 from "./challenges/RSA/introduction/intro1/rsaIntro1";
import lonelyPrimes from "./challenges/RSA/primes/lonelyPrimes/lonelyPrimes";
import radicalRSA from "./challenges/RSA/exponent/radicalRSA/radicalRSA";
import section from "../utilities/section";

const RSA = () => {
  let data = [
    [
      [
        "Introduction",
        [
          "RSA is a public key cryptosystem invented by by Ron Rivest, Adi Shamir and Leonard Adleman in 1977 that relies on the inherent difficulty of factoring large semi-primes.",
          "That is, RSA is secure because of how difficult it is to find two primes $p,q$ from their product $n$, given sufficiently large values for $p$ and $q$. But knowing the so called",
          "'trapdoor' function that RSA depends upon gives little insight into how the cryptosystem actually works. This section should give you that foundational understanding,",
          "and teach you enough about RSA to be able to tackle the challenges ahead."
        ]
      ], 
      [
        RSAIntro1()
      ]
    ],
    [
      ["Public Exponent",[""]],
      [
        radicalRSA()
      ]
    ],
    [
      ["Primes",[]],
      [
        lonelyPrimes()
      ]
    ]
  ];

  return (
      <>
        {section(data, "RSA")}
      </>
    );
}
  
export default RSA;