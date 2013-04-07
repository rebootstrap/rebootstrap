define(
    'rebootstrap/nav/NavItem/NavItemRenderer',
    function(require) {
        var templating = require('raptor/templating');

        return {
            render: function(input, context) {
                var liClassParts = [];
                
                var nav = input._nav,
                    activeItem,
                    type;
                    
                if (nav) {
                    activeItem = nav.activeItem;
                    type = nav.type
                }
                
                if (input.itemId && activeItem && activeItem === input.itemId) {
                    input.active = true;
                }
                
                if (input.active) {
                    liClassParts.push("active nav-item-active");
                }
                
                var isDropdownMenu = input.type === 'dropdown-menu';
                
                if (isDropdownMenu) {
                    liClassParts.push("dropdown");
                }

                input.attrs = {};
                
                if (liClassParts.length) {
                    input.attrs["class"] = liClassParts.join(" ");
                }
                
                input.anchorAttrs = {};

                if (input.dynamicAttributes) {

                    raptor.extend(input.anchorAttrs, input.dynamicAttributes);
                }
                
                
                
                if (isDropdownMenu) {
                    nav = input;
                    nav.activeItem = activeItem; //Pass along the active item to the sub-nav
                    
                    input.anchorAttrs["href"] = "";
                    input.anchorAttrs["data-toggle"] = "dropdown";
                    input.anchorAttrs["class"] = "dropdown-toggle";
                }
                else {
                    if (input.toggle) {
                        input.anchorAttrs["href"] = "#";
                        input.anchorAttrs["data-toggle"] = (type === 'pills' || type === 'pill' ? 'pill' : 'tab');
                    }
                    else {
                        input.anchorAttrs["href"] = input.href ? input.href : "#";
                    }    
                }

                templating.render('rebootstrap/nav/NavItem', {
                        nav: nav,
                        navItem: input,
                        isDropdownMenu: isDropdownMenu
                    },
                    context);
            }
        };
        
        return ButtonTag;
    });