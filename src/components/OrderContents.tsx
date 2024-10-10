import { formatForValuesProducts } from "../helpers/moneyFormat"
import { IOrder } from "../interfaces/items.interface"


interface IProps {
    order: IOrder[]
}

export const OrderContents = ({ order }: IProps) => {
  return (
    <div>
      <h2 className="font-black text-4xl">Consumo</h2>
      <div className="space-y-3 mt-10">
        {
            ( order.length === 0) 
                ?
                    <p className="text-center">Sin consumos aún</p>
                : (

                    order.map( order => (
                        <div key={order.id}
                             className="flex justify-between items-center border-t border-gray-200 py-5 last-of-type:border-b">

                            <div>

                                <p className="text-lg">
                                    {order.name} - { formatForValuesProducts(order.price) } 
                                </p>
                                <p className="font-black">
                                Cantidad: { order.quantity } - { formatForValuesProducts(order.quantity * order.price) }
                                </p>

                            </div>

                            <button className="bg-red-600 h-8 w-8 rounded-full text-white font-black hover:bg-red-500">
                                X
                            </button>

                        </div>
                    ))

                )
                    
        }
      </div>
    </div>
  )
}



