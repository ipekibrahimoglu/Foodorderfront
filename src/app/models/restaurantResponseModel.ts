import { ResponseModel } from "./responseModel";
import { Restaurant } from "./restaurant";

export interface RestaurantResponseModel extends ResponseModel{
    data:Restaurant[];
}