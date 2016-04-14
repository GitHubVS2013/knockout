define(["knockout", "text!./login.html"], function (ko, loginTemplate) {
    function loginViewModel() {
        var self = this;
        self.title = ko.observable('Qompium dashboard');
        self.email = ko.observable("");
        self.password = ko.observable("");
        self.guests = ko.observableArray([]);
        self.guests.push({ guestName: "Sumit" });
        self.guests.push({ guestName: "Optimus" });
        self.guests.push({ guestName: "Bumblebee" });


        self.login = function () {
            $.ajax({
                url: "http://localhost:3000/authorizations",
                type: "POST",
                crossDomain: true,
                data: { email: self.email(), password: self.password() },
                dataType: "json",
                xhrFields: {
                    withCredentials: true },
                success: function (response) {
                    //var resp = JSON.stringify(response)
                    //alert(resp);
                    window.location.href = '/users';
                },
                error: function (xhr, status) {
                    alert("this email and password combination is incorrect");
                }
            });
        }

        return self;
    }

    return { viewModel: loginViewModel, template: loginTemplate };
});