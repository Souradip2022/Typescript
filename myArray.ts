const superHeroes: Array<string | User2> = [];
superHeroes.push("Spiderman", "Ironman");

type User2 = {
  name: string;
  isActive: boolean;
}

const user1: User2 = {
  name: 'Souradip',
  isActive: false
}

superHeroes.push(user1);