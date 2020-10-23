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

function decode(expr) {
  const morseArr = expr
    .split()
    .map((i) => i.match(/.{1,10}/g))
    .flat();
  let morseCode = morseArr.map((i) =>
    i.replace(/00/g, "").replace(/10/g, ".").replace(/11/g, "-")
  );
  let answer = morseCode.map((i) =>
    MORSE_TABLE[i] === undefined ? " " : MORSE_TABLE[i]
  );

  return answer.join("");
}

module.exports = {
  decode,
};
