import { category } from "./category";
import { ResponseModel } from "../responseModel";

export interface categoryResponseModel extends ResponseModel{
 
    data:category[];
}