define(["knockout", "text!./physicians.html"], function (ko, physiciansTemplate) {
    function physiciansViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        //self.guests = ko.observableArray([]);
        //self.guests.push({ guestName: "Sumit" });
        //self.guests.push({ guestName: "Optimus" });
        //self.guests.push({ guestName: "Bumblebee" });

        self.allPhysicians = ko.observableArray();
        var selectedPhysician;

        self.physicians = ko.observableArray();

        $.ajax({
            url: "http://localhost:3000/physicians",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                //var resp = JSON.stringify(response.data)
                //self.physicians(response.data);
                var physicians = response.data;
                var physiciansList = [];

                for (var i in physicians) {
                    var physician = new Physician(physicians[i]);
                    physiciansList.push(physician);

                }

                self.allPhysicians(physiciansList);

            },
            error: function (xhr, status) {
                alert("error");
            }
        });



        return self;
    }
    return { viewModel: physiciansViewModel, template: physiciansTemplate };
});