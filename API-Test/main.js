const url = "https://www.thecocktaildb.com/api/json/v1/1/random.php";
const output = document.querySelector(".output");
let buttonAlc = document.querySelector(".buttonAlcohol");
let buttonNoAlc = document.querySelector(".buttonNonAlcohol");

const getData = async () => {
  let response = await axios.get(url);
  return response;
};

buttonAlc.onclick = () => {
  getData().then((response) => {
    bob(response);
    function bob(response) {
      if (response.data.drinks[0].strAlcoholic == "Alcoholic") {
        putTheGoodStuffOnThePage(response.data.drinks[0]);
      } else {
        getData().then((data) => {
          bob(data);
        });
      }
    }
  });
};

buttonNoAlc.onclick = () => {
  getData().then((response) => {
    console.log(response.data.drinks[0]);
    bob(response);
    function bob(response) {
      if (response.data.drinks[0].strAlcoholic == "Alcoholic") {
        getData().then((data) => {
          bob(data);
        });
      } else putTheGoodStuffOnThePage(response.data.drinks[0]);
    }
  });
};

function putTheGoodStuffOnThePage(data) {
  let temp = document.createElement("img");
  temp.src = data.strDrinkThumb;
  temp.width = "200";
  temp.height = "200";
  output.appendChild(temp);

  temp = document.createElement("p");
  temp.innerText = `Drink: ${data.strDrink}`;
  output.appendChild(temp);

  temp = document.createElement("p");
  temp.innerText = `Category: ${data.strCategory}`;
  output.appendChild(temp);

  temp = document.createElement("p");
  temp.innerText = `${data.strAlcoholic}`;
  output.appendChild(temp);

  temp = document.createElement("p");
  temp.innerText = " ";
  output.appendChild(temp);
}
