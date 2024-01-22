type Props = {
    image: {
        src: string;
        alt: string
    }
}

export default function IconoDashboard({image,}: Props) {
    return (
        <img src={image.src} alt={image.alt} className="rounded-md md:w-[50%] w-[30%] h-auto"/>
    )
  }