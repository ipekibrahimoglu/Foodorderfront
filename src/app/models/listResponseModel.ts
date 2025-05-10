import { ResponseModel } from "./responseModel";

export interface ListResponsemodel<T>extends ResponseModel{
    data:T[];
}