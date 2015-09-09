var Vue = require('vue')
var yaml = require('js-yaml');

new Vue({
    el: '#app',
    data: {
        yamlObj: {
            a: "hoge",
            b: "fuga",
        },
    },
    filters: {
        toYaml: {
            read: function(obj){
                return yaml.safeDump(obj);
            },
            write: function(yamlStr){
                return yaml.load(yamlStr);
            }
        }
    }
});
