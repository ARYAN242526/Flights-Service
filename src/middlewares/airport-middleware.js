import { StatusCodes } from "http-status-codes";
import { ErrorResponse } from "../utils/common/index.js";
import AppError from "../utils/errors/app-error.js";

function validateCreateRequest(req,res,next) {
    if(!req.body.name){
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError([' Name not found in the incoming request in correct form '],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.code){
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError([' Airport Code not found in the incoming request in correct form '],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }
    if(!req.body.cityId){
        ErrorResponse.message = "Something went wrong while creating airport";
        ErrorResponse.error = new AppError([' City Id not found in the incoming request in correct form '],StatusCodes.BAD_REQUEST);
        return res
                .status(StatusCodes.BAD_REQUEST)
                .json(ErrorResponse);
    }

    next();
}

export default {validateCreateRequest}