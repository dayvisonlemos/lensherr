const uuid = require('uuid/v4');
const { Stats } = require('../../../src/models');

describe('Stats Controller', () => {
  it('should return 0 for all fields in stats', (done) => {
    const expected = {
      count_mutant_dna: 0,
      count_human_dna: 0,
      ratio: 0,
    };
    request.get('/stats')
      .end((err, res) => {
        const result = res.body;
        expect(result).to.deep.equal(expected);
        done(err);
      });
  });

  describe('Running with data', () => {
    beforeEach((done) => {
      Stats.create({
        id: uuid(),
        dna: 'AACCGGTT',
        isMutant: true,
      }).then(() => {
        Stats.create({
          id: uuid(),
          dna: 'AACCGGCC',
          isMutant: false,
        }).then(() => {
          Stats.create({
            id: uuid(),
            dna: 'TTCCGGCC',
            isMutant: false,
          }).then(() => {
            done();
          });
        });
      });
    });

    afterEach((done) => {
      Stats.destroy({ where: {} })
        .then(() => {
          done();
        });
    });

    it('should return 0.5 as a ratio', (done) => {
      const expected = {
        count_mutant_dna: 1,
        count_human_dna: 2,
        ratio: 0.5,
      };
      request.get('/stats')
        .end((err, res) => {
          const result = res.body;
          expect(result).to.deep.equal(expected);
          done(err);
        });
    });
  });
});
