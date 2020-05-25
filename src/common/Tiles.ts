enum Dots {
  One = "dots_1",
  Two = "dots_2",
  Three = "dots_3",
  Four = "dots_4",
  Five = "dots_5",
  Six = "dots_6",
  Seven = "dots_7",
  Eight = "dots_8",
  Nine = "dots_9",
}

enum Bamboo {
  One = "bamboo_1",
  Two = "bamboo_2",
  Three = "bamboo_3",
  Four = "bamboo_4",
  Five = "bamboo_5",
  Six = "bamboo_6",
  Seven = "bamboo_7",
  Eight = "bamboo_8",
  Nine = "bamboo_9",
}

enum Character {
  One = "character_1",
  Two = "character_2",
  Three = "character_3",
  Four = "character_4",
  Five = "character_5",
  Six = "character_6",
  Seven = "character_7",
  Eight = "character_8",
  Nine = "character_9",
}

enum Wind {
  North = "wind_n",
  South = "wind_s",
  East = "wind_e",
  West = "wind_w",
}

enum Dragon {
  Red = "dragon_r",
  Green = "dragon_g",
  White = "dragon_w",
}

enum Flower {
  One = "flower_1",
  Two = "flower_2",
  Three = "flower_3",
  Four = "flower_4",
}

enum Season {
  One = "season_1",
  Two = "season_2",
  Three = "season_3",
  Four = "season_4",
}

enum Animal {
  Cat = "cat",
  Rat = "rat",
  Rooster = "rooster",
  Centipede = "centipede",
}

const Tiles = {
  Dots,
  Bamboo,
  Character,
  Wind,
  Dragon,
  Flower,
  Season,
  Animal,
};

type Tiles =
  | Dots
  | Bamboo
  | Character
  | Wind
  | Dragon
  | Flower
  | Season
  | Animal;

export default Tiles;
