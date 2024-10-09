//? belongsTo: pertenece a 
//? hasMany: tiene muchos

const City = require("./City");
const Country = require("./country");

//! City -> countryId
City.belongsTo(Country) 
Country.hasMany(City) 



