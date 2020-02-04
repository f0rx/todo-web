const MyPlugin = {
  install: (Vue, options) => {
    Vue.directive("focus", {
      inserted: function(el) {
        // Focus the element
        el.focus();
      }
    });

    // Vue.prototype.$Get = function() {
    //   console.log("This stuff works like ...");
    // };
  }
};

export default MyPlugin;
