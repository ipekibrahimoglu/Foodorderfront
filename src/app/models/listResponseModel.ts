//import { ResponseModel } from "./responseModel";

import { ResponseModel } from "./responseModel";



export interface ListResponseModel<T> extends ResponseModel{
    data:T[];
}