import UI from "./UI.js";
export default class Details {
  constructor() {
    this.ui = new UI();
    this.detail = document.getElementById("detail");
    this.detailsContent = document.getElementById("detailsContent");
  }
   async getDetails(id) {
    this.ui.loading.classList.remove("d-none");
    const options = {
      method: "GET",
      headers: {
        "x-rapidapi-key": "8873a711bbmsh135bf4d86672695p1e1b94jsn735f546ef631",
        "x-rapidapi-host": "free-to-play-games-database.p.rapidapi.com",
      },
    };
    const http = await fetch(
      `https://free-to-play-games-database.p.rapidapi.com/api/game?id=${id}`,
      options
    );
    if (http.ok) {
      const response = await http.json();
      console.log(response);
      this.ui.allDetails = response;
      this.ui.displayDetails();
      this.ui.loading.classList.add("d-none");
    }
  }
}
