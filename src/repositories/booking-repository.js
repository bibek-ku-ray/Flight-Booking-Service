const { booking } = require("../models");
const CrudRepository = require("./crud-repository");

class BookingRepository extends CrudRepository {
    constructor() {
        super(booking);
    }
    async createBooking(data, transaction){
        const response = await booking.create(data, {
            transaction: transaction
        })
        return response
    }
}


module.exports = {
    BookingRepository,
};
