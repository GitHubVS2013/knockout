define(["knockout", "text!./users.html"], function (ko, usersTemplate) {
    function usersViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        //self.guests = ko.observableArray([]);
        //self.guests.push({ guestName: "Sumit" });
        //self.guests.push({ guestName: "Optimus" });
        //self.guests.push({ guestName: "Bumblebee" });

        self.allUsers = ko.observableArray();
        var selectedUser;

        //self.users = ko.observableArray();

        $.ajax({
            url: "http://localhost:3000/users?limit=150",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
                //var resp = JSON.stringify(response.data)
                //self.users(response.data);
                var users = response.data;
                var usersList = [];

                for (var i in users) {
                    if (users[i].physician) {
                        var profile = new PhysicianProfile(users[i]);
                        usersList.push(profile);
                    }
                    else {
                        var profile = new Profile(users[i]);
                        usersList.push(profile);
                    }
                }

                self.allUsers(usersList);
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
        return self;
    }

    return { viewModel: usersViewModel, template: usersTemplate };
});