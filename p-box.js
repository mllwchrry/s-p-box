// blocks is an array of binary 8-bit blocks
// box is the P-box
// inverse indicates whether to use forward or inverse box
// returns an array of binary 8-bit blocks which values were permuted using the P-box
function pBox(blocks, forwardBox, inverse = false) {
    const encryptedBlocks = []
    for (let i = 0; i < blocks.length; i++)
        encryptedBlocks.push(permuteBlock(blocks[i], forwardBox, inverse))
    return encryptedBlocks;
}

// block is a binary 8-bit block
// box is the P-box
// inverse indicates whether to use forward or inverse box
// returns a binary 8-bit block which values were permuted using the P-box
function permuteBlock(block, forwardBox, inverse) {
    const permutedBlock = [];
    for (let i = 0; i < forwardBox.length; i++)
        if (inverse)
            permutedBlock[forwardBox[i] - 1] = block[i];
        else
            permutedBlock[i] = block[forwardBox[i] - 1];
    return permutedBlock.join('');
}

module.exports = pBox;