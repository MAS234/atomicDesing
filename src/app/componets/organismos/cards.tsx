import Card from "../moleculas/card";

type Props = {
  value: string;
  textButton: string;
  textParrafo: string;

  valueTwo: string;
  textButtonTwo: string;
  textParrafoTwo: string;

  imagen: Array<{ src: string; alt: string }>;
  route: Array<{ path: string }>;
};

export default function Cards({
  route,
  imagen,
  value,
  textButton,
  textButtonTwo,
  textParrafo,
  valueTwo,
  textParrafoTwo,
}: Props) {
  return (
    <div className="flex flex-col md:flex-row justify-center items-center gap-10 mx-auto w-full max-w-screen-xl p-5">
      <Card
        value={value}
        textButton={textButton}
        textButtonTwo={textButtonTwo}
        textParrafo={textParrafo}
        imagen={imagen}
        route={route}
      />

      <Card
        value={valueTwo}
        textButton={textButton}
        textButtonTwo={textButtonTwo}
        textParrafo={textParrafoTwo}
        imagen={imagen}
        route={route}
      />

      <Card
        value={valueTwo}
        textButton={textButton}
        textButtonTwo={textButtonTwo}
        textParrafo={textParrafoTwo}
        imagen={imagen}
        route={route}
      />
    </div>
  );
}
