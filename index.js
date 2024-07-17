// when? what? how?

// when? -> When should event occur? -> btn clicked
// what? -> What will invoke it? -> specific element
// how? -> How to invoke it? -> errorBtn function

// button clicked -> error arise


const purchaseBtn = document.querySelector('#purchase');
const newP = document.createElement('p');

let newHTML = '<p>Something went wrongg, please try again!</p>'
let text = 'Something went wronggg, please try again!!';

function errorBtnElement() {
    newP.textContent = "Something went wrong, please try again";
    purchaseBtn.insertAdjacentElement("afterend", newP);
}

function errorBtnHTML() {
    purchaseBtn.insertAdjacentHTML('afterend', newHTML);
}

function errorBtnText() {
    purchaseBtn.insertAdjacentText('afterend', text);
}

purchaseBtn.onclick = errorBtnElement;
// purchaseBtn.onclick = errorBtnHTML;
// purchaseBtn.onclick = errorBtnText;
