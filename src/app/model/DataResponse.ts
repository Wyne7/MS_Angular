import {OrderDto } from "./OrderDTO";
import { PaymentDTO } from "./PaymentDTO";

export class DataResponse
{
     deviceToken : String=""
     orderDto :  OrderDto=new OrderDto;
     paymentDto :PaymentDTO=new PaymentDTO
     key : String=""
}