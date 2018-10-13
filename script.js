
var app = angular.module("projectList", []);

app.controller("projectController", function($scope) {
	$scope.layout = 'list';

  $scope.projects = 
  [
    {
        "name": "IBM",
        "description": "IBM is an American multinational technology and consulting corporation that manufactures and markets computer hardware and software, and offers infrastructure, hosting and consulting services in areas ranging from mainframe computers to nanotechnology."
    },
    {
        "name": "Kids at Hope",
        "description": "The project was to create an interactive and content rich website that supports students in their efforts to visualize their future by using the neuroscience concept of Time Traveler.  The Time Traveler guides students in seeing and planning for the future. "
    },
    {
        "name": "Levementum, LLC",
        "description": "The student team worked on a proof of concept to develop a cloud based Business Intelligence Solutions for the Health Care industry tied to CRM.  Editor's note: The result of the MIS student project work is allowing Levementum to enter into a new service practice worth millions in future revenue."
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
