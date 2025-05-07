import { ResponseModel } from "./responseModel";

export interface ListeResponsemodel<T>extends ResponseModel{
    data:T[];
}