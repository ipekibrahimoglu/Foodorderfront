import { ResponseModel } from "./responseModel";
import { Review } from "./review";

export interface ReviewResponseModel extends ResponseModel{
data:Review[];
}