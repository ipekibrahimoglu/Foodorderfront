import { ResponseModel } from "./responseModel";
import { WeatherForecast } from "./weatherForecast";

export interface WeatherForecastResponseModel extends ResponseModel{
    data:WeatherForecast[];
}