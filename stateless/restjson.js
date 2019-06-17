angular.module('aplicacao', []);
angular.module('aplicacao').controller('Rest', function ($scope, $http) {
  $http.get('https://raw.githubusercontent.com/dudumolinaro/testfilmes/master/data.json').
    success(function (data) {
      $scope.filmes = data;
      // console.log(data);
    }
    );
});





// angular.module('aplicacao').controller('DiscographyCtrl', function ($scope, $http) {
//   $http.get('https://raw.githubusercontent.com/dudumolinaro/testfilmes/master/users.json').
//     success(function (data) {
//       $scope.filmes = data;
//       // console.log(data);
//     }
//     );
// });