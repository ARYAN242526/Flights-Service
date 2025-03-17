import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import AppError from "../utils/errors/app-error.js";

function validateCreateRequest(req,res,next) {
    if(!req.body.modelNumber){
        ErrorResponse.message = "Something went wrong while creating city";
        ErrorResponse.error = new AppError(['City name not found in the incoming request in correct form '],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    next();
}

export default {validateCreateRequest}