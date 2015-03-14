angular.module('converters', [])

.service('cmapExportConvert', function() {
  this.convert = function(rawText) {
    console.log(rawText);
  };
});
