define(
    'rebootstrap/ui/components/nav/Collapse/CollapseRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                templating.render('rebootstrap/ui/components/nav/Collapse', {
                    invokeBody: input.invokeBody
                }, context);
            }
        };
    });