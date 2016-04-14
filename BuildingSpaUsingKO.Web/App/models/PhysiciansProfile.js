// physicianProfile.js

function PhysicianProfile(json) {

    Profile.call(this, json);

    this.type = json.physician.type;
    this.vatin = json.physician.vatin;
    this.legalBusinessName = json.physician.legal_business_name;
    this.address = json.physician.address;
    this.creationTime = json.physician.creation_timestamp;
    this.updateTime = json.physician.update_timestamp;
    this.revision = json.physician.revision;

}

PhysicianProfile.prototype = Object.create(Profile.prototype);


PhysicianProfile.prototype.getType = function () {
    return this.type;
}

PhysicianProfile.prototype.getVatin = function () {
    return this.vatin;
}

PhysicianProfile.prototype.getLegalBusinessName = function () {
    return this.legalBusinessName;
}

PhysicianProfile.prototype.getAddress = function () {
    return this.address;
}

PhysicianProfile.prototype.getPhysicianCreationTimestamp = function () {
    return this.creationTime;
}

PhysicianProfile.prototype.getPhysicianUpdateTimestamp = function () {
    return this.updateTime;
}

PhysicianProfile.prototype.getPhysicianRevision = function () {
    return this.revision;
}

PhysicianProfile.prototype.getById = function (id) {
    return;
}

PhysicianProfile.prototype.createNew = function (id, vatin, legalBusinessName, address, creationTime, updateTime, revision) {
    return;
}

PhysicianProfile.prototype.update = function (id, revision, type, vatin) {
    return;
}

PhysicianProfile.prototype.delete = function (id) {
    return;
}

PhysicianProfile.prototype.getAll = function (offset, limit) {
    return;
}

PhysicianProfile.prototype.isPhysician = function (id) {
    return;
}

PhysicianProfile.prototype.toJSONString = function () {
    return "{" + "}";
}
