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

let ob = {
  id: 206,
  title: "Aura Kingdom",
  thumbnail: "https://www.freetogame.com/g/206/thumbnail.jpg",
  status: "Live",
  short_description:
    "Aura Kingdom is a 3D free-to-play Anime MMORPG from the same great studio that brought us Eden Eterna.",
  description:
    "Aura Kingdom ­ from the same great studio that brought us Eden Eternal and Grand Fantasia ­ is a free­to­play Anime MMORPG. The game offers stunning graphics and the ability to create a character that is one of a kind. You can choose from one of eleven different classes (with subclasses becoming available at level 40) and then add skills to make your character unique to your game­playing style. It’s easy to see why people are in love with the world of Azuria! On your adventure, you’ll walk alongside your Eidolon ­ a loyal interactive companion who can grant you strength in battle and unleash some pretty massive combos! In addition to being a great advantage in battle, your Eidolon can also remember your actions, and tell you what’s on their mind.\r\n\r\nAction in the world of Aura Kingdom is fast­paced and dynamic. You have to make sure you’re on top of your game, as thinking and acting fast are key to a successful outcome in battles. Don’t fret though, your character is fully customizable, so you can overcome every challenge you face. Simply improve the skills that fit your style of gameplay and then quickly change your skills during battle, so you’ll be ready no matter what your opponent is throwing your way.\r\n\r\nIf you like some good scenery with all of that action, Aura Kingdom has you covered on that front, as well. Featuring six great environments, all beautifully designed, you’ll travel the vast land that is Azuria and visit the grand city of Navea, a sacred refuge and beacon of hope for all, and the Helonia Coast, known for being the heart of Terra’s black market ­ if you ever need anything, you can find it here! You’ll also visit Candeo Marsh and Oblitus Wood, among other places, and explore mysterious and hidden dungeons to stop the evil that lurks in the dark. You can become a hero, known throughout the land! What are you waiting for?",
  game_url: "https://www.freetogame.com/open/aura-kingdom",
  genre: "MMORPG",
  platform: "Windows",
  publisher: "X-Legend",
  developer: "X-Legend",
  release_date: "2013-12-23",
  freetogame_profile_url: "https://www.freetogame.com/aura-kingdom",
  minimum_system_requirements: {
    os: "Windows XP, Windows Vista, Windows 7 (32bit/64bit), Windows 8 ",
    processor: "Intel Pentium4 2.8 GHz or better; AMD K8 2600 or better ",
    memory: " 4 GB RAM ",
    graphics: "nVidia GeForce 6600 or better; ATI Redeon X1600 or better",
    storage: " 6 GB available space ",
  },
  screenshots: [
    {
      id: 525,
      image: "https://www.freetogame.com/g/206/Aura-Kingdom-1.jpg",
    },
    {
      id: 526,
      image: "https://www.freetogame.com/g/206/Aura-Kingdom-2.jpg",
    },
    {
      id: 527,
      image: "https://www.freetogame.com/g/206/Aura-Kingdom-3.jpg",
    },
  ],
};
