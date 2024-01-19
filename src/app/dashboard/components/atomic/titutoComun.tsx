type Props={
    value: string
}

export default function TituloComun({value}: Props) {
    return (
   <h1 className="font-medium text-center text-xl text-white m-5">{value}</h1>
    )
  }