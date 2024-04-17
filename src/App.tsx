import "./App.css";
import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Divider,
} from "@nextui-org/react";
import { ligaPokemon } from "./data/ligaPokemon";
import { Equipo } from "./types/LigaPokemon.type";
import { PokemonCard } from "./components/PokemonCard";

export const App: React.FC = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      <header>
        The current theme is: {theme}
        <Button onClick={() => setTheme("light")}>Light Mode</Button>
        <Button onClick={() => setTheme("dark")}>Dark Mode</Button>
      </header>
      <main className="flex justify-center items-center gap-2 flex-wrap">
        {ligaPokemon
          .sort((a, b) => b.puntosEquipo - a.puntosEquipo)
          .map((equipo: Equipo, index: number) => {
            return (
              <Card className="max-w-[400px]" key={index}>
                <CardHeader className="flex gap-3">
                  <div className="flex flex-col">
                    <h2 className="text-lg font-bold">Top #{index + 1}</h2>
                    <p className="text-md text-default-800">
                      {equipo.nombreEquipo}
                    </p>
                    <p className="text-small text-default-500">
                      {equipo.puntosEquipo} Puntos
                    </p>
                  </div>
                </CardHeader>
                <Divider />
                <CardBody>
                  <div className="trainer">
                    <h3 className="font-bold">
                      Entrenador{equipo.lider.genero === "Mujer" && "a"}
                    </h3>
                    <ul>
                      <li className="font-md">
                        <span className="font-bold">Nombre:</span>{" "}
                        {equipo.lider.nombre}
                      </li>
                      <li className="font-md">
                        <span className="font-bold">Género:</span>{" "}
                        {equipo.lider.genero}
                      </li>
                      <li className="font-md">
                        <span className="font-bold">Origen:</span>{" "}
                        {equipo.lider.origen}
                      </li>
                    </ul>
                  </div>
                </CardBody>
                <Divider />
                <CardFooter>
                  {equipo.pokemones.map((pokemon, index) => {
                    return (
                      <PokemonCard
                        key={index}
                        name={pokemon.nombre}
                        image={pokemon.sprite}
                        type={pokemon.tipo}
                      />
                    );
                  })}
                </CardFooter>
              </Card>
            );
          })}
      </main>
    </>
  );
};
