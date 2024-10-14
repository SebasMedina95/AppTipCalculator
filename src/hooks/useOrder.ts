import { useEffect, useState } from "react";
import { IOrder, Items } from "../interfaces/items.interface";

export default function useOrder() {

    const [order, setOrder] = useState<IOrder[]>([]);
    const [subTotal, setSubTotal] = useState<number>(0);
    const [tip, setTip] = useState<number>(0);
    const [totalTip, setTotalTip] = useState<number>(0);
    const [totalOrder, setTotalOrder] = useState<number>(0);

    const addItem = (item: Items) => {

        const itemExist = order.find( orderItem => orderItem.id === item.id );

        if( itemExist ){

            //* Este nos funciona también :)
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

    const removeItem = (itemDel: Items) => {
        
        //* Este nos funciona también :)
        //const listOrder: IOrder[] = [];
        //for (const element of order) {
        //    if( element.id !== itemDel.id ){
        //        listOrder.push(element);
        //    }
        //}
        //setOrder(listOrder);
        setOrder( order.filter( item => item.id !== itemDel.id ) );
        
    }

    const subtotalAmount = () => {

        const calculatedSubTotal = order.reduce((acc, item) => acc + item.price * item.quantity, 0);
        setSubTotal(calculatedSubTotal);

        if( tip === 0 ){
            setTotalOrder(calculatedSubTotal);
        }

    }

    const calculatedTip = () => {

        const valTip: number = Number(subTotal * tip);
        setTotalTip(valTip);
        setTotalOrder(subTotal + valTip);
        console.log("Acá estoy");

    }

    // Recalcular subtotal cada vez que cambie la orden
    useEffect(() => {
        subtotalAmount();
    }, [order]);

    useEffect(() => {
        calculatedTip();
    }, [tip, removeItem]);

    return {
        order,
        subTotal,
        tip,
        totalTip,
        totalOrder,
        setTip,
        addItem,
        removeItem,
        subtotalAmount,
        calculatedTip,
    }

}
