//UserDetails.js

function UserDetails(json) {
    //UserDetails.prototype.constructor = UserDetails;
    User.call(this, json);

    this.email = json.email;
    this.birthday = json.birthday;
    this.phonenumber = json.phonenumber;
    this.gender = json.gender;
    this.measurementBullets = json.measurementBullets;
    this.activation = json.activation;
    this.country = json.country;
    this.language = json.language;
}

UserDetails.prototype = Object.create(User.prototype);


UserDetails.prototype.getEmail = function () {
    return this.email;
}

UserDetails.prototype.getBirthday = function () {
    return this.birthday;
}

UserDetails.prototype.getGender = function () {
    return this.gender;
}

UserDetails.prototype.getMeasurementBullets = function () {
    return this.measurementBullets;
}

UserDetails.prototype.getActivation = function () {
    return this.activation;
}

UserDetails.prototype.getPhoneNumber = function () {
    return this.phoneNumber;
}

UserDetails.prototype.getCountry = function () {
    return this.country;
}

UserDetails.prototype.getLanguage = function () {
    return this.language;
}
