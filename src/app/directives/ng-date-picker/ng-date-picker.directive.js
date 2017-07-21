export function NgDatePicker(){
	'ngInject';

	let directive = {
		restrict: 'E',
		scope: {
			type: '@',
			value: '=',
			format: '@',
			placeholder: '@',
			options: '=',
			clearable: '=',
			readonly: '='
		},
		controller: NgDatePickerController,
		controllerAs: 'vmDp',
		templateUrl: 'app/directives/ng-date-picker/ng-date-picker.html',
		link: (scope, elem, attrs, ctrl) => {
			ctrl.init();
		}
	};

	return directive;
}

class NgDatePickerController {
	constructor($element, $scope, $filter, moment){
		'ngInject';
		this.Element = $element;
		this.Scope = $scope;
		this.Filter = $filter;
		this.Moment = moment;
	}

	init(){
		this.setBaseConf();
	}

	setBaseConf(){
		const Scope = this.Scope;
		console.log(Scope);
		this.format = Scope.format;
		this.value = Scope.value;
		this.options = Scope.options;
		this.placeholder = Scope.placeholder;
		this.formatVal = '';
	}
}