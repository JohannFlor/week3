const City = require("./City");
const Country = require("./country");


City.belongsTo(Country) //! city -> countryId
Country.hasMany(City) 

//? belongsTo: pertenece a 
//? hasMany: tiene muchos


