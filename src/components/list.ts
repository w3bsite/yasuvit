let url = "https://sabz.herokuapp.com/https://fitech.herokuapp.com/";
const row = document.querySelector<HTMLDivElement>("#row")!;
row.innerHTML = `<h2>loading</h2>`;
let i = 4;
function load(x) {
    row.innerHTML = ``;
    x ? x : (x = 0);
    i = i + x;
    fetch(url + "/posts")
        .then((response) => response.json())
        .then((res) => {
            res.slice(0, i).forEach((element, i) => {
                row.innerHTML += card(element.title, element.body);
            });
        });
}

let listObject = {};
// Load List Cards

var card = (title: string, body: string) => {
    return `<div class="col-4 mb-5 p-3 card"  >
              <div class="bg-white rounded" style='min-height:300px !important'>
                <img class="card-img-top" src="https://source.unsplash.com/random/300x250/" alt="Card image cap">
                <div class="card-body">
                  <h5 class="card-title">${title.substring(0, 20)}</h5>
                  <h6>card subtitle</h6>
                  <p class="card-text">
                  ${body.substring(0, 70)}
                  </p>
                  <a href="#" class="btn btnCard">Go somewhere</a>
                </div>
              </div>
            </div>`;
};

// function buttom() {
//     setInterval(() => {
//         window.scroll({
//             top: 3000,
//             behavior: "smooth",
//         });
//     }, 2000);
// }
