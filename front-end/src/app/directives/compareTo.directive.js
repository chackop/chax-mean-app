export function CompareToDirective($parse) {
  'ngInject'
  return {
      require: 'ngModel',
      link: function(scope, element. attrs, ngModel) {
        var mainModel = $parse(attrs.compareTo);
        var secondModel = $parse(attrs.ngModel);

        scope.$watch(attrs.ngModel, function (newvalue) {
          ngModel.$setValidity(attrs.name, newValue === mainModel(scope));
        });

        scope.$watch(attrs.ngModel, function (newvalue) {
          ngModel.$setValidity(attrs.name, newValue === secondModel(scope));
        });

      }
  }
}
