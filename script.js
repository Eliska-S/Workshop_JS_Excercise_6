let ul = ["Eliška", "Sabina", "Jan", "Jiří", "Irena"]

ul.forEach(element => {
    $(".list").append(`<li>${element}</li>`);
})

let additionalBlock = {
    title: "Added with javascript",
    text: "This block was added using JavaScript's jQuery library. How awesome!"
};

$(".container").append(`<h1>${additionalBlock.title}</h1>`);
$(".container").append(`<p>${additionalBlock.text}</p>`)



