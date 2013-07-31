define(
    'rebootstrap/ui/components/icons/Icon/IconRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                
                if (!input.name.startsWith("icon-")) {
                    input.name = "icon-" + input.name;
                }
                var rootAttrs = {};
                
                var classParts = [input.name];
                if (input.size) {
                    if (input.size.endsWith("px")) {
                        rootAttrs.style = "font-size: " + input.size + ";";
                    }
                    else {
                        classParts.push("icon-" + input.size);    
                    }
                    
                }
                
                
                templating.render('rebootstrap/ui/components/icons/Icon', {
                    className: classParts.join(" "),
                    rootAttrs: rootAttrs
                }, context);
            }
        };
    });