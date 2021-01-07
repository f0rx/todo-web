import mixin from "./main-mixin";
const MyPlugin = {
    install: (Vue, options) => {
        Vue.directive("focus", {
            inserted(el) {
                // Focus the element
                el.focus();
            }
        });

        Vue.mixin(mixin);

        /** ********* GLOBAL FILTERS *****************
         * ******************************************
         * Capitalize a Text or Sentence
         * @return Caplitalized Text
         ********************************************/
        Vue.filter("capitalizeText", value => {
            if (!value) return;
            value = value.toString();
            return value.charAt(0).toUpperCase() + value.slice(1);
        });

        // Vue.prototype.$Get = function() {
        //   console.log("This stuff works like ...");
        // };
    }
};

export default MyPlugin;