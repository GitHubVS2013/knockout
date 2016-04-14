// Application.js


function Application(json) {
    this.id = json.id;
    this.name = json.name;
    this.description = json.description;
    this.key = json.key;
    this.secret = json.secret;
    this.singleAuthorization = json.singleAuthorization;
    this.creationTime = json.creationTime;
    this.updateTime = json.updateTime;
    this.revision = json.revision;
}


Application.prototype.getId = function () {
    return id;
}

Application.prototype.getName = function () {
    return name;
}

Application.prototype.getDescription = function () {
    return description;
}

Application.prototype.getKey = function () {
    return key;
}

Application.prototype.getSecret = function () {
    return secret;
}

Application.prototype.getSingleAuthorization = function () {
    return singleAuthorization;
}

Application.prototype.getCreationTime = function () {
    return creationTime;
}

Application.prototype.getUpdateTime = function () {
    return updateTime;
}

Application.prototype.getRevision = function () {
    return revision;
}

Application.prototype.getById = function (id) {
    return;
}

Application.prototype.createNew = function () {
    return;
}

Application.prototype.update = function (id, revision, name, description) {
    return;
}

Application.prototype.delete = function (id) {
    return;
}

Application.prototype.getAll = function (offset, limit) {
    return;
}

Application.prototype.getByKey = function (id) {
    return;
}

Application.prototype.countAll = function () {
    return;
}

Application.prototype.toJSONString = function () {
    return "{" + "}";
}
