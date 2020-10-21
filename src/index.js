const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
};

function chunkStr(str, k) {
  const arr = [];
  for (let i = 0; i < str.length; i = i + k) {
    arr.push(str.slice(i, i + k));
  }
  return arr;
}

function trimLeadingZeros(str) {
  for (let j = 0; j < str.length; j++) {
    if (str[j] !== "0") {
      return str.slice(j);
    }
  }
  return "";
}

function decodeSymbol(seq) {
  if (seq === "**********") {
    return " ";
  }

  const code = chunkStr(seq, 2)
    .map(function (el) {
      switch (el) {
        case "10":
          return ".";
        case "11":
          return "-";
      }
    })
    .join("");

  return MORSE_TABLE[code];
}

function decode(expr) {
  return chunkStr(expr, 10).map(trimLeadingZeros).map(decodeSymbol).join("");
}

module.exports = {
  decode,
};
