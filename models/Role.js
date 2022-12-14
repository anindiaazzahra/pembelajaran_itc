function createModelRole(Sequelize, DataTypes){
    const Role = Sequelize.define('Role', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
            allowNull: false,
        }, 
        nama_role: {
            type: DataTypes.STRING,
            allowNull: false,
        }, 
        createdAt: {
            type: DataTypes.DATE,
            allowNull: false,
        }, 
        updatedAt: {
            type: DataTypes.DATE,
            allowNull: false,
        },
    });

    Role.associate = (models) => {
        Role.hasMany(models.User, {
            foreignKey: 'id_role',
            as: 'user',
        });
    };

    return Role;
}

module.exports = createModelRole;