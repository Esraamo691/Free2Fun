import UI from "./UI.js";
import Details from "./details.js";
export default class Games {
  constructor() {
    this.ui = new UI();
    this.details = new Details();
    this.navLink = document.querySelectorAll(".nav-link");
    this.bodyGame = document.getElementById("bodyGame");
    this.home = document.getElementById("home");
    this.detailSec = document.getElementById("detail");
    this.close()
  }
  async getGames(category = "mmorpg") {
    this.ui.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8873a711bbmsh135bf4d86672695p1e1b94jsn735f546ef631",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const http = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/games?category=${category}`,
      options
    );
    if (http.ok) {
      const response = await http.json();
      console.log(response);
      this.ui.allData = response;
      this.ui.displayGames();
      this.clickedCard(response);
      this.ui.loading.classList.add("d-none");
    }
  }

  getNav() {
    this.navLink.forEach((item) => {
      item.addEventListener("click", (e) => {
        let clickedItem = e.target;
        let category = clickedItem.innerText;
        this.navLink.forEach((link) => link.classList.remove("active"));
        clickedItem.classList.add("active");
        this.getGames(category);
      });
    });
  }
  clickedCard(data) {
    const cards = document.querySelectorAll(".cardy");
    cards.forEach((card, i) => {
      card.addEventListener("click", () => {
        this.showDetails(data[i].id);
        const modal = new bootstrap.Modal(
          document.getElementById("fullscreenModal")
        );
        modal.show();
      });
    });
  }
  async showDetails(id) {
    this.home.classList.add("d-none");
    this.detailSec.classList.remove("d-none");
    this.details.getDetails(id);
  }
  close(){
    document.querySelector(".btn-close").addEventListener("click",()=>{
      this.home.classList.remove("d-none")
      this.detailSec.classList.add("d-none")
    })
  }
}
