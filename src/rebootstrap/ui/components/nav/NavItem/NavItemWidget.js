define.Class(
    'rebootstrap/ui/components/nav/NavItem/NavItemWidget',
    function(require, exports, module) {
        var logger = module.logger();

        return {
            init: function(widgetConfig) {
                var _this = this; 
                this.$().click(function() {
                    _this.publish('click', {
                        el: this,
                        nav: _this
                    });
                });
            },

            events: ['click'],

            renderer: 'rebootstrap/ui/components/nav/NavItem/NavItemRenderer'
        };
    });