define(
    'rebootstrap/ui/components/nav/Navbar/NavbarRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                
                templating.render('rebootstrap/ui/components/nav/Navbar', {
                    brand: input.brand,
                    invokeBody: input.invokeBody,
                    type: input.type,
                    inverse: input.inverse === true
                }, context);
            }
        };
    });