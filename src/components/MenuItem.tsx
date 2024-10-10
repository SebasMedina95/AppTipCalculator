import { Items } from "../interfaces/items.interface"


interface IProps {
  item: Items;
  addItem: (item: Items) => void;
}

export const MenuItem = ({ item, addItem }: IProps) => {
  return (
    <button
      className="border-2 border-teal-400 hover:bg-teal-200 w-full p-3 flex justify-between mb-5"
      onClick={ () => addItem(item) }
    >
      <p className="font-black"> { item.name } </p>
      <p className=""> ${ item.price } </p>
    </button>
  )
}

