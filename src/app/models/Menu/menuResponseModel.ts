import { ResponseModel } from "../responseModel";
import { Menu } from "./menu";

export interface MenuResponseModel extends ResponseModel {
  data: Menu[];
}
