import { ResponseModel } from "../responseModel";
import { orderItems } from "./orderItems";

export interface orderItemsResponseModel extends ResponseModel {
  data: orderItems[];
}
