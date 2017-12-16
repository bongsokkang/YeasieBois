module.exports = function(sequelize, DataTypes) {
	var Beer = sequelize.define("Beer", {
		Beer_Name: {
			type: DataTypes.STRING,
			allowNull: true

		},
		Brewery: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Aroma_Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Aroma_Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance_Clarity: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Appearance_Color: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor_Malt: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Flavor_Hops: {
			type: DataTypes.STRING,
			allowNull: true
		},
		IBU: {
			type: DataTypes.INTEGER,
			allowNull: true
		},
		ABV: {
<<<<<<< HEAD
			type: DataTypes.DECIMAL(10,2),
			allowNull: true
=======
			type: DataTypes.DECIMAL(10, 2),
			allowNull: false
>>>>>>> master
		},
		Country_Of_Origin: {
			type: DataTypes.STRING,
			allowNull: true
		},
<<<<<<< HEAD
		City_State_Of_Origin: {
=======
		City_or_State_Of_Origin: {
>>>>>>> master
			type: DataTypes.STRING,
			allowNull: true
		},
		Style: {
			type: DataTypes.STRING,
			allowNull: true
		},
		Total_Points: {
			type: DataTypes.INTEGER,
			allowNull: true
		}


	},{
		timestamps: false
	});
	return Beer;
}