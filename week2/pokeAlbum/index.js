import {SLL} from "./sll.js";
import { fileList } from "./data.js";

const page1 = fileList.slice(0,100);
const page2 = fileList.slice(101,201);
const page3 = fileList.slice(201,301);
const page4 = fileList.slice(301,401);
const page5 = fileList.slice(401,fileList.length -1);

const sll = new SLL();

sll.addToBack(page1)
sll.addToBack(page2)
sll.addToBack(page3)
sll.addToBack(page4)
sll.addToBack(page5)

let currentPage = sll.head;

console.log(currentPage);

const imageContainer = document.querySelector("#images");
const button = document.querySelector("#page");


const loadImages = () => {

    for (let pokemon of currentPage.value) {

        let imageElement = document.createElement('img');
        imageElement.src = "images/" + pokemon;
        imageElement.width = 60;

        imageContainer.append(imageElement);
    }


}

const nextPage = () => {
    if (!currentPage.next) {
        currentPage = sll.head;
        clearPage();
        loadImages();
        return;
    }
    currentPage = currentPage.next;
    clearPage();
    loadImages();
}

const clearPage = () => {
    while(imageContainer.firstChild) {
        imageContainer.removeChild(imageContainer.firstChild);
    }
}

button.addEventListener("click", () => nextPage());

loadImages();
// nextPage();

