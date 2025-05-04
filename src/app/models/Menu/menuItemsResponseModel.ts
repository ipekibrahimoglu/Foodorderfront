import { MenuItems } from './menuItems';
import { responseModel } from '../responseModel';

export interface MenuItemResponseModel extends responseModel {
  data: MenuItems[];
}
