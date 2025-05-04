import { Payment } from "./payment";
import { ResponseModel } from "./responseModel";

export interface PaymentResponseModel extends ResponseModel{
data: Payment[];

}