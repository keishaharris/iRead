//Book class Prototype
class Book{
    constructor(title, author, pages, readStatus) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.readStatus = read_status;
    }
}

// Event: Add a book 
const addBookToCollection = (e) => {
   
  e.preventDefault();
  const title = document.querySelector('#title').value;
  const author = document.querySelector('#author').value;
  const pages = document.querySelector('#pages').value;
  const readStatus = document.querySelector('#read_status').checked;
  const id = myCollection.length + 1;
  

  let newEntry = new Book(title, author, pages, readStatus);
  myCollection.push(newEntry);

  clearForm(); 
  popupForm.style.display = 'none';
  

  console.log(id);
  displayCollection(myCollection);
    
  }

//Event: Remove a book 

//Event : Display Book Collection 
const displayCollection = (myCollection) => {
  const container = document.querySelector('.lib-ctn');
  let html = ''
      for(let i = 0; i < myCollection.length; i++){
         html += `
         <tr>
         <td><h2>Title:</h2> ${myCollection[i].title} </td>
         <td> <h2>Author</h2> ${myCollection[i].author}</td>
         <td> <h2>Total Pages:</h2> ${myCollection[i].pages}</td>
         <button>Delete from Library</button>
         </tr>`
         container.append(html)
  }
}


//Event : Hide Pop Up Form 
window.addEventListener('load', (e) => {
  if(e.target == popupForm){
      popupForm.style.display ="none";
      displayCollection();
  }

})

//Event: Clears Form Values 
const clearForm = () => {
  document.querySelector('#title').value = '';
  document.querySelector('#author').value = '';;
  document.querySelector('#pages').value = '';;
  
}


let myCollection = [
    {
    title: "Harry Potter and the Sorcerer's Stone",
    author: "J.K. Rowilings",
    pages: 223,
    read_status: "Yes, I already finished this."
  },
  
  {
    title: "Harry Potter and the Chamber of Secrets",
    author: "J.K. Rowilings",
    pages: 341,
    read_status: "Yes, I already finished this."
  },
  {
    title: "Harry Potter and the Prisoner of Azkaban",
    author: "J.K. Rowilings",
    pages: 341,
    read_status: "Yes, I already finished this."
  }
];
let newEntry;

document.querySelector('#popForm').addEventListener('submit', addBookToCollection);


const popupForm = document.getElementById("popup");
const newAdd = document.getElementById("openEntry");
newAdd.addEventListener('click', e => {
    popupForm.style.display= "block";
})

const closeBtn = document.getElementById("close");
closeBtn.addEventListener('click', e => {
  popupForm.style.display = "none";
}
)


  
  // features to add
  // Login functionaLity?
  // two css modes
  // book history 
  // rating?
  // recommendation of other books?

//   {
//     title: "Harry Potter and the Sorcerer's Stone",
//     author: "J.K. Rowilings",
//     pages: 223,
//     read_status: "Yes, I already finished this."
//   },
  
//   {
//     title: "Harry Potter and the Chamber of Secrets",
//     author: "J.K. Rowilings",
//     pages: 341,
//     read_status: "Yes, I already finished this."
//   },
//   {
//     title: "Harry Potter and the Prisoner of Azkaban",
//     author: "J.K. Rowilings",
//     pages: 341,
//     read_status: "Yes, I already finished this."
//   }

//  const displayCollection = () => { 
    
//     const tbody = document.querySelector("tbody")
//     let html = ''
//     for(let i = 0; i < myCollection.length; i++){
//        html += `
//        <tr>
//        <td><h2>Title:</h2> ${myCollection[i].title} </td>
//        <td> <h2>Author</h2> ${myCollection[i].author}</td>
//        <td> <h2>Total Pages:</h2> ${myCollection[i].pages}</td>
//        <button>Delete from Library</button>
//        </tr>`
//     }

//   }
