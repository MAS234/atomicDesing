import Link from "next/link"

type Props = {
    value: string
    route:string
}

export default function Button({value,route}: Props) {
    return (
    <Link href={route}>
   <button className="w-28 h-10 bg-blue-400 rounded-md hover:bg-blue-600 duration-200 shadow-md ">
    <p className="text-white">{value}</p>
   </button>
    </Link>
    )
  }