type Props = {
  value: string;
};

export default function TituloDashboard({ value }: Props) {
  return (
    <h1 className="font-medium text-xl sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-center uppercase p-3 m-5 text-white w-full md:w-auto rounded-md">
      {value}
    </h1>
  );
}
