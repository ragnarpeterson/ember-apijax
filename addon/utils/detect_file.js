import Em from 'ember';

export default function detectFile(params) {
  return params && Em.keys(params).reduce(function(hasFile, key) {
    return hasFile || params[key] instanceof File;
  }, false);
}
