import { responseModel } from "../responseModel";
import { Menu } from "./menu";

export interface MenuResponseModel extends responseModel {
  data: Menu[];
}
