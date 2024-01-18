type Props = {
    value: string
}

export default function Parrafo({value}: Props) {
    return (
        <p className="text-left font-light text-sm w-full p-4">{value}</p>
    )
  }