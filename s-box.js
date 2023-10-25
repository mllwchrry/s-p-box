// blocks is an array of binary 8-bit blocks
// box is the S-box (lookup table)
// returns an array of binary 8-bit blocks which values were substituted using the S-box
function sBox(blocks, box) {
    const substitutedBlocks = []
    for (let i = 0; i < blocks.length; i++)
        substitutedBlocks.push(substituteBlock(blocks[i], box))
    return substitutedBlocks;
}

// block is a binary 8-bit block
// box is the S-box (lookup table)
// returns a binary 8-bit block with values substituted using S-box
function substituteBlock(block, box) {
    const encryptedHex = box[parseInt(block, 2)]
    let encryptedBinary = parseInt(encryptedHex, 16).toString(2);
    return encryptedBinary.length % 8 === 0
        ? encryptedBinary
        : '0'.repeat(8 - (encryptedBinary.length % 8)) + encryptedBinary
}

module.exports = sBox;