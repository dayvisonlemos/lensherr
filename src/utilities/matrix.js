function fromDnaSequence(dna) {
  return dna.map(value => value.toUpperCase().split(''));
}

function transpose(matrix) {
  return matrix[0].map((col, index) => matrix.map(row => row[index]));
}

function getTransverse(col, matrix, reverse) {
  const rowLRUp = [], rowLRDown = [], rowRLUp = [], rowRLDown = [];
  let j = 0, n = matrix.length - 1;
  const rows = [];
  if (reverse) {
    for (let i = col; i >= 0; i--) {
      rowRLUp.push(matrix[j++][i]);
    }
    rows.push(rowRLUp);
  } else {
    for (let i = col; i < matrix.length; i++) {
      rowLRUp.push(matrix[j][i]);
      if (i !== j) {
        rowLRDown.push(matrix[i][j]);
        rowRLDown.push(matrix[i][n]);
      }
      j += 1;
      n -= 1;
    }
    rows.push(rowLRUp);
    if (rowLRDown.length > 0)
      rows.push(rowLRDown);
    if (rowRLDown.length > 0)
      rows.push(rowRLDown);
  }
  return rows;
}

function transverse(matrix) {
  let transversed = [];
  let j = matrix.length - 1;
  for (let i = 0; i < matrix.length; i++) {
    transversed = transversed
      .concat(getTransverse(i, matrix, false))
      .concat(getTransverse(j--, matrix, true));
  }
  return transversed;
}

function toString(matrix) {
  return matrix.map(x => x.join('')).join(' ');
}

function isQuadratic(matrix) {
  let result = true;
  const N = matrix.length;
  for (let n in matrix) {
    if (N !== matrix[n].length) {
      result = false;
      break;
    }
  }
  return result;
}

module.exports = {
  fromDnaSequence,
  transpose,
  transverse,
  isQuadratic,
  toString
};
