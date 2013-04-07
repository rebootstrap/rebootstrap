define(
    'rebootstrap/nav/Nav/NavRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {

                var rootAttrs = {};
                
                var classParts = ["nav"];
                
                if (input.type) {                    
                    classParts.push("nav-" + input.type);
                }
                
                if (input.stacked) {
                    classParts.push("nav-stacked");
                }
                
                rootAttrs["class"] = classParts.join(" ");

                templating.render('rebootstrap/nav/Nav', {
                    rootAttrs: rootAttrs,
                    invokeBody: function() {
                        if (input.invokeBody) {
                            input.invokeBody(input);
                        }
                    },
                    nav: input
                }, context);
            }
        };
        
        return ButtonTag;
    });