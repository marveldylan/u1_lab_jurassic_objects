//My favorite Moview

// const favoriteMovie = {
//     title: 'Dune',
//     director: 'Denis Villenueve',
//     actors: ['Timothee Chalamet', 'Zendaya', 'Rebecca Ferguson', 'Oscar Isaac', 'Jason Momoa', 'Stellan Skarsgard', 'Josh Brolin'],
//     releaseYear: 2021,
//     duration: 155
// }
// console.log(favoriteMovie.title);
// console.log(favoriteMovie.director);
// console.log(favoriteMovie.releaseYear);

// favoriteMovie.duration += 25;
// console.log(favoriteMovie.duration);

// Part 1
// const snakewaterMontana = {
//     paleontologist: 'Dr. Alan Grant',
//     depth: '10 meters',
//     specimen: 'Velociraptor'
//   }
  
//   const guestOfHonor = snakewaterMontana.paleontologist;
//   console.log(guestOfHonor);

//   const cleverGirl = snakewaterMontana.specimen;
//   console.log(cleverGirl);

  // Part 2
  const nicaragua = {
    depth: '200 meters',
    annualBudget: 1500000,
    specimens: [
      'Tyrannosaurus Rex',
      'Stegosaurous',
      'Triceratops',
      'Velociraptor'
    ]
  }

//   const nicaraguanSpecimens = nicaragua.specimens;
// //   console.log(nicaraguanSpecimens);

//   const favoriteSpecimen = nicaraguanSpecimens[0];
// //   console.log(favoriteSpecimen)

//   nicaragua.annualBudget += 250000;
// //   console.log(nicaragua.annualBudget);

// Part 3
const hammondsMines = {
    buenos_aires: {
      depth: '400 meters',
      annualBudget: 1000000,
      specimens: ['Dilophosaurus', 'Brachiosaurus']
    },
    mexico: {
      depth: '350 meters',
      annualBudget: 900000,
      specimens: ['Gallimimus', 'Parasaurolophus']
    }
  }
  
  const mexicanDepth = hammondsMines.mexico.depth;
  console.log(`The depth of the mine in Mexico is: ${mexicanDepth}`);

  const BuenosAiresBudget = hammondsMines.buenos_aires.annualBudget;
  console.log(`The budget for the Buenos Aires Mine is: $${BuenosAiresBudget}`);

  console.log(`The dinosaur DNA specimins found in Buenos Aires include: ${hammondsMines.buenos_aires.specimens}.`);

hammondsMines.nicaragua = nicaragua;

const mexicoBudget = hammondsMines.mexico.annualBudget;
const nicaraguaBudget = hammondsMines.nicaragua.annualBudget;

console.log(`The budget for the Mexico Mine is $${mexicoBudget}.`);
console.log(`The budget for the Mexico Mine is $${nicaraguaBudget}.`);

const totalBudget = BuenosAiresBudget + mexicoBudget + nicaraguaBudget;

console.log(`The total annual budget for Hammonds Mines is $${totalBudget}.`);

console.log(hammondsMines.mexico.specimens[1]);
