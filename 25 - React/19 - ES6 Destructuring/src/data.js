const animals = [
  {
    name: "cat",
    sound: "meow",
    feedingRequirements: {
      food: 2,
      water: 3
    }
  },
  { name: "dog",
    sound: "woof",
    feedingRequirements: {
      food: 3,
      water: 4
    }
  },
  { name: "cow",
    sound: "moo",
    feedingRequirements: {
      food: 5,
      water: 10
    }
   },
  { name: "sheep",
    sound: "baa",
    feedingRequirements: {
      food: 4,
      water: 5
    }
  }
];

function useAnimals(animal) {
  return [
    animal.name,
    function() {
      console.log(animal.sound);
    }
  ];
}

export default animals;
export { useAnimals };