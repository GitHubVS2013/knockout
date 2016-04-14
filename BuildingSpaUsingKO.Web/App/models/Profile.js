// profile.js

function Profile(json) {

    UserDetails.call(this, json);

    this.creationTime = json.creation_timestamp;
    this.updateTime = json.update_timestamp;
    this.revision = json.revision;
}


Profile.prototype = Object.create(UserDetails.prototype);


Profile.prototype.getCreationTime = function () {
    return this.creationTime;
}

Profile.prototype.getUpdateTime = function () {
    return this.updateTime;
}

Profile.prototype.getRevision = function () {
    return this.revision;
}

Profile.prototype.getById = function (id) {
    return;
}

Profile.prototype.CreateNew = function (firstname, lastname, email) {
    return;
}

Profile.prototype.hasAcces = function (userId, profileId) {
    return;
}

Profile.prototype.update = function (id, revision, firstname) {
    return;
}

Profile.prototype.delete = function (id) {
    return;
}

Profile.prototype.changePassword = function (id, oldPassword, newPassword) {
    return;
}

Profile.prototype.changePassword = function (id, newPassword) {
    return;
}

Profile.prototype.isAdmin = function () {
    return;
}

Profile.prototype.getAll = function (offset, limit) {
    this.offset = offset;
    this.limit = limit;
}

Profile.prototype.getByEmail = function (email) {
    return;
}

Profile.prototype.countAll = function () {
    return;
}

Profile.prototype.toJSONString = function () {
    return "{" + "}";
}
