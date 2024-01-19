import CardDashboard from "../moleculas/cardDashboard";

type Props = {
  titulo: string;
  parrafo: string;
  image: Array<{ src: string; alt: string }>;
  width: number;
  heigth: number;
  indexImage: number;
  indexImageTwo:number;
  indexImageThree:number;
};

export default function DashFirstPart({
  titulo,
  parrafo,
  image,
  indexImage,
  indexImageTwo,
  indexImageThree,
  width,
  heigth,
}: Props) {
  return (
    <div className="flex justify-center items-center gap-5">
      <CardDashboard
        titulo={titulo}
        parrafo={parrafo}
        image={image}
        indexImage={indexImage}
        width={width}
        heigth={heigth}
      />

      <CardDashboard
        titulo={titulo}
        parrafo={parrafo}
        image={image}
        indexImage={indexImageTwo}
        width={width}
        heigth={heigth}
      />

      <CardDashboard
        titulo={titulo}
        parrafo={parrafo}
        image={image}
        indexImage={indexImageThree}
        width={width}
        heigth={heigth}
      />
    </div>
  );
}
