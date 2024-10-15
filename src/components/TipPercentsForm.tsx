
const tipOptions = [
    {
      id: 'tip-0',
      value: .0,
      label: '0%'
    },
    {
      id: 'tip-10',
      value: .10,
      label: '10%'
    },
    {
      id: 'tip-20',
      value: .20,
      label: '20%'
    },
    {
      id: 'tip-50',
      value: .50,
      label: '50%'
    },
  ]

interface IProps {
  setTip: React.Dispatch<React.SetStateAction<number>>;
  tip: number;
}

export const TipPercentsForm = ({ setTip, tip }: IProps) => {
  return (
    <div>
      <h3 className="font-black text-2xl">Propina</h3>
      <form action="">
        {
            tipOptions.map( tipOpt => (

              <div key={tipOpt.id} className="flex gap-2">
                
                <label htmlFor={tipOpt.id}>{ tipOpt.label }</label>
                
                <input
                    id={tipOpt.id}
                    type="radio"
                    name="tip"
                    value={tipOpt.value}
                    onChange={ e => setTip(Number(e.target.value)) }
                    checked={tipOpt.value === tip}
                />

              </div>  

            ))
        }
      </form>
    </div>
  )
}

