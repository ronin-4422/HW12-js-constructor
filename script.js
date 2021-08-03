const smallHamb = {
  cost: 50,
  calories: 20,
}

const mediumHamb = {
  cost: 75,
  calories: 30,
}

const bigHamb = {
  cost: 100,
  calories: 40,
}

const addCheese = {
  cost: 10,
  calories: 20,
}

const addSalad = {
  cost: 20,
  calories: 5,
}

const addPotato = {
  cost: 15,
  calories: 10,
}

const flavoring = {
  cost: 15,
  calories: 0,
}

const addMayo = {
  cost: 20,
  calories: 5,
}

function Hamburger (size) {
  this.size = size;   
  this.calories = 0; 
  this.cost = 0;
  

  this.getPrice = function () {    
    return this.cost + this.size.cost;
  }
  
  this.getCalories = function () {
    return this.calories + this.size.calories;
  }

  this.addModifier = function(addition) {
    switch (addition) {
      
      case addMayo:
      this.cost = this.cost + addMayo.cost;
      this.calories = this.calories + addMayo.calories;
      break;

      case addCheese:
      this.cost = this.cost + addCheese.cost;
      this.calories = this.calories + addCheese.calories;
      break;

      case addPotato: 
      this.cost = this.cost + addPotato.cost;
      this.calories = this.calories + addPotato.calories;
      break;

      case addSalad:
      this.cost = this.cost + addSalad.cost;
      this.calories = this.calories + addSalad.calories;
      break;

      case flavoring:
      this.cost = this.cost + flavoring.cost;
      this.calories = this.calories + flavoring.calories;
      break;
      
      default:
        alert('Выберите свой гамбурер!');
    }
    
  };
};

const hamburger = new Hamburger(bigHamb);

hamburger.addModifier(addSalad);

hamburger.addModifier(addPotato);

console.log("Price with sauce: " + hamburger.getPrice());
console.log("Callories with sauce: " + hamburger.getCalories());