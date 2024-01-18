type Props = {
    value: string
}

export default function Titulo({value}: Props) {
    return (
   <h1 className="font-medium text-3xl text-center uppercase p-5">{value}</h1>
    )
  }