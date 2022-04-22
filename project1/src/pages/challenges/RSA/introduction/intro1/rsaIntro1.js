import React from "react";

const RSAIntro1 = () => {
    let challenge = {
        title: "RSA Intro 1",
        points: 10,
        text: [
            "All the operations in RSA involve $\\href{https://en.wikipedia.org/wiki/Modular_exponentiation}{\\text{modular exponentiation}}$, so we will start there. The goal here is to get you familiar with two concepts, the idea of maths as code,",
            "and modular exponentiation in your langauge of choice. Any language can be used for cryptography, but some are easier than others. For these beginner challenges,",
            "python is sufficient, and all code in challenges will be given in python where possible. That being said, python is not the most capable mathmatical programming",
            "language, and we reccomend that you download and use $\\href{https://www.sagemath.org/}{\\text{Sage Math}}$, a powerful maths scripting tool. while none of our challenges are impossible to do without it,",
            "sage will make your life far easier the further you go into cryptography and programatic maths in general.","$\\space$","In python, to compute $a^b\\text{ mod }n$ you would use the $pow()$ function, writing $pow(a, b, n)$. In sage, this is also possible, however, we recomend working with sage",
            "integers, and as such recommend writing $a^b\\text{ mod }n$ as $power\\_ mod(a, b, n)$. Now, for the challenge, what is the value of $1337^{999}\\text{ mod }1338$"
        ],
        author: "q3st1on",
        placeholder: "Enter flag here: crypto{result}",
        files: false
    };
    return (
        challenge
    );
};

export default RSAIntro1;