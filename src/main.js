let callback;

export default {
  name: 'maxlength',
  config: {},
  install (Vue) {
      Vue.directive('maxlength', {
          bind (el, binding) {
            const maxLength = binding.expression;
            callback = (e) => {
              if (e.target.value.length > maxLength) {
                e.target.value = e.target.value.substr(0, maxLength);

                const event = document.createEvent('Event');
                event.initEvent('input', true, true);
                e.target.dispatchEvent(event);
              }
            };
            el.addEventListener('input', callback);
          },
          unbind (el) {
              el.removeEventListener('input', callback);
          }
      });
  }
};