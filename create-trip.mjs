import db from "./models/index.mjs";

db.Trip.create({
  name: process.argv[3],
})
  .then((returnedTrip) => {
    console.log("success!!");
    console.log(returnedTrip.id, "returned trip ID");
  })
  .catch((error) => {
    console.log(error);
  });
