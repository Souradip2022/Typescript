const superHeroes: Array<string | User> = [];
superHeroes.push("Spiderman", "Ironman");

type User = {
  name: string;
  isActive: boolean;
}

const user1: User = {
  name: 'Souradip',
  isActive: false
}

superHeroes.push(user1);