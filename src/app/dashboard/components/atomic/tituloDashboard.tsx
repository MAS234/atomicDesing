type Props={
    value:string
}

export default function TituloDashboard({value}: Props) {
    return (
   <h1 className="font-medium text-2xl text-center uppercase p-3 m-5 text-white bg-blue-400 w-96 rounded-md">{value}</h1>
    )
  }