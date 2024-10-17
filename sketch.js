let movies = [

  { title: "Toy Story", age: "livre", description: "Uma aventura animada com brinquedos que ganham vida." },

  { title: "The Lion King", age: "livre", description: "A história épica de Simba, um jovem leão." },

  { title: "Deadpool", age: "18+", description: "Um anti-herói que quebra a quarta parede em sua luta contra vilões." },

  { title: "The Shawshank Redemption", age: "16+", description: "A história de um homem injustamente condenado a prisão." },

  { title: "Finding Nemo", age: "livre", description: "Um pai peixe que faz de tudo para encontrar seu filho perdido." },

];

let selectedMovie = {};

function setup() {

  createCanvas(900, 400);

  let ageInput = createSelect();

  ageInput.position(20, 20);

  ageInput.option('Escolha a faixa etária');

  ageInput.option('livre');

  ageInput.option('14+');

  ageInput.option('16+');

  ageInput.option('18+');

  ageInput.changed(() => {

    selectMovie(ageInput.value());

  });

}

function selectMovie(age) {

  let recommendations = movies.filter(movie => movie.age === age);

  if (recommendations.length > 0) {

    selectedMovie = random(recommendations);

  } else {

    selectedMovie = {};

  }

}

function draw() {

  background(220);

  

  if (selectedMovie.title) {

    textSize(24);

    text("Recomendação de Filme:", 20, 100);

    

    textSize(20);

    text("Título: " + selectedMovie.title, 20, 140);

    text("Classificação: " + selectedMovie.age, 20, 180);

    text("Descrição: " + selectedMovie.description, 20, 220);

  } else {

    textSize(20);

    text("Escolha uma faixa etária para ver recomendações!", 20, 100);

  }

}