// usersClass.js

function User(json) {

    this.id = json.id;
    this.firstname = json.firstname;
    this.lastname = json.lastname;
    this.profileImage = json.profileImage;
}

//GETTERS
User.prototype.getId = function () {
    return this.id;
}

User.prototype.getFirstname = function () {
    return this.firstname;
}

User.prototype.getLastname = function () {
    return this.lastname;
}

User.prototype.getProfileImage = function () {
    return this.profileImage;
}

User.prototype.toJSONString = function () {
    return "{id:" + id + ", firstname:" + firstname + ", lastname" + lastname +
                    ", profileImage" + profileImage + "}";
}

//STATIC
User.prototype.getById = function (id) {
    return User(json.id);
}