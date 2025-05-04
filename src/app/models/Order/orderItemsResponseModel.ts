import { responseModel } from "../responseModel";
import { orderItems } from "./orderItems";

export interface orderItemsResponseModel extends responseModel {
  data: orderItems[];
}
