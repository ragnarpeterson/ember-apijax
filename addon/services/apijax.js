import Em from 'ember';
import request from 'ic-ajax';
import detectFile from '../utils/detect_file';
import buildForm from '../utils/build_form';

var CONTENT_TYPE = 'application/json; charset=utf-8',
    DATA_TYPE = 'json',
    merge = Em.merge;

export default Em.Object.extend({
  POST: function(path, params) {
    return this.request('POST', path, this._buildOptions(params));
  },

  PUT: function(path, params) {
    return this.request('PUT', path, this._buildOptions(params));
  },

  DELETE: function(path, params) {
    return this.request('DELETE', path, { data: params });
  },

  GET: function(path, params) {
    return this.request('GET', path, { data: params });
  },

  request: function(method, path, opts) {
    return request(merge({
      type: method,
      url: this.urlFor(path),
      dataType: DATA_TYPE,
      contentType: CONTENT_TYPE
    }, opts));
  },

  urlFor: function(path) {
    return this.config.host + '/' + path;
  },

  _buildOptions: function(params) {
    var options = {};

    if (detectFile(params)) {
      options.data = buildForm(params);
      options.processData = false;
      options.contentType = false;
    } else if (params) {
      options.data = JSON.stringify(params);
    }

    return options;
  },

  _setConfig: function() {
    this.config = this.container.lookupFactory('config:environment')['ember-apijax'];
  }.on('init')
});
