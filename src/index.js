module.exports = function toReadable(number) {
    const zeroToNineteen = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
        "ten",
        "eleven",
        "twelve",
        "thirteen",
        "fourteen",
        "fifteen",
        "sixteen",
        "seventeen",
        "eighteen",
        "nineteen"
    ];

    const twentyToNinety = [
        "twenty",
        "thirty",
        "forty",
        "fifty",
        "sixty",
        "seventy",
        "eighty",
        "ninety"
    ];

    const HUN = "hundred";

    function get1(num) {
        if (num == 0) {
            return "";
        } else {
            return `${zeroToNineteen[num]}`;
        }
    }

    function is10to19() {
        return number % 100 <= 19 && number % 100 >= 10;
    }

    function get10to19(num) {
        return `${zeroToNineteen[num]}`;
    }

    function get10(num) {
        if (num <= 10) {
            return "";
        }

        if (num % 10 == 0) {
            return `${twentyToNinety[num / 10 - 2]}`;
        } else {
            return `${twentyToNinety[Math.trunc(num / 10) - 2]} `;
        }
    }

    function get100(num) {
        if (num < 100) {
            return "";
        }

        if (num % 100 == 0) {
            return `${zeroToNineteen[num / 100]} ${HUN}`;
        } else {
            return `${zeroToNineteen[Math.trunc(num / 100)]} ${HUN} `;
        }
    }

    if (number == 0) {
        return zeroToNineteen[number];
    } else {
        return (
            get100(number % 1000) +
            (is10to19()
                ? get10to19(number % 100)
                : get10(number % 100) + get1(number % 10))
        );
    }
};
