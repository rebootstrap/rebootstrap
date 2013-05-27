define(
    'rebootstrap/ui/components/nav/Divider/DividerRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                
                var type = input.type,
                    className;
                if (type) {
                    if (type === 'vertical') {
                        className = 'divider-vertical';
                    }
                    else {
                        className = 'divider';
                    }
                }
                else {
                    var nav = input._nav;
                    
                    if (nav && nav.type === 'dropdown-menu') {
                        className = "divider"
                    }
                    else {
                        className = "divider-vertical"
                    }
                }
            
                templating.render('rebootstrap/ui/components/nav/Divider', {
                    className: className
                }, context);
            }
        };
    });