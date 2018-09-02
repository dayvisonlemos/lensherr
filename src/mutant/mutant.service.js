module.exports = class MutantService {

  constructor() {
    this.allowedChar = /^[A|T|C|G|. ]+$/;
    this.pattern = /((A+){4}|(T+){4}|(C+){4}|(G+){4})/g;
  }

  transpose(matrix) {
    return matrix[0].map((col, index) => matrix.map(row => row[index]));
  }

  transverse(matrix) {
    let sequence = '';
    for (let m = 0; m < matrix.length; m++) {
      let rowTop = 0;
      let rowBottom = matrix.length - 1;
      let sequenceTop = '';
      let sequenceBottom = '';
      for (let col = m; col < matrix.length; col++) {
        sequenceTop += matrix[rowTop][col];
        sequenceBottom += matrix[rowBottom][col];
        rowTop += 1;
        rowBottom -= 1;
      }

      sequence += `${sequenceTop} ${sequenceBottom} `;
    }
    for (let m = (matrix.length - 1); m > 0; m--) {
      let rowTop = 0;
      let rowBottom = matrix.length - 1;
      let sequenceTop = '';
      let sequenceBottom = '';
      for (let col = m; col >= 0; col--) {
        sequenceTop += matrix[rowTop][col];
        sequenceBottom += matrix[rowBottom, col];
        rowTop += 1;
        rowBottom -= 1;
      }
      sequence += `${sequenceTop} ${sequenceBottom} `;
    }
    return sequence;
  }

  analizeSequence(sequence) {
    const match = sequence.match(this.pattern);
    return match ? match.length : 0;
  }

  createStringSequence(matrix) {
    return matrix.map(x => x.join('')).join(' ');
  }

  isMutant(dna) {
    const matrix = dna.map(value => value.split(''));
    let sequence = this.createStringSequence(matrix);

    if (!this.allowedChar.test(sequence))
      throw new Error('There is an error in this DNA sequence. Not alowed chars.');

    const N = matrix.length;
    if (sequence.length !== Math.pow(N, 2) + N - 1)
      throw new Error('There is an error in this DNA sequence. Not a NxN matrix.');

    let countDnaMutant = this.analizeSequence(sequence);

    if (countDnaMutant > 1)
      return true;

    const transposed = this.transpose(matrix);
    sequence = this.createStringSequence(transposed);
    countDnaMutant += this.analizeSequence(sequence);

    if (countDnaMutant > 1)
      return true;

    sequence = this.transverse(matrix);
    countDnaMutant += this.analizeSequence(sequence);

    return countDnaMutant > 1;
  }

};
