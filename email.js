//////select items/////////
const alert = document.querySelector('.alert');
const form = document.querySelector('.material-form');
const material = document.getElementById('material');
const submitBtn = document.querySelector('.material-submit');
const container = document.querySelector('.list-container ');
const list = document.querySelector('.material-list');
const clearBtn = document.querySelector('.clear-btn');

/////////edit option/////////
let editElement;
let editFlag = false;
let editId = "";
console.log(material.value);
//////event listeners//////////
//submit form//
form.addEventListener('submit', addItem)
//clear items
clearBtn.addEventListener('click', clearAllItems);
//window load
window.addEventListener('DOMContentLoaded', setUpItems);
///////////functions/////////
function addItem(e) {
    e.preventDefault();
    const value = material.value;
    const id = new Date().getTime().toString();
    console.log(id, value)

    if (value && !editFlag) {
        console.log('add item');
        var items = getLocalStorage();
        if (items.length < 5) {
            createlist(id, value)
            displayAlert('item added', "success")
        }

        container.classList.add('visibilty-on');
        //local storage
        addToLocalStorage(id, value);
        //set back to default 
        setBackToDefault();
    }
    else if (value && editFlag) {
        console.log('edit');
        editElement.innerHTML = value;
        displayAlert('value changed', "success")
        ///
        editLocalStorage(editId, value);
        setBackToDefault();
    }
    else {
        console.log('empty value')
        displayAlert('value is empty', "danger")
    }

}

//display alert
function displayAlert(text, action) {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove
    setTimeout(function () {
        alert.textContent = " ";
        alert.classList.remove(`alert-${action}`);
    }, 1000)
}
function clearAllItems() {
    const items = document.querySelectorAll('.material-item');
    if (items.length > 0) {
        items.forEach(function (item) {
            list.removeChild(item);
        })
    }
    container.classList.remove('visibilty-on');
    //
    localStorage.removeItem('list');
    setBackToDefault();
}
function editButton(e) {
    console.log('edit');
    const element = e.currentTarget.parentElement.parentElement;
    editElement = e.currentTarget.parentElement.previousElementSibling;
    material.value = editElement.innerHTML;
    editFlag = true;
    editId = element.dataset.id;
    submitBtn.textContent = 'edit';

}
function deleteButton(e) {
    console.log('delete');
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    console.log(element)
    list.removeChild(element);
    if (list.children.length === 0) {
        container.classList.remove('visibilty-on');
    }
    setBackToDefault();
    displayAlert('item removed', 'danger');
    removefromLocalStorage(id);
}
//set back to default
function setBackToDefault() {
    console.log('set back to defualt');
    material.value = '';
    editFlag = false;
    editId = '';
    submitBtn.textContent = 'submit';
}

/////////////local storage/////////
function addToLocalStorage(id, value) {
    console.log('add to local storage');
    const material = { id, value };
    let items = getLocalStorage();
    // items.push(material);
    if (items.length < 5) {
        items.push(material);
    } else if (items.length === 5) {
        displayAlert('more items cant be added', 'danger');
    }
    localStorage.setItem('list', JSON.stringify(items));
}

function removefromLocalStorage(id) {
    console.log('remove from local storage');
    let items = getLocalStorage();
    items = items.filter(function (item) {
        if (item.id !== id) {
            return item;
        }
    })
    localStorage.setItem('list', JSON.stringify(items));

}
function editLocalStorage(id, value) {
    let items = getLocalStorage();
    items = items.map(function (item) {
        if (item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem('list', JSON.stringify(items));
}
function getLocalStorage() {
    return localStorage.getItem('list')
        ? JSON.parse(localStorage.getItem('list'))
        : [];

}



//////////////setup items///////////    
function setUpItems() {
    let items = getLocalStorage();

    items.forEach(function (item) {
        createlist(item.id, item.value)
    });

    container.classList.add('visibilty-on');


}
function createlist(id, value) {
    const element = document.createElement('article');
    element.classList.add('material-item')
    const atrr = document.createAttribute('data-id');
    atrr.value = id;
    element.setAttributeNode(atrr);
    element.innerHTML = ` <p class="title-list">${value}</p>
    <div class="btn-container">
        <button type="button" class="edit-btn"><i class="far fa-edit"></i></button>
        <button type="button" class="delete-btn"><i class="fas fa-trash"></i></button>
    </div> `;
    const deleteBtn = element.querySelector('.delete-btn');
    const editBtn = element.querySelector('.edit-btn');
    deleteBtn.addEventListener('click', deleteButton);
    editBtn.addEventListener('click', editButton);
    list.appendChild(element);
    container.classList.add('visibilty-on');
}
// ////////select items/////////
// const alert = document.querySelector('.alert');
// const form = document.querySelector('.material-form');
// const material = document.getElementById('material');
// const submitBtn = document.querySelector('.material-submit');
// const container = document.querySelector('.list-container ');
// const list = document.querySelector('.material-list');
// const clearBtn = document.querySelector('.clear-btn');

// /////////edit option/////////
// let editElement;
// let editFlag = false;
// let editId = "";
// console.log(material.value);
// //////event listeners//////////
// //submit form//
// form.addEventListener('submit', addItem)
// //clear items
// clearBtn.addEventListener('click', clearAllItems);
// //window load
// window.addEventListener('DOMContentLoaded', setUpItems);
// ///////////functions/////////
// function addItem(e) {
//     e.preventDefault();
//     const value = material.value;
//     const id = new Date().getTime().toString();
//     console.log(id, value)

//     if (value && !editFlag) {
//         console.log('add item');
//         createlist(id, value)
//         displayAlert('item added', "success")
//         container.classList.add('visibilty-on');
//         //local storage
//         addToLocalStorage(id, value);
//         //set back to default 
//         setBackToDefault();
//     }
//     else if (value && editFlag) {
//         console.log('edit');
//         editElement.innerHTML = value;
//         displayAlert('value changed', "success")
//         ///
//         editLocalStorage(editId, value);
//         setBackToDefault();
//     }
//     else {
//         console.log('empty value')
//         displayAlert('value is empty', "danger")
//     }

// }

// //display alert
// function displayAlert(text, action) {
//     alert.textContent = text;
//     alert.classList.add(`alert-${action}`);
//     //remove
//     setTimeout(function () {
//         alert.textContent = " ";
//         alert.classList.remove(`alert-${action}`);
//     }, 1000)
// }
// function clearAllItems() {
//     const items = document.querySelectorAll('.material-item');
//     if (items.length > 0) {
//         items.forEach(function (item) {
//             list.removeChild(item);
//         })
//     }
//     container.classList.remove('visibilty-on');
//     //
//     localStorage.removeItem('list');
//     setBackToDefault();
// }
// function editButton(e) {
//     console.log('edit');
//     const element = e.currentTarget.parentElement.parentElement;
//     editElement = e.currentTarget.parentElement.previousElementSibling;
//     material.value = editElement.innerHTML;
//     editFlag = true;
//     editId = element.dataset.id;
//     submitBtn.textContent = 'edit';

// }
// function deleteButton(e) {
//     console.log('delete');
//     const element = e.currentTarget.parentElement.parentElement;
//     const id = element.dataset.id;
//     console.log(element)
//     list.removeChild(element);
//     if (list.children.length === 0) {
//         container.classList.remove('visibilty-on');
//     }
//     setBackToDefault();
//     displayAlert('item removed', 'danger');
//     removefromLocalStorage(id);
// }
// //set back to default
// function setBackToDefault() {
//     console.log('set back to defualt');
//     material.value = '';
//     editFlag = false;
//     editId = '';
//     submitBtn.textContent = 'submit';
// }

// /////////////local storage/////////
// function addToLocalStorage(id, value) {
//     console.log('add to local storage');
//     const material = { id, value };
//     let items = getLocalStorage();
//     items.push(material);
//     localStorage.setItem('list', JSON.stringify(items));
// }

// function removefromLocalStorage(id) {
//     console.log('remove from local storage');
//     let items = getLocalStorage();
//     items = items.filter(function (item) {
//         if (item.id !== id) {
//             return item;
//         }
//     })
//     localStorage.setItem('list', JSON.stringify(items));

// }
// function editLocalStorage(id, value) {
//     let items = getLocalStorage();
//     items = items.map(function (item) {
//         if (item.id === id) {
//             item.value = value;
//         }
//         return item;
//     })
//     localStorage.setItem('list', JSON.stringify(items));
// }
// function getLocalStorage() {
//     return localStorage.getItem('list')
//         ? JSON.parse(localStorage.getItem('list'))
//         : [];

// }



// //////////////setup items///////////    
// function setUpItems() {
//     let items = getLocalStorage();
//     if (items.length > 0) {
//         items.forEach(function (item) {
//             createlist(item.id, item.value)
//         })
//         container.classList.add('visibilty-on');
//     }

// }
// function createlist(id, value) {
//     const element = document.createElement('article');
//     element.classList.add('material-item')
//     const atrr = document.createAttribute('data-id');
//     atrr.value = id;
//     element.setAttributeNode(atrr);
//     element.innerHTML = ` <p class="title-list">${value}</p>
//     <div class="btn-container">
//         <button type="button" class="edit-btn">edit</button>
//         <button type="button" class="delete-btn">delete</button>
//     </div> `;
//     const deleteBtn = element.querySelector('.delete-btn');
//     const editBtn = element.querySelector('.edit-btn');
//     deleteBtn.addEventListener('click', deleteButton);
//     editBtn.addEventListener('click', editButton);
//     list.appendChild(element);
//     container.classList.add('visibilty-on');
// }//