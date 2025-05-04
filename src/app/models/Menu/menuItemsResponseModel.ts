import { MenuItems } from './menuItems';
import { ResponseModel } from '../responseModel';

export interface MenuItemResponseModel extends ResponseModel {
  data: MenuItems[];
}
