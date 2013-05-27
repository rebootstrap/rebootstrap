define(
    'rebootstrap/ui/components/containers/Tabs/TabsRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {

                var tabs = input.tabs,  
                    activeFound = false,
                    id = input.id || ("tabs" + context.uniqueId());
                
                if (!tabs) {
                    tabs = [];
                    // Discover nested tabs if not provided as part of input
                    // NOTE: The first argument becomes the value of the scoped "_tabs"
                    //       variable. See Tabs.rtld for details.
                    input.invokeBody({
                        addTab: function(tab) {
                            tabs.push(tab);
                        }
                    });
                }

                tabs.forEach(function(tab, i) {
                    if (tab.active) {
                        activeFound = true;
                    }
                    
                    if (!tab.id) {
                        tab.id = id + "-tab" + i;
                    }

                    tab.href = '#' + tab.id;
                    if (!tab.label) {
                        tab.label = '';
                    }

                    tab.toggle = "tab";

                    // Override the widget type for each tab
                    tab.widget = 'rebootstrap/ui/components/containers/Tabs/TabWidget';

                });
    
                
                if (!activeFound && tabs.length) {
                    tabs[0].active = true;
                }
                
                
                templating.render('rebootstrap/ui/components/containers/Tabs', {
                    id: id,
                    tabs: tabs
                }, context);
            }
        };
        
        return ButtonTag;
    });