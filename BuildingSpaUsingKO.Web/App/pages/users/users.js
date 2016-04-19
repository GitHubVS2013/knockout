define(["knockout", "text!./users.html"], function (ko, usersTemplate) {
    function usersViewModel(params) {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        self.allUsers = ko.observableArray();

        $.ajax({
            url: "http://localhost:3000/users?limit=200",
            type: "GET",
            crossDomain: true,
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            success: function (response) {
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

                requirejs(["datatables"], function () {
                    $('#users').dataTable({
                        usersList
                    });
                });
            },
            error: function (xhr, status) {
                alert("error");
            }
        });
       
        /*self.selectedUser = function (data) {
        }*/
    }

    return { viewModel: usersViewModel, template: usersTemplate };
});