define(['jquery', 'knockout', './router', 'bootstrap', 'knockout-projections'], function ($, ko, router) {
    ko.components.register('greeter', { require: 'App/components/greeter/greeting' });
    ko.components.register('home', { require: 'App/pages/home/home' });
    ko.components.register('users', { require: 'App/pages/users/users' });
    ko.components.register('usersDetail', { require: 'App/pages/usersDetail/usersDetail' });
    ko.components.register('physicians', { require: 'App/pages/physicians/physicians' });
    ko.components.register('physiciansDetail', { require: 'App/pages/physiciansDetail/physiciansDetail' });
    ko.components.register('applications', { require: 'App/pages/applications/applications' });
    ko.components.register('applicationsDetail', { require: 'App/pages/applicationsDetail/applicationsDetail' });
    ko.components.register('admins', { require: 'App/pages/admins/admins' });
    ko.components.register('login', { require: 'App/pages/login/login' });
    ko.components.register('settings', {
        template: { require: 'text!App/pages/settings/settings.html' }
    });
    ko.applyBindings({ route: router.currentRoute });
});



