import model from "./models/index.mjs";

model.Trip.findAll({
  where: {
    name: process.argv[2],
  },
  include: {
    model: model.Attraction,
  },
}).then((returnedItinerary) => {
  console.log(returnedItinerary[0].dataValues.attractions);
});
