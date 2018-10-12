
var app = angular.module("projectList", []);

app.controller("projectController", function($scope) {
	$scope.layout = 'list';

  $scope.projects = 
  [
    {
      name: 'Project 1',
      description: 'Project 1 description'
    },
    {
      name: 'Project 2',
      description: 'Project 2 description'
    },
    {
      name: 'Project 3',
      description: 'Project 3 description'
    }
  ];


  $scope.addProject = function () {
      $scope.errortext = "";

      if (!$scope.name || !$scope.description) {
        $scope.errortext = "The project's information can NOT null.";
        return;
      }
      if ($scope.projects.findIndex( project => project.name === $scope.name ) == -1) {
          $scope.projects.push({name: $scope.name, description: $scope.description});
      } else {
          $scope.errortext = "The project is already in your list.";
      }
  }
  $scope.removeProject = function (x) {
      $scope.projects.splice(x, 1);
    }
});




app.filter('searchFor', function(){
	return function(arr, searchString){

		if(!searchString){
			return arr;
		}

		var result = [];

		searchString = searchString.toLowerCase();

		angular.forEach(arr, function(project){

			if(project.name.toLowerCase().indexOf(searchString) !== -1){
				result.push(project);
			}

		});

		return result;
	};

});
