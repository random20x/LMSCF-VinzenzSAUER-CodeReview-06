var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var locations = /** @class */ (function () {
    function locations(name, address, zip, city, img) {
        this.name = "";
        this.address = "";
        this.zip = null;
        this.city = "";
        this.img = "";
        this.name = name;
        this.address = address;
        this.zip = zip;
        this.city = city;
        this.img = img;
    }
    locations.prototype.display = function () {
        return "<div class=\"col-sm-12 col-md-6 col-lg-6card\">\n                <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">" + this.name + "</h5>\n                    <p class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</p>\n            </div>\n            <div class=\"card-footer\">\n                <small class=\"text-muted\">Created: 23.02.2020 01:01</small>\n            </div>\n    </div>";
    };
    return locations;
}());
var sightChurch = new locations("St. Charles Church", "Karlsplatz 1", 1010, "Vienna", "img/Charles.jpg");
var sightCastle = new locations("Schoenbrunn Park, Vienna", "Maxingstraße 13B", 1130, "Vienna", "img/Schoenbrunn.jpg");
document.getElementById("places").innerHTML = (sightChurch.display() + sightCastle.display());
var restaurant = /** @class */ (function (_super) {
    __extends(restaurant, _super);
    function restaurant(name, address, zip, city, img, number, style, webAddress) {
        var _this = _super.call(this, name, address, zip, city, img) || this;
        _this.number = "";
        _this.style = "";
        _this.webAddress = "";
        _this.number = number;
        _this.style = style;
        _this.webAddress = webAddress;
        return _this;
    }
    restaurant.prototype.displayRestaurant = function () {
        return "<div class=\"card\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + ", " + this.number + "</p>\n                        <a href=\"" + this.webAddress + "\"target=\"_blank\">" + this.webAddress + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n      \t\t\t\t\t<small class=\"text-muted\">Created: 23.02.2020 01:01</small>\n    \t\t\t\t</div>\n                </div>";
    };
    return restaurant;
}(locations));
var restaurant1 = new restaurant("ON Restaurant", "Vienna", 1050, "Wehrgasse 8", "img/ON.jpg", "+43 1 585 49 00 ", "chinese", "http://www.restaurant-on.at");
var restaurant2 = new restaurant("BioFrische", "Vienna", 1150, "Stutterheimstraße 6", "img/Bio.jpg", "+43 1 952 92 15", "indian", "http://biofrische.wien");
document.getElementById("restaurants").innerHTML = (restaurant1.displayRestaurant() + restaurant2.displayRestaurant());
var events = /** @class */ (function (_super) {
    __extends(events, _super);
    function events(name, address, zip, city, img, eventDate, eventTime, ticketPrice, webAddress) {
        var _this = _super.call(this, name, address, zip, city, img) || this;
        _this.eventDate = "";
        _this.eventTime = "";
        _this.ticketPrice = "";
        _this.webAddress = "";
        _this.eventDate = eventDate;
        _this.eventTime = eventTime;
        _this.ticketPrice = ticketPrice;
        _this.webAddress = webAddress;
        return _this;
    }
    events.prototype.displayEvents = function () {
        return "<div class=\"card\">\n                    <img src=\"" + this.img + "\" class=\"card-img-top\" alt=\"" + this.name + "\">\n                    <div class=\"card-body\">\n                        <h5 class=\"card-title\">" + this.name + "</h5>\n                        <p " + this.eventDate + ". " + this.eventTime + "</p>\n                        <p " + this.ticketPrice + "</p>\n                        <p class=\"card-text\">" + this.address + ", " + this.zip + " " + this.city + "</p>\n                        <a href=\"" + this.webAddress + "\"target=\"_blank\">" + this.webAddress + "</a>\n                    </div>\n                    <div class=\"card-footer\">\n      \t\t\t\t\t<small class=\"text-muted\">Created: 23.02.2020 01:01</small>\n    \t\t\t\t</div>\n                </div>";
    };
    return events;
}(locations));
var event1 = new events("Cats- the musical", "Wien", 1010, "Ernst-Happel Stadion, Meiereistraße 7, 1020 Wien", "img/cats.jpg", "Fr, 15.12.2020", "20:00", "€ 120,00", "http://catsmusical.at");
var event2 = new events("Guns ‘n Roses", "Wien", 1020, "Ronacher- Seilerstätte 9, 1010 Wien", "img/Guns.jpg", "Sat, 09.06.2020", "19:30", "€ 95,50", "http://gunsandroses.com");
document.getElementById("events").innerHTML = (event1.displayEvents() + event2.displayEvents());
