type Props={
    value:string
}

export default function ParrafoDashboard({value}: Props) {
    return (
   <p className=" w-[50%] text-white font-light text-xs text-left">{value}</p>
    )
  }