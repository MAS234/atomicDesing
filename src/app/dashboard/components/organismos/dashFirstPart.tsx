import CardDashboard from "../moleculas/cardDashboard";

type Props = {
  titulo: string;
  parrafo: string;
  image: Array<{ src: string; alt: string }>;
  indices: number[];
};

export default function DashFirstPart({
  titulo,
  parrafo,
  image,
  indices
}: Props) {
  return (
    <div className="flex flex-wrap justify-evenly items-center gap-5">
      {indices.map((index) => (
        <CardDashboard
          key={index}
          titulo={titulo}
          parrafo={parrafo}
          indexImage={index}
          image={image}
        />
      ))}
    </div>
  );
}
