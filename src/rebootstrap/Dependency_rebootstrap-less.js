/*
 * Copyright 2011 eBay Software Foundation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *    http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

var path = require('path');

define.Class(
    "rebootstrap/Dependency_rebootstrap-less",
    "raptor/packaging/Dependency_less",
    ['raptor'],
    function(raptor, require, exports, module) {
        "use strict";

        var mixinsFixRegExp = /(\.input-block-level|\.clearfix|\.hide-text)\s*\{/g;
        
        var cache = {};
        var mixinsResource = null;

        var resources = require('raptor/resources');
        var File = require('raptor/files/File');
        
        var Dependency = function() {
            Dependency.superclass.constructor.apply(this, arguments);
        };
        
        function fixMixins(source) {
            return source.replace(mixinsFixRegExp, function(match, selector) {
                return selector + '() {';
            });
        };

        Dependency.prototype = {
            _addLessImports: function(imports, context) {
                var variablesPath;
                var variablesResource;

                if (context.renderContext) {
                    variablesPath = context.renderContext.getAttributes()['rebootstrap.variables.path'];
                }

                variablesPath = variablesPath || context.config.getParam('rebootstrap.variables.path');
                

                if (variablesPath) {
                    variablesResource = resources.findResource(variablesPath)
                }
                else {
                    variablesResource = resources.createFileResource(new File(__dirname, '../../node_modules/rebootstrap-bootstrap/less/variables.less'));
                }

                mixinsResource = mixinsResource || resources.createFileResource(new File(__dirname, '../../node_modules/rebootstrap-bootstrap/less/mixins.less'));
                

                function add(resource, preprocess) {
                    var source = cache[resource.getURL()];
                    if (!source) {
                        source = resource.readAsString();
                        if (preprocess) {
                            source = preprocess(source);
                        }
                    }
                    imports.add(resource, source);
                }

                add(variablesResource);
                add(mixinsResource, fixMixins);

                Dependency.superclass._addLessImports.apply(this, arguments);
            }
        };
        
        return Dependency;
    });
