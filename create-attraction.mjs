import db from "./models/index.mjs";

db.Trip.findOne({
  where: {
    name: process.argv[2],
  },
})
  .then((returnedTrip) => {
    // Docs on .create
    // https://sequelize.org/master/class/lib/model.js~Model.html#static-method-create
    return db.Attraction.create({
      name: process.argv[3],
      trip_id: returnedTrip.id,
    });
  })
  .then((returnedAttraction) => {
    console.log("success!!");
    console.log(returnedAttraction.id, "returned attraction ID");
    console.log(returnedAttraction.trip_id, `returned attraction's trip ID`);
  })
  .catch((error) => {
    console.log(error);
  });
