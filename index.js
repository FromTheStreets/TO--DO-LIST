var enterButton = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector("ul");
var item = document.getElementsByTagName("li");


function inputLength() {
	return input.value.length;
}

function listLength() {
	return item.length;
}


//..................TO DO LIST.....................

// FUNCTION TO CREATE LIST ELEMENTS 

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	ul.appendChild(li);
	input.value = "";


	function crossin() {
		 li.classList.toggle("done");
	}

	function crossout() {
		li.classList.toggle("strike");
   }

	li.addEventListener("click",crossin);
	li.addEventListener("click",crossout);
	// li.addEventListener("mouseover", crossOut);


	 //DELETE BUTTON 

	var dBtn = document.createElement("button");
	dBtn.appendChild(document.createTextNode("X"));
	li.appendChild(dBtn);
	dBtn.addEventListener("click", deleteListItem);


     //FUNCTION TO DELETE LIST ELEMENTS
	function deleteListItem() {

		li.parentNode.removeChild(li);
	}
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

//ENTER KEY ADDS LIST ITEM
//13 is code for enter key

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.which === 13) {

		createListElement();
	}
}


enterButton.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

