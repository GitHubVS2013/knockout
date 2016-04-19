define(["knockout", "text!./physiciansDetail.html"], function (ko, physiciansDetailTemplate) {
    function physiciansDetailViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        //self.guests = ko.observableArray([]);
        //self.guests.push({ guestName: "Sumit" });
        //self.guests.push({ guestName: "Optimus" });
        //self.guests.push({ guestName: "Bumblebee" });


        return self;
    }

    return { viewModel: physiciansDetailViewModel, template: physiciansDetailTemplate };
});