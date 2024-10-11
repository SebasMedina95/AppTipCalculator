import { formatForValuesProducts } from "../helpers/moneyFormat";
import { IOrder } from "../interfaces/items.interface"

interface IProps {
    order: IOrder[]
    subTotal: number;
}

export const OrderTotals = ({ order, subTotal }: IProps) => {

    console.log(order);

  return (
    <>

        <div className="space-y-3">
            <h2 className="font-black text-2xl">Totales y Propinas</h2>
            <p>
                Subtotal a Pagar: {''}
                <span className="font-bold"> { formatForValuesProducts(subTotal) } </span>
            </p>
            <p>
                Propina: {''}
                <span className="font-bold"> $0 </span>
            </p>
            <p>
                Total a Pagar: {''}
                <span className="font-bold"> $0 </span>
            </p>
        </div>

        <button></button>

    </>
  )
}


