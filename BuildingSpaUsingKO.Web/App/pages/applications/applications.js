define(["knockout", "text!./applications.html"], function (ko, applicationsTemplate) {
    function applicationsViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        //self.guests = ko.observableArray([]);
        //self.guests.push({ guestName: "Sumit" });
        //self.guests.push({ guestName: "Optimus" });
        //self.guests.push({ guestName: "Bumblebee" });

        self.allApplications = ko.observableArray();

        var selectedApplication;

        //self.applications = ko.observableArray();

        $.ajax({
            url: "http://localhost:3000/applications",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                //var resp = JSON.stringify(response.data)
                //self.applications(response.data);

                var applications = response.data;
                var applicationsList = [];

                for (var i in applications) {
                    var application = new Application(applications[i]);
                    applicationsList.push(application);

                }

                self.allApplications(applicationsList);

                requirejs(["datatables"], function () {
                    $('#applications').dataTable({
                        applicationsList
                    });
                });
            },
            error: function (xhr, status) {
                alert("error");
            }
        });


        return self;
    }
    return { viewModel: applicationsViewModel, template: applicationsTemplate };
});