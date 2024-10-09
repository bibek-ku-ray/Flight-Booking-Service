const { StatusCodes } = require("http-status-codes");
const { AirplainRepository } = require("../repositories");
const AppError = require("../utils/app-error");

const airplainRepository = new AirplainRepository();

async function createAirplane(data) {
    try {
        const airplane = await airplainRepository.create(data);
        return airplane;
    } catch (error) {
        if (error.name == "SequelizeValidationError") {
            let explaination = [];
            error.errors.forEach((err) => {
                explaination.push(err.message);
            });
            throw new AppError(explaination, StatusCodes.BAD_REQUEST);
        }
        throw new AppError(
            "Cannot create a new Airplane object",
            StatusCodes.INTERNAL_SERVER_ERROR
        );
    }
}

module.exports = {
    createAirplane,
};
