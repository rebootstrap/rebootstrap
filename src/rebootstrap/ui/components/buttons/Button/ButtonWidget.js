define.Class(
    'rebootstrap/ui/components/buttons/Button/ButtonWidget',
    function(require, exports, module) {
        var logger = module.logger();

        return {
            init: function(widgetConfig) {
                this.$().click(function() {
                    this.setColor('red');

                    this.publish('click', {
                        widget: this
                    });
                }.bind(this));
            },

            events: ['click'],

            renderer: 'rebootstrap/ui/components/buttons/Button/ButtonRenderer',

            setColor: function(color) {
                this.getEl().style.backgroundColor = color;
            }
        };
    });