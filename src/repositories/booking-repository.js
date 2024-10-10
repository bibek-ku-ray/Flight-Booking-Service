const { booking } = require("../models");
const CrudRepository = require("./crud-repository");

class BookingRepository extends CrudRepository {
    constructor() {
        super(booking);
    }
}

module.exports = {
    BookingRepository,
};
