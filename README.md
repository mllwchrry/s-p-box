# S and P blocks

This is the implementation of S (Substitution) and P (Permutation) 
blocks algorithms (forward and reverse conversions) used in symmetric cryptographic transformations. They are
widely known because of their usage in DES (Data Encryption Standard), AES (Advanced Encryption Standard), and many other symmetric encryption algorithms.
## S-Box

### Inputs:
- an array of binary 8-bit strings (blocks)
- S-box (The Rijndael S-box used in AES is taken as an example for tests)

### Returns:
- an array of binary 8-bit blocks which values were substituted using the S-box

```sh
sBox(binaryArray, lookupTable)
```

## Rijndael S-Box

The Rijndael Forward S-Box lookup table is generated in rijndael-s-box-table.js according to the formula:

<img width="432" alt="Screenshot 2023-10-25 at 20 32 56" src="https://github.com/mllwchrry/s-p-box/assets/72436706/ae32efd5-0047-4737-872f-1930bbb148c1">

## P-Box

### Inputs:
- an array of binary 8-bit strings (blocks)
- P-box
- flag to identify whether to use forward or reverse P-box (false by default)

### Returns:
- an array of binary 8-bit blocks which values were permuted using the P-box

```sh
pBox(binaryArray, forwardPBox, true)
```

### P-box for tests
The P-box used for tests was randomly generated for educational purposes
```sh
const forwardPBox = [2, 4, 6, 3, 1, 5, 8, 7];
```

## Binary array
There's a function to use in order to generate an array of binary 8-bit blocks 
to further use in S- and P-box functions
```sh
textToBinaryBlocks(text)
```

## Project Setup

### Install dependencies
```sh
npm install
```

### Run tests
The essence of the tests is that for a given data set, 
if we perform a forward and an inverse transformation sequentially, we should get the original data set

```sh
npx mocha test.js
```

### Test results
<img width="500" alt="Screenshot 2023-10-25 at 20 31 53" src="https://github.com/mllwchrry/s-p-box/assets/72436706/ca9f221f-8248-40f1-a7f4-e4474bd807b5">
