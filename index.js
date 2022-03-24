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
  
  const table = document.getElementById("tbl-list");
  
  function Book(title, author, pages, read_status) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read_status = read_status;
    this.info = function(){
      return(`this.title by this.author, this.pages pages, this.read_status`)}
  }
  
  function addBookToCollection(e) {
    e.preventDefault();
      let inputTitle = document.getElementById("title").value; 
    alert(`${inputTitle}`)
      // let inputAuthor = document.getElementById("author").value;
      // let inputPages = Number(document.getElementById("pages").value);
      // let inputReadStatus = document.getElementById("read_status").value;
    
    // let newEntry = new Book(inputTitle, inputAuthor, inputPages, inputReadStatus);
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
      tbody.innerHTML = html;
  }
  
  window.addEventListener('load', (e) => {
    displayCollection();
  })
  
  
  
  // features to add
  // Login functionaLity?
  // add_book popup 
  // two css modes
  // book history 
  // rating?
  // recommendation of other books?