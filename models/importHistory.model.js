module.exports = (sequelize, DataTypes) => {
  const import_history = sequelize.define(
    'import_history',
    {
      IdSupplier: DataTypes.INTEGER,
      IdProduct: DataTypes.INTEGER,
      Size: DataTypes.STRING,
      Color: DataTypes.STRING,
      Amount: DataTypes.INTEGER,
      Money: DataTypes.INTEGER,
      CREATEBY: DataTypes.STRING,
      UPDATEBY: DataTypes.STRING,
    },
    {
      paranoid: false,
      freezeTableName: true,
      tableName: 'import_history',
    }
  );

  return import_history;
};