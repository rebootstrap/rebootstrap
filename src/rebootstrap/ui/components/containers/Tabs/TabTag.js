define(
    'rebootstrap/ui/components/containers/Tabs/TabTag',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                var tabs = input._tabs;
                tabs.addTab(input);
            }
        };
        
        return ButtonTag;
    });