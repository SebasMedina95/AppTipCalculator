import { MenuItem } from "./components/MenuItem";
import { OrderContents } from "./components/OrderContents";
import { OrderTotals } from "./components/OrderTotals";
import { TipPercentsForm } from "./components/TipPercentsForm";
import { menuItems } from "./data/db";
import useOrder from "./hooks/useOrder";

function App() {

  const { 
    order, 
    subTotal,
    tip,
    totalTip,
    totalOrder,
    setTip,
    addItem, 
    removeItem,
    placeOrder
  } = useOrder();

  return (
    <>

      <header className="bg-teal-600 py-5">
        <h1 className="text-center text-4xl font-black text-white">Calculadora de Propinas y Consumos</h1>
      </header>

      <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">

        <div className="p-5">

          <h2 className="text-4xl font-black">Menú</h2>

          <div className="space-y-3 mt-10">
            { 
              menuItems.map( item => (
                <MenuItem 
                  key={ item.id }
                  item={ item }
                  addItem={ addItem }
                />
              ))
            }
          </div>
          
        </div>

        <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">

            <OrderContents
              order={order}
              removeItem={ removeItem }
            />

            <TipPercentsForm 
              setTip={setTip}
              tip={tip}
            />

            <OrderTotals 
              order={order}
              subTotal={subTotal}
              totalTip={totalTip}
              totalOrder={totalOrder}
              placeOrder={placeOrder}
            />

        </div>
      </main>
 
    </>
  )
}

export default App
