const ALPHABET = Array.from('abcdefghijklmnopqrstuvwxyz');

export function encode(input: string, secret: string) {
  const chunkySecret = chunkTheSecret(secret, input.length);

  let output = '';

  for (let index = 0; index < input.length; index++) {
    const charInput = input[index];
    const charSecret = chunkySecret[index];

    const indexInput = getCharIndex(charInput);
    const indexSecret = getCharIndex(charSecret);

    const outputIndex = indexInput + indexSecret;
    const outputChar = getCharForIndex(outputIndex);

    output += outputChar;
  }

  return output;
}

export function decode(input: string, secret: string) {
  const chunkySecret = chunkTheSecret(secret, input.length);

  let output = '';

  for (let index = 0; index < input.length; index++) {
    const charInput = input[index];
    const charSecret = chunkySecret[index];

    const indexInput = getCharIndex(charInput);
    const indexSecret = getCharIndex(charSecret);

    const outputIndex = indexInput - indexSecret;
    const outputChar = getCharForIndex(outputIndex);

    output += outputChar;
  }

  return output;
}

function chunkTheSecret(secret: string, length: number) {
  let secretPadded = '';

  while (length > secretPadded.length) {
    secretPadded = `${secretPadded}${secret}`;
  }

  secretPadded = secretPadded.substring(0, length);

  return secretPadded;
}

export function getCharForIndex(index: number) {
  return ALPHABET.at(index % ALPHABET.length);
}

export function getCharIndex(char: string) {
  return ALPHABET.indexOf(char);
}
