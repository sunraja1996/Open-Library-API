fetch("https://openlibrary.org/api/books?bibkeys=ISBN:0451526538&format=json&jscmd=data")
.then(response => response.json())
.then(data => {
  let books = data;
    for (var book in data) {
      results += `
      <div class="book">
        <h2>${books[book].title}</h2>
        <p>Author: ${books[book].authors[0].name}</p>
        <p>Published: ${books[book].publish_date}</p>
        <p>Subjects: ${books[book].subjects.map(subject => subject.name).join(", ")}</p>
        <p>URL: <a href="${books[book].url}">${books[book].url}</a></p>
      </div>
    `;
  }
  document.getElementById("results").innerHTML = results;
    });


function search() {
    var input = document.getElementById("search-input").value;

    var filteredData = data.filter(function(book) {
        return book.subject.toLowerCase().includes(input.toLowerCase()) || book.url.toLowerCase().includes(input.toLowerCase());
    });


    document.getElementById("data-container").innerHTML = "";


    filteredData.forEach(function(book) {
      document.getElementById("search").addEventListener("input", function() {
        let searchTerm = this.value.toLowerCase();
        let bookDivs = document.querySelectorAll(".book");
        bookDivs.forEach(function(div) {
          let subjects = div.querySelector("p:nth-of-type(4)").innerText;
          let url = div.querySelector("p:nth-of-type(5)").innerText;
          if (subjects.includes(searchTerm) || url.includes(searchTerm)) {
            div.style.display = "block";
          } else {
            div.style.display = "none";
          }
        });
      });
    });
}


