
app.controller('userController', function($scope,$rootScope,$http,$location,$routeParams, $filter) {
  	$rootScope.title="user";
	
	return{
		submit:$scope.submit=function(){

			if(!!$scope.user.firstname && !!$scope.user.lastname  && !!$scope.user.gender  && !!$scope.user.email  && !!$scope.user.status ){
				console.log("data get sucessfully...");
				$http({
					method : "POST",
					url : "/user/add",
					data:$scope.user,
					headers : {'Content-Type': 'application/json'}
				}).then(function (response) {
						console.log('Data save sucessfully ...');
						//$scope.user = response;
						//$scope.message = "Data save sucessfully...";
						$location.path('/user');

				},function(response) {
						console.log('Data not save ...');
						//Second function handles error
						$scope.message = "Something went wrong";
				});

			}else{
				console.log("data not send sucessfully...");
				return false;
			}	
		},
		list:$scope.list=function(){
			console.log('list data init ...');
			
				$http({
					method : "GET",
					url : "/user/list",
					headers : {'Content-Type': 'application/json'}
				}).then(function(response) {
				//First function handles success
					//console.log(response.data);
					$scope.content = response.data;
					//$scope.content.birthdate = $filter('date')($scope.content.birthdate, "dd-MM-yyyy");
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
				});

		},
		show:$scope.show=function(){
			console.log('show data init ...');
			if(!!$routeParams.id){
				var id=$routeParams.id;   // fatching id 
				console.log("/user/show/"+id);
				$http({
					method : "GET",
					url : "/user/"+id,
					headers : {'Content-Type': 'application/json'}
				}).then(function(response) {
				//First function handles success
					console.log(response.data);
					$scope.user = response.data;
					$scope.user.birthdate = $filter('date')($scope.user.birthdate, "dd-MM-yyyy");
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
				});
			}else{
				console.log('for new data insert.....');
				return false;
			}	
		},
		edit:$scope.edit=function(){
			console.log('edit call.....');
			if(!!$routeParams.id){
				var id=$routeParams.id;   // fatching id 
				console.log("/user/edit/"+id);
				$http({
					method : "PUT",
					url : "/user/"+id,
					data :$scope.user,
					headers : {'Content-Type': 'application/json'}
				}).then(function(response) {
				//First function handles success
					console.log(response.data);
					$scope.user = response.data;
					$scope.user.birthdate = $filter('date')($scope.user.birthdate, 'dd-MM-yyyy');
					$scope.user.message='Data Updated sucessfully !!';
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
				});
			}else{
				console.log('for new data insert.....');
				return false;
			}	
		},
		delete:$scope.delete=function(id,index){
			console.log('delete call.....');
			console.log(id);
			console.log(index);
			if(!!id){
				$http({
					method : "DELETE",
					url : "/user/"+id,
					headers : {'Content-Type': 'application/json'}
				}).then(function(response) {
				//First function handles success
					//$location.content=response.data;	
					console.log('delete data sucessfully.....');
					console.log(response.data);
					$scope.content.splice(index, 1);
					$location.path('/user');
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
				});
			}else{
				console.log('data id not get...');
				return false;
			}

		},
		deletebyid:$scope.deletebyid=function(id){
			console.log('delete call.....');
			console.log(id);
			//console.log(index);
			if(!!id){
				$http({
					method : "DELETE",
					url : "/user/"+id,
					headers : {'Content-Type': 'application/json'}
				}).then(function(response) {
				//First function handles success
					//$location.content=response.data;	
					console.log('delete data sucessfully.....');
					console.log(response.data);
					//$scope.content.splice(index, 1);
					$location.path('/user');
				}, function(response) {
					//Second function handles error
					$scope.content = "Something went wrong";
				});
			}else{
				console.log('data id not get...');
				return false;
			}

		}


	}

   
	
});