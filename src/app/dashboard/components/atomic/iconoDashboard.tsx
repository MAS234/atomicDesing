type Props = {
    image: {
        src: string;
        alt: string
    }
    width:number
    height:number
}

export default function IconoDashboard({image, width, height}: Props) {
    return (
        <img src={image.src} alt={image.alt} width={width} height={height} className="rounded-md w-[50%]"/>
    )
  }