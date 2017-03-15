window.onload = init;
function init() {
	var button = document.getElementById("add_button");
	button.onclick = AddToComment;
	var clearButton = document.getElementById("clear_button");
	clearButton.onclick = clearComments;
	var commentItemsArray = getComments();
	for (var i = 0; i < commentItemsArray.length; i++) {
		var key = commentItemsArray[i];
		var value = JSON.parse(localStorage[key]);
		addCommentsToDOM(key, value);
	}	
}
function getComments() {
	var commentItemsArray = localStorage.getItem("commentItemsArray");
	if (!commentItemsArray) {
		commentItemsArray = [];
		localStorage.setItem("commentItemsArray", JSON.stringify(commentItemsArray));
	} else {
		commentItemsArray = JSON.parse(commentItemsArray);
	}
	return commentItemsArray;
}

function AddToComment() {
    if (!window["localStorage"]) { alert("No local storage support");
    //you can put alternate code here
	return false;
	}
	var commentItemsArray = getComments();
	var value = document.getElementById("note_text").value;
	if(value!="")
	{
	var currentDate = new Date();
	var key = "Item_" + currentDate.getTime();
	var ItemObj = {"value": value};
	localStorage.setItem(key, JSON.stringify(ItemObj));	
	commentItemsArray.push(key);
	localStorage.setItem("commentItemsArray", JSON.stringify(commentItemsArray));
	addCommentsToDOM(key, ItemObj);
	document.getElementById("note_text").value="";
	}
	else
	{
	alert("Enter Comment");
	}
}

function deleteSearchItem(e) {
	var key = e.target.id;
	if (e.target.tagName.toLowerCase() == "span") {
		key = e.target.parentNode.id;
	}
	var commentItemsArray = getComments();
	if (commentItemsArray) {
		for (var i = 0; i < commentItemsArray.length; i++) {
			if (key == commentItemsArray[i]) {
				commentItemsArray.splice(i,1);
			}
		}
		localStorage.removeItem(key);
		localStorage.setItem("commentItemsArray", JSON.stringify(commentItemsArray));
		removeItemFromDOM(key);
	}
}

function addCommentsToDOM(key, ItemObj) {
	var commentList = document.getElementById("commentList");
	var Item = document.createElement("li");
	Item.setAttribute("id", key);
	var span = document.createElement("span");
	span.setAttribute("class", "Item");
	span.innerHTML = ItemObj.value;
	Item.appendChild(span);
	commentList.appendChild(Item);
	Item.onclick = deleteSearchItem;
}

function removeItemFromDOM(key) {
	var Item = document.getElementById(key);
	Item.parentNode.removeChild(Item);
}

function clearComments() {
	localStorage.clear();
	var ItemList = document.getElementById("commentList");
	var commentList = ItemList.childNodes;
	for (var i = commentList.length-1; i >= 0; i--) {
		ItemList.removeChild(commentList[i]);
	}
	var commentItemsArray = getComments();
}

