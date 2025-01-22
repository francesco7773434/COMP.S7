fetch("https://striveschool-api.herokuapp.com/books")
  .then((responseObj) => {
    console.log(responseObj);

    if (responseObj.ok) {
      return responseObj.json();
    }
  })
  .then((bookObj) => {
    console.log(bookObj);
    console.log(bookObj.data);

    const row = document.getElementById("char-list");
    bookObj.forEach((book) => {
      const col = document.createElement("div");
      col.classList.add("col");
      col.innerHTML = ` <div class="card">
                            <img src=${book.img}
                                class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title">${book.title}</h5>
                                <p class="card-text">${book.price}</p>
                                    <a href="#" class="btn btn-primary spink">Scarta</a>

                            </div>
                        </div>`;
      row.appendChild(col);
    });
  })
  .catch((err) => console.log(err));
