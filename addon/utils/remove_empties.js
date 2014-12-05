import Em from 'ember';

export default function removeEmpties(object) {
  return Em.keys(object).reduce(function(acc, key) {
    if (!Em.isEmpty(object[key])) { acc[key] = object[key]; }
    return acc;
  }, {});
}
