"use strict";
class Animals {
    constructor(name, age, gender, size, vaccine, image) {
        this.name = name;
        this.age = age;
        this.gender = gender;
        this.size = size;
        this.vaccine = vaccine;
        this.image = image;
        array.push(this);
    }
    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decoration" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                  <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                  <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                  <p class="card-text"><strong>Size:</strong> ${this.size}</p> 
                  <h1 class="vac text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                </div>
              </div>
        </div>`;
    }
}
class dogs extends Animals {
    constructor(name, age, gender, size, vaccine, image, breed, trainingSkills, URLbreed) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.trainingSkills = trainingSkills;
        this.URLbreed = URLbreed;
    }
    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12 d-flex justify-content-center">
            <div class="card card-decoration" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                    <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                    <p class="card-text"><strong>Size:</strong> ${this.size}</p>
                    <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                    <p class="card-text"><strong>Breed:</strong> ${this.breed}</p>
                    <p class="card-text"><strong>Training Skills:</strong> ${this.trainingSkills}</p>
                    <p class="card-text"><strong>Breed info:</strong> 
                    <a href="">${this.URLbreed}</a>
                </div>  
            </div>
        </div>`;
    }
}
class cats extends Animals {
    constructor(name, age, gender, size, vaccine, image, breed, furColor, URLbreed) {
        super(name, age, gender, size, vaccine, image);
        this.breed = breed;
        this.furColor = furColor;
        this.URLbreed = URLbreed;
    }
    displayInfo() {
        return `
        <div class="col-lg-4 col-md-6 col-sm-12  d-flex justify-content-center">
            <div class="card card-decoration" style="width: 22rem;">
                <img src="${this.image}" class="card-img-top" style="height:25rem; object-fit:cover">
                <div class="card-title text-center bg-dark text-white p-1">${this.name}</div>
                <div class="card-body">
                    <p class="card-text"><strong>Gender:</strong> ${this.gender}</p>
                    <p class="card-text"><strong>Age:</strong> ${this.age}</p>
                    <p class="card-text"><strong>Size:</strong> ${this.size}</p>
                    <h1 class="text-center btn d-flex justify-content-center bg-${this.vaccine ? "success" : "danger"}">Vaccine: ${this.vaccine}</h1>
                    <p class="card-text"><strong>Breed:</strong> ${this.breed}</p>
                    <p class="card-text"><strong>Fur color:</strong> ${this.furColor}</p>
                    <p class="card-text"><strong>Breed info: </strong>
                    <a href="">${this.URLbreed}</a>
                </div>  
            </div>
        </div>`;
    }
}
let array = [];
new cats("Arthur", 2, "Male", "Small", true, "../pics/arthur.jpg", "Scottish Shorthair", "Mackerel-Tabby color", "https://www.dailypaws.com/cats-kittens/cat-breeds/british-shorthair");
new cats("Rosie", 2, "Female", "Small", true, "../pics/rosie.jpg", "Sphynx", "Skin", "https://www.thesprucepets.com/sphynx-cat-4176530");
new cats("Linda", 1, "Female", "Small", false, "../pics/linda.jpg", "Angora Shorthair", "White", "https://www.hillspet.com/cat-care/cat-breeds/turkish-angora");
new dogs("Billie", 3, "Male", "Large", true, "../pics/billie.jpg", "German Shepherd", "yes", "https://www.k9web.com/breeds/black-german-shepherd/");
new dogs("Oliver", 2, "Male", "Small", false, "../pics/oliver2.jpg", "Dachshund", "yes", "https://www.hillspet.com/dog-care/dog-breeds/dachshund");
new dogs("Robert", 5, "Male", "Large", true, "../pics/robert2.jpg", "American Pit Bull Terrier", "no", "https://www.hillspet.com/dog-care/dog-breeds/american-pit-bull-terrier");
new Animals("Black Jack", 1, "Male", "Small", false, "../pics/jack black.jpg");
new Animals("Melissa", 1, "Female", "Small", false, "../pics/melissa.jpg");
document.querySelector(".sorting").addEventListener("click", agesort);
function agesort() {
    array.sort(function (min, max) {
        return min.age - max.age;
    });
    document.querySelector(".result").innerHTML = "";
    cards();
}
;
function cards() {
    array.forEach((val) => {
        document.querySelector(".result").innerHTML += val.displayInfo();
    });
}
cards();
