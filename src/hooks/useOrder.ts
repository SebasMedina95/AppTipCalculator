import { useState } from "react";
import { IOrder, Items } from "../interfaces/items.interface";

export default function useOrder() {

    const [ order, setOrder ] = useState<IOrder[]>([]);

    const addItem = (item: Items) => {

        const itemExist = order.find( orderItem => orderItem.id === item.id );

        if( itemExist ){

            // const updateOrder = order.map( 
            //     orderItem => 
            //         orderItem.id === item.id 
            //         ? {...orderItem, quantity: orderItem.quantity + 1} 
            //         : orderItem
            //     );

            const listOrder: IOrder[] = [];
            for (const element of order) {
                if( element.id === item.id ){
                    element.quantity += 1;
                    listOrder.push(element);
                }else{
                    listOrder.push(element);
                }
            }
            
            setOrder(listOrder);

        }else{

            const newItem: IOrder = { ...item, quantity: 1 }
            setOrder([...order, newItem]);

        }

    }

    return {
        order,
        addItem
    }

}
