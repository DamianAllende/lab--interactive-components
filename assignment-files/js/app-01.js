//console.log("damian")
let btn = document.querySelectorAll(".app__list .app__menu")
// let title = document.querySelector(".container__title")
// let content = document.querySelector(".container__content")
// let fotter = document.querySelector(".container__fotter")
let arrayOfBotton = [...btn]

let container = document.querySelectorAll(".app__container")
let arrayOfContainer = [...container]

let listOne = document.querySelector(".programs")



//console.log(arrayOfBotton)
for (let i = 0; i < arrayOfBotton.length; i++){

	arrayOfBotton[i].addEventListener("click", changeContainer)
	//console.log(arrayOfBotton[i].classList)	
}

function changeContainer(event){
	//console.log(event.target.textContent)
	let j = arrayOfBotton.indexOf(event.target)


	for (let i = 0; i < arrayOfContainer.length; i++){
		arrayOfContainer[i].classList.remove("container__activo")
	}

	arrayOfContainer[j].classList.add("container__activo")

	// title.textContent = event.target.dataset.title
	// // li UNO
	// content.textContent = event.target.dataset.text
	// fotter.textContent = event.target.dataset.fotter

	// li DOS
	// let newString = []
	// let newli = ""
	// let list = event.target.dataset.list.split(",")
	// for(let j = 0; j < list.length; j++){
	// 	newli = document.createElement("li")
	// 	newli.textContent = list[j]
	// 	listOne.appendChild(newli)
	// }

	
	for (let i = 0; i < arrayOfBotton.length; i++){
		arrayOfBotton[i].classList.remove("activado")
	}

	event.target.classList.add("activado")

}





//msrp.textContent = contentSet.dataset.msrp