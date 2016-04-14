// physicianClass.js


function Physician(json) {
    User.call(this, json);

    this.type = json.type;
    this.creationTime = json.creationTime;
    this.updateTime = json.updateTime;
    this.revision = json.revision;
}

Physician.prototype = Object.create(User.prototype);

Physician.prototype.getType = function () {
    return type;
}

Physician.prototype.getCreationTime = function () {
    return creationTime;
}

Physician.prototype.getUpdateTime = function () {
    return updateTime;
}

Physician.prototype.getRevision = function () {
    return revision;
}

Physician.prototype.toJSONString = function () {
    return "{physicianType:" + physicianType + ", creationTime:" + creationTime +
                 ", updateTime:" + updateTime + ", revision:" + revision + "}";
}