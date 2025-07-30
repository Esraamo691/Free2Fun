export default class UI {
  constructor() {
    this.loading = document.getElementById("loading");
  }
  allData = [];
  allDetails = [];

  displayGames() {
    let cartona = "";
    for (let i = 0; i < this.allData.length; i++) {
      cartona += `
       <div class="col-lg-3 col-md-6 d-flex">
                    <div class="cardy w-100 d-flex flex-column h-100 rounded-3 ">
                    <div >
                    <div class="image p-3">
                      <img
                        src="${this.allData[i].thumbnail}"
                        alt=""
                        class="w-100 rounded-top-3"
                      />
                    </div>
                    <div class="text d-flex justify-content-between mt-3 px-3">
                      <p class="text-capitalize">${this.allData[i].title}</p>
                      <span class="rounded-3 text-bg-primary p-2">Free</span>
                    </div>
                    <p class="small text-center opacity-50 px-3 py-1">
                     ${this.allData[i].short_description}
                    </p>
                    </div>
                    <footer
                      class="card-footer mt-auto small hstack justify-content-between py-2 px-3 "
                    >
                      <span class="badge badge-color">${this.allData[i].genre}</span>
                      <span class="badge badge-color">${this.allData[i].platform}</span>
                    </footer>
                  </div>
                 
                </div>
      `;
    }
    document.getElementById("bodyGame").innerHTML = cartona;
  }

  displayDetails() {
    let data = this.allDetails;
    let box = `
    <div class="col-md-4">
                      <img
                        src="${this.allDetails.thumbnail}"
                        class="w-100"
                        alt="image details"
                      />
                    </div>
                    <div class="col-md-8">
                      <h3 class="text-white">Title:${this.allDetails.title}</h3>
                      <p class="text-white">
                        Category:
                        <span class="badge text-bg-info text-uppercase"> ${this.allDetails.genre}</span>
                      </p>
                      <p class="text-white">
                        Platform:
                        <span class="badge text-bg-info"> ${this.allDetails.platform}</span>
                      </p>
                      <p class="text-white">
                        Status: <span class="badge text-bg-info"> ${this.allDetails.status}</span>
                      </p>
                      <p class="small text-white">
                        ${this.allDetails.description}
                      </p>
                      <a
                        class="btn btn-outline-warning"
                        target="_blank"
                        href="${this.allDetails.freetogame_profile_url}"
                        >Show Game</a
                      >
                    </div>
    `;
    document.getElementById("detailsContent").innerHTML = box;
  }
}

