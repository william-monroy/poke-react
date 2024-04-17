import { Card, CardBody, CardHeader, Image } from "@nextui-org/react";

interface PokemonCardProps {
  name: string;
  type: string;
  image: string;
}

const typeColors: { [key: string]: { font: string; background: string } } = {
  Agua: {
    font: "#042EB4",
    background: "#D1D5FF",
  },
  Planta: {
    font: "#176126",
    background: "#C0FFC3",
  },
  Fuego: {
    font: "#A51F1E",
    background: "#FFBCBD",
  },
  Rayo: {
    font: "#9B140E",
    background: "#FAFFD7",
  },
};

export const PokemonCard: React.FC<PokemonCardProps> = ({
  name,
  type,
  image,
}: PokemonCardProps) => {
  return (
    <Card className={`py-4 !bg-[${typeColors[type].background}]`}>
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        {/* <p className="text-tiny uppercase font-bold">Daily Mix</p> */}
        <h4 className={`font-bold text-large text-[${typeColors[type].font}]`}>
          {name}
        </h4>
        <small className="text-default-500">{type}</small>
      </CardHeader>
      <CardBody className="overflow-visible py-2">
        <Image
          alt={name}
          className="object-cover rounded-xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
};
