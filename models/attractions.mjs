export default function initAttractionModel(Sequelize, DataTypes) {
  return Sequelize.define(
    "attraction",
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        type: DataTypes.STRING,
      },
      trip_id: {
        type: DataTypes.INTEGER,
        references: {
          model: "trips",
          key: "id",
        },
        onUpdate: "cascade",
        onDelete: "cascade",
      },
      created_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
      updated_at: {
        allowNull: false,
        type: DataTypes.DATE,
        defaultValue: new Date(),
      },
    },
    {
      // The underscored option makes Sequelize reference snake_case names in the DB.
      underscored: true,
    }
  );
}
