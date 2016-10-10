'use strict';

var Immutable = require('immutable');

var isMap = function(obj){ return Immutable.Iterable.isKeyed(obj); };
var isIndexed = function(obj) { return Immutable.Iterable.isIndexed(obj); };

function op(operation, path, value, oldValue) {
  if (operation === 'remove') {
    return { op: operation, path: path };
  } else if (operation === 'replace') {
    return { op: operation, path: path, value: value, oldValue: oldValue};
  } else {
    return { op: operation, path: path, value: value};
  }
};

module.exports = {
  isMap: isMap,
  isIndexed: isIndexed,
  op: op
};
