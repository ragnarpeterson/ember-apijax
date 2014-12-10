import Em from 'ember';

export default function buildForm(params) {
  return params && Em.keys(params).reduce(function(formData, key) {
    var value = params[key];

    if (value instanceof File) {
      formData.append(key, value, value.name);
    } else {
      formData.append(key, value);
    }

    return formData;
  }, new window.FormData());
}
