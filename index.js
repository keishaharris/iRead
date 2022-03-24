let myCollection = [];
let newEntry;

const popupForm = document.getElementById("popup");
const newAdd = document.getElementById("newAdd");
const closeBtn = document.getElementById("close");
const submitBtn = document.getElementById("submit");
const form = document.getElementById("form").action = ;

newAdd.addEventListener('click', e => {
    popupForm.style.display= "block";
})

closeBtn.addEventListener('click', e => {
    popupForm.style.display = "none";
}
)

submitBtn.addEventListener('click', addBookToCollection)

  
function Book(title, author, pages, readStatus) {
    this.title = form.title.value;
    this.author = form.author.value;
    this.pages = form.pages.value;
    this.readStatus = form.read_status.checked;
}
  
function addBookToCollection() {
   
    e.preventDefault();
    console.log('working')
    // popupForm.style.display = "none";

    // let newEntry = new Book(title, author, pages, readStatus);
    // console.log(newEntry);
    // console.log(newEntry)
    // myCollection.push(newEntry);
    
  }
  
  function displayCollection () { 
    
    const tbody = document.querySelector("tbody")
    let html = ''
    for(let i = 0; i < myCollection.length; i++){
       html += `
       <tr>
       <td><h2>Title:</h2> ${myCollection[i].title} </td>
       <td> <h2>Author</h2> ${myCollection[i].author}</td>
       <td> <h2>Total Pages:</h2> ${myCollection[i].pages}</td>
       <button>Delete from Library</button>
       </tr>`
    }

  }
  
  window.addEventListener('load', (e) => {
      if(e.target == popupForm){
          popupForm.style.display ="none";
      }
    displayCollection();
  })
  
  
  
  // features to add
  // Login functionaLity?
  // add_book popup 
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