///product slider start///
const slides = document.querySelectorAll('.slider')
const nextBtn = document.querySelector('.nextBtn')
const prevBtn = document.querySelector('.prevBtn')

slides.forEach(function (slider, index) {
    slider.style.left = `${index * 100}%`;
})

var counter = 0;
nextBtn.addEventListener('click', function () {
    counter++;
    carousel();
})
prevBtn.addEventListener('click', function () {
    counter--;
    carousel();
})


function carousel() {
    if (counter === slides.length) {
        counter = 0;
    }
    if (counter < 0) {
        counter = slides.length - 1;
    }
    slides.forEach(function (slider) {
        slider.style.transform = `translateX(-${counter * 100}%)`
    })
}
///product slider end///

///artist description start///
const reviews = [
    {
        id: 1,
        name: "Anastasiya Valiulina",
        job: "PAINTER | RUSSIA",
        img: "img/artist-1.jpeg",
        info: "Anastasiya Valiulina is a gifted Russian painter who has been captivated by art since spending countless childhood years in her favorite place - her grandfather's studio. Now with a loyal base of collectors around the world, she composes elegant impressionist and abstract works marked by gentle mixes of colour and light.",
    },
    {
        id: 2,
        name: "Shirin Donia",
        job: "PAINTER | GERMANY",
        img: "img/artist-2.jpeg",
        info: "Shirin Donia is an emerging German painter who has exhibited her work throughout Frankfurt. Considering herself as an accountant artist, she views reliability, punctuality and strategic execution of projects as essential. Balancing creativity and control, she composes deconstructed feminine portraits that explore themes such as strength, peace and escape, combining text and expression to arrive at an eye-catching aesthetic and open-ended message",

    },
    {
        id: 3,
        name: "Olga Novokhatska",
        job: "PAINTER | FRANCE",
        img: "img/painter-3.jpeg",
        info: "Olga Novokhatska is an exciting Ukrainian artist based in France, who has exhibited her work throughout France, Belgium, Ukraine and the UK. She draws inspiration from 19th century Impressionists to explore her two primary themes: the exuberance of nature and the human figure, infusing each piece with movement and energy.",
    },
    {
        id: 4,
        name: "Javier Torices",
        job: "PAINTER | SPAIN",
        img: "img/painter-4.jpeg",
        info: "Javier Torices is a talented Spanish artist whose works have featured in prizes, publications, exhibitions and collections across the country. Aiming to transmit the emotions, introspection, tranquility and harmony of the sea, he composes realistic works that nonetheless maintain evidence of brushstrokes and gestures upon close inspection. This provides each painting with a sense of the undone, a visual rework of a familiar element, overall rendering it alive and strong, visceral and beautiful.",
    },
    {
        id: 5,
        name: "Eric Zener",
        job: "PAINTER | UNITED STATES",
        img: "img/painter-5.jpeg",
        info: "Eric Zener (born 1966, Astoria, Oregon) is an American photorealist artist best known for figure paintings of lone subjects, often in or about swimming pools.Zener's works have been exhibited and sold throughout the United States, and internationally, and are part of a number of prominent private and corporate art collections.",
    },


];

const img = document.querySelector('.persons-img');
const author = document.querySelector('.name');
const job = document.querySelector('.job');
const info = document.querySelector('.info');

const prevArtist = document.querySelector('.prev-artist');
const nextArtist = document.querySelector('.next-artist');

let currentItem = 0;

//load the first object when opening the window//
window.addEventListener('DOMContentLoaded', function () {
    showPerson(currentItem);
});

function showPerson(person) {
    const item = reviews[person];
    img.src = item.img;
    author.textContent = item.name;
    job.textContent = item.job;
    info.textContent = item.info;
}
nextArtist.addEventListener('click', function () {
    currentItem++;
    if (currentItem > reviews.length - 1) {
        currentItem = 0;
    }
    showPerson(currentItem);
});
prevArtist.addEventListener('click', function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson(currentItem);
});
///artist description end///

//tabs start//
const tabBtns = document.querySelectorAll('.tab-btn');
const about = document.querySelector('.about');
const article = document.querySelectorAll('.content');

about.addEventListener('click', function (e) {
    const id = e.target.dataset.id;
    //remove active class from all buttons
    if (id) {
        tabBtns.forEach(function (btn) {
            btn.classList.remove('active');
            e.target.classList.add('active');
        })
        article.forEach(function (article) {
            article.classList.remove('content-active');
        })
        const element = document.getElementById(id);
        element.classList.add('content-active');

    }


});
//tabs end//


///language changer////
const langBox = document.querySelector('.change-lang');
const langIcon = document.querySelector('.langIcon');
const iconWrapper = document.querySelector('.wrapper');

window.addEventListener('click', function (e) {
    if (e.target.classList.contains('langIcon')) {
        langBox.classList.toggle('show-box');
        iconWrapper.classList.toggle('marginTop');

    } else {
        langBox.classList.remove('show-box');
        iconWrapper.classList.remove('marginTop');
    }

});

////////////////validation start//////////////////
const username = document.getElementById('name');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');
const error = document.querySelector('.error');

function validateForm() {
    var messages = [];
    //check id input is empty all together
    if (username.value === '' || username.value == null || email.value === '' || email.value == null || password.value === '' || password.value == null || password2.value === '' || password2.value == null) {
        messages.push('Every field must be filled');
    }
    ///check if inputs are empty separately and only add red borders
    if (username.value === '' || username.value == null) {
        username.classList.add('red')
    } else {
        username.classList.remove('red')
    }
    if (email.value === '' || email.value == null) {
        email.classList.add('red')
    } else {
        email.classList.remove('red')
    }
    if (password.value === '' || password.value == null) {
        password.classList.add('red')
    } else {
        password.classList.remove('red')
    }
    if (password2.value === '' || password2.value == null) {
        password2.classList.add('red')
    } else {
        password2.classList.remove('red')
    }
    //email validation
    const emailRGEX = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/igm;
    const emailResult = emailRGEX.test(email.value);
    if (emailResult == false) {
        messages.push('Email is invalid');
        email.classList.add('red')
    } else {
        email.classList.remove('red')
    }
    if (emailResult == false & email.value === '') {
        messages.pop();
    }
    ///password validation
    var passwordRGEX = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])");
    var passwordResult = passwordRGEX.test(password.value);

    if (password.value.length < 8 || password.value.length > 20) {
        messages.push('The password must be min 8 and max 20 characters long');
        password.classList.add('red')
    } else {
        password.classList.remove('red')
    }
    if (passwordResult == false & password.value === '') {
        messages.pop();
    }

    if (passwordResult == false) {
        messages.push('password must contain at least 1 number,special character,lowercase and uppercase alphabetical character')
        password.classList.add('red')
    } else {
        password.classList.remove('red')
    }
    if (passwordResult == false & password.value === '') {
        messages.pop();

    }
    //re-enter password validation
    if ((password2.value === password.value) == false) {
        messages.push('re-enter password again');
        password2.classList.add('red')
    }
    if ((password2.value === password.value) == false & password2.value === "") {
        messages.pop();

    }
    ///display error
    error.innerText = messages;
    if (messages.length > 0) {
        return false;
    }

}
////////////////validation end//////////////////














// const dicEnglish = {
//     //header texts//
//     title: 'GEORGIAN TIMES GALLERY',
//     li1: 'Artworks',
//     li2: 'Artists',
//     li3: 'Collection',
//     //art slider names//
//     painting1: 'Metamorfosis by Isabella Conti',
//     painting2: 'The woman and the cat by Bihua Yang',
//     painting3: 'Under the shelter of generosity',
//     painting4: "Menagerie 3 by Mary O'Malley",
//     painting5: 'Relationship by Toshiyuki Fukuda',
//     painting6: 'Birds are gathered in God by Maryam',
//     painting7: 'Scenery of Home by Toshiyuki Fukuda',
//     painting8: 'Cat of Helsinki by Toshiyuki Fukuda',
//     paintingButton: 'See More Art Pieces',
//     //tabs area//
//     TabButton1: 'Artist',
//     TabButton2: 'About',
//     TabButton3: 'Material',
// };
// const dicGeo = {
//     //header texts//
//     title: 'ქართული დროის გალეარეა',
//     li1: 'ნამუშევრები',
//     li2: 'მხატვრები',
//     li3: 'კოლექციები',
//     //art slider names//
//     painting1: 'მეტამორფოზი იზაბელა კონტის მიერ',
//     painting2: 'ქალი და კატა ბიჰუა იანგის მიერ',
//     painting3: 'კეთილშობილების თავშესაფრის ქვეშ',
//     painting4: "Menagerie 3 მერი ო'მალის მიერ",
//     painting5: 'ურთიერთობა ტოშიიუკი ფუკუდას მიერ',
//     painting6: 'ღმერთთან შეკრებილი ჩიტები მარიამის მიერ',
//     painting7: 'სახლის პეიზაჟი ტოშიიუკი ფუკუდას მიერ',
//     painting8: 'ჰელსინკის კატა ტოშიიუკი ფუკუდას მიერ',
//     paintingButton: 'მეტი ნამუშევრების ნახვა',
//     //tabs area//
//     TabButton1: 'მხატვარი',
//     TabButton2: 'ინფო',
//     TabButton3: 'მასალები',
// };

// //changing the language
// //english
// const English = document.querySelector('.en');
// const Georgian = document.querySelector('.geo');

//////select items/////////
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
// }

