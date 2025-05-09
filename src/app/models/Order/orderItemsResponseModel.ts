import { ResponseModel } from "../responseModel";
import { OrderItems } from "./orderItems";

export interface orderItemsResponseModel extends ResponseModel {
  data: OrderItems[];
}
