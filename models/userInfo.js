module.exports = function(sequelize, DataTypes) {
	var LoginInfo = sequelize.define("Login", {
		Username: {
			type: DataTypes.STRING,
			unique: true, 
			allowNull: false
		},
		Password: {
			type: DataTypes.STRING,
			unique: true,
			allowNull: false
		},
		Email: {
			type: DataTypes.STRING,
			unique:true,
			allowNull: false
		},
		AuthToken: {
			type: DataTypes.STRING,
			allowNull: true
		},
		UserScore: {
			type: DataTypes.INTEGER,
			allowNull: true,
			default: 0
		}
	},{
		timestamps: false
	});
	return LoginInfo;
}
