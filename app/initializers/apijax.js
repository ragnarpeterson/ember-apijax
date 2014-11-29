export default {
  name: 'apijax',

  initialize: function(container, app) {
    container.typeInjection('route', 'apijax', 'service:apijax');
    container.typeInjection('controller', 'apijax', 'service:apijax');
    container.typeInjection('component', 'apijax', 'service:apijax');
  }
};
