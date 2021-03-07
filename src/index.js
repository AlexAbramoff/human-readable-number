module.exports = function toReadeble(number) {
    if (number == 0) {
        return "zero";
    }
    let arr = [];
    arr.push(Math.floor(number / 100));
    number = number % 100;
    arr.push(Math.floor(number / 10));
    number = number % 10;
    arr.push(number);
    let Str = `${getHundred(arr[0])}${getDec(arr[1], arr[2])}${getOnes(
        arr[1],
        arr[2]
    )}`;
    return Str.trim();
};

function getHundred(hundred) {
    let hunStr = "";
    switch (hundred) {
        case 0:
            hunStr = "";
            break;
        case 1:
            hunStr = "one hundred ";
            break;
        case 2:
            hunStr = "two hundred ";
            break;
        case 3:
            hunStr = "three hundred ";
            break;
        case 4:
            hunStr = "four hundred ";
            break;
        case 5:
            hunStr = "five hundred ";
            break;
        case 6:
            hunStr = "six hundred ";
            break;
        case 7:
            hunStr = "seven hundred ";
            break;
        case 8:
            hunStr = "eight hundred ";
            break;
        case 9:
            hunStr = "nine hundred ";
            break;
    }
    return hunStr;
}

function getDec(dec, ones) {
    let decStr = "";
    if (dec == 1) {
        switch (ones) {
            case 0:
                decStr = "ten";
                break;
            case 1:
                decStr = "eleven";
                break;
            case 2:
                decStr = "twelve";
                break;
            case 3:
                decStr = "thirteen";
                break;
            case 4:
                decStr = "fourteen";
                break;
            case 5:
                decStr = "fifteen";
                break;
            case 6:
                decStr = "sixteen";
                break;
            case 7:
                decStr = "seventeen";
                break;
            case 8:
                decStr = "eighteen";
                break;
            case 9:
                decStr = "nineteen";
                break;
        }
        return decStr;
    }
    switch (dec) {
        case 0:
            decStr = "";
            break;
        case 2:
            decStr = "twenty ";
            break;
        case 3:
            decStr = "thirty ";
            break;
        case 4:
            decStr = "forty ";
            break;
        case 5:
            decStr = "fifty ";
            break;
        case 6:
            decStr = "sixty ";
            break;
        case 7:
            decStr = "seventy ";
            break;
        case 8:
            decStr = "eighty ";
            break;
        case 9:
            decStr = "ninety ";
            break;
    }
    return decStr;
}

function getOnes(dec, ones) {
    let oneStr = "";
    if (dec == 1) {
        return oneStr;
    }
    switch (ones) {
        case 0:
            oneStr = "";
            break;
        case 1:
            oneStr = "one";
            break;
        case 2:
            oneStr = "two";
            break;
        case 3:
            oneStr = "three";
            break;
        case 4:
            oneStr = "four";
            break;
        case 5:
            oneStr = "five";
            break;
        case 6:
            oneStr = "six";
            break;
        case 7:
            oneStr = "seven";
            break;
        case 8:
            oneStr = "eight";
            break;
        case 9:
            oneStr = "nine";
            break;
    }
    return oneStr;
}
