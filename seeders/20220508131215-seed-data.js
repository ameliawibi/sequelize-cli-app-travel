module.exports = {
  up: async (queryInterface) => {
    const tripsList = [
      {
        name: "north",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "east",
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        name: "west",
        created_at: new Date(),
        updated_at: new Date(),
      },
    ];

    // Insert trips before attractions because attractions reference trips
    let trips = await queryInterface.bulkInsert("trips", tripsList, {
      returning: true,
    });

    const attractions = [];
    for (let i = 0; i < trips.length; i++) {
      const trip = trips[i];

      attractions.push({
        name: "some attraction",
        trip_id: trip.id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      attractions.push({
        name: "other attraction",
        trip_id: trip.id,
        created_at: new Date(),
        updated_at: new Date(),
      });

      attractions.push({
        name: "aaattractiooon",
        trip_id: trip.id,
        created_at: new Date(),
        updated_at: new Date(),
      });
    }

    queryInterface.bulkInsert("attractions", attractions);
  },

  down: async (queryInterface) => {
    // Delete item before category records because attractions reference trips
    await queryInterface.bulkDelete("attractions", null, {});
    await queryInterface.bulkDelete("trips", null, {});
  },
};
