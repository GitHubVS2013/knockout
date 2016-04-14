define(["knockout", "text!./admins.html"], function (ko, adminsTemplate) {
    function adminsViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Sumit" });
        self.guests.push({ guestName: "Optimus" });
        self.guests.push({ guestName: "Bumblebee" });
        return self;
    }
    return { viewModel: adminsViewModel, template: adminsTemplate };
});