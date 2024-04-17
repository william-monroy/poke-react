export interface Pokemon {
  nombre: string;
  tipo: string;
  sprite: string;
}

export interface Lider {
  nombre: string;
  genero: string;
  origen: string;
}

export interface Equipo {
  nombreEquipo: string;
  puntosEquipo: number;
  lider: Lider;
  pokemones: Array<Pokemon>;
}
