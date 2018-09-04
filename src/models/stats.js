module.exports = (sequelize, DataType) => sequelize.define('Stats', {
  id: {
    type: DataType.UUID,
    primaryKey: true,
    allowNull: false,
  },
  dna: {
    type: DataType.STRING,
    allowNull: false,
    unique: true,
  },
  isMutant: {
    type: DataType.BOOLEAN,
  },
});
