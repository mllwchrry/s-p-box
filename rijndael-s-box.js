function multiplyIntegersAsPolynomials(x, y) {
    let z = 0;
    while (x !== 0) {
      if (x & 1 === 1)
        z ^= y;

      y <<= 1;
      x >>= 1;
    }
    return z;
  }
  
  function numberOfBits(x) {
    let nb = 0;
    while (x !== 0) {
      nb += 1;
      x >>= 1;
    }
    return nb;
  }
  
  function modIntegerAsPolynomial(x, m) {
    const nbm = numberOfBits(m);
    while (true) {
      const nbx = numberOfBits(x);
      if (nbx < nbm)
        return x;

      const mshift = m << (nbx - nbm);
      x ^= mshift;
    }
  }
  
  function rijndaelMultiplication(x, y) {
    const z = multiplyIntegersAsPolynomials(x, y);
    const m = parseInt('100011011', 2);
    return modIntegerAsPolynomial(z, m);
  }
  
  function rijndaelInverse(x) {
    if (x === 0)
      return 0;

    for (let y = 1; y < 256; y++)
      if (rijndaelMultiplication(x, y) === 1) 
        return y;
  }
  
  function leftRotate(b, n) {
    return (b << n) | (b >>> (8 - n));
  }
  
  function rijndaelSbox(x) {
    const b = rijndaelInverse(x);
    return b ^ leftRotate(b, 1) ^ leftRotate(b, 2) ^ leftRotate(b, 3) ^ leftRotate(b, 4) ^ 0b01100011;
  }
  
  function printRijndaelSbox() {
    for (let row = 0; row < 16; row++) {
      for (let col = 0; col < 16; col++) {
        const x = 16 * row + col;
        const hexString = rijndaelSbox(x).toString(16).slice(-2);
        process.stdout.write(hexString + ' ');
      }
      console.log();
    }
  }
  
  printRijndaelSbox();
  