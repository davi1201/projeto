var app = angular.module('app', ['ngDialog']);
app.controller('appController', function carregarInfo($scope, $http, ngDialog) {
  (function loadUsers(){
  		$scope.resultado = [];
		$http({
		  method: 'GET',
		  url: 'https://jsonplaceholder.typicode.com/users'
		}).then(function successCallback(response) {
			$scope.resultado = response.data;			
	 	}, function errorCallback(response) {
	    	console.log("Erro");
	  });

	$scope.clickToOpen = function (id, template) {
		$scope.address = $scope.resultado[id -1].address;
		$scope.company = $scope.resultado[id -1].company;
		if (template == 'address') {
			ngDialog.open({ 
	        	template: 'address', 
	        	className: 'ngdialog-theme-plain',
	        	scope:  $scope
	        });	
		}else{
			ngDialog.open({ 
	        	template: 'company', 
	        	className: 'ngdialog-theme-plain',
	        	scope:  $scope
	        });	
		}        
    };

    $scope.openForm =  function(){
    	ngDialog.open({ 
	        	template: 'add', 
	        	className: 'ngdialog-theme-plain'	        	
	        });	
    };














})();




























});