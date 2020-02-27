class locations {
    name = "";
    address = "";
    zip = null;
    city = "";
    img = "";

    constructor (name, address, zip, city, img){
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.city = city;
        this.img = img;
    }


display(){
    return `<div class="col-sm-12 col-md-6 col-lg-6card">
                <img src="${this.img}" class="card-img-top" alt="${this.name}">
                <div class="card-body">
                    <h5 class="card-title">${this.name}</h5>
                    <p class="card-text">${this.address}, ${this.zip} ${this.city}</p>
            </div>
            <div class="card-footer">
                <small class="text-muted">Created: 23.02.2020 01:01</small>
            </div>
    </div>`             
    }
}

let sightChurch = new locations("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/Charles.jpg")
let sightCastle = new locations("Schoenbrunn Park, Vienna", "Maxingstraße 13B", 1130, "Vienna", "img/Schoenbrunn.jpg")

document.getElementById("places").innerHTML = (sightChurch.display() + sightCastle.display());

class restaurant extends locations {
    number = "";
    style = "";
    webAddress = "";

    constructor (name, address, zip, city, img, number, style, webAddress){
        super(name, address, zip, city, img);
        this.number = number;
        this.style = style;
        this.webAddress = webAddress;
    }   

    displayRestaurant() {
        return  `<div class="card">
                    <img src="${this.img}" class="card-img-top" alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p class="card-text">${this.address}, ${this.zip} ${this.city}, ${this.number}</p>
                        <a href="${this.webAddress}"target="_blank">${this.webAddress}</a>
                    </div>
                    <div class="card-footer">
      					<small class="text-muted">Created: 23.02.2020 01:01</small>
    				</div>
                </div>`
    }
}

let restaurant1 = new restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img/ON.jpg" , "+43 1 585 49 00 ", "chinese", "http://www.restaurant-on.at")
let restaurant2 = new restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/Bio.jpg" , "+43 1 952 92 15", "indian", "http://biofrische.wien")

document.getElementById("restaurants").innerHTML = (restaurant1.displayRestaurant() + restaurant2.displayRestaurant());

class events extends locations{
	eventDate = "";
	eventTime = "";
	ticketPrice = "";
	webAddress = "";

	constructor(name, address, zip, city, img, eventDate, eventTime, ticketPrice, webAddress){
		super(name, address, zip, city, img,);
		this.eventDate = eventDate;
		this.eventTime = eventTime;
		this.ticketPrice = ticketPrice;
		this.webAddress = webAddress;

}

	displayEvents() {
		return  `<div class="card">
                    <img src="${this.img}" class="card-img-top" alt="${this.name}">
                    <div class="card-body">
                        <h5 class="card-title">${this.name}</h5>
                        <p ${this.eventDate}. ${this.eventTime}</p>
                        <p ${this.ticketPrice}</p>
                        <p class="card-text">${this.address}, ${this.zip} ${this.city}</p>
                        <a href="${this.webAddress}"target="_blank">${this.webAddress}</a>
                    </div>
                    <div class="card-footer">
      					<small class="text-muted">Created: 23.02.2020 01:01</small>
    				</div>
                </div>`   
	}
}

let event1 = new events("Cats- the musical", "Wien", 1010, "Ernst-Happel Stadion, Meiereistraße 7, 1020 Wien", "img/cats.jpg", "Fr, 15.12.2020", "20:00", "€ 120,00", "http://catsmusical.at");
let event2 = new events("Guns ‘n Roses", "Wien", 1020, "Ronacher- Seilerstätte 9, 1010 Wien", "img/Guns.jpg", "Sat, 09.06.2020", "19:30", "€ 95,50", "http://gunsandroses.com");


document.getElementById("events").innerHTML = (event1.displayEvents() + event2.displayEvents());