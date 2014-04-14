function FetchCtrl($scope, $http, $templateCache) {
    $scope.method = 'GET';
    $scope.url = 'http://localhost:8000/app/http-hello.html';

    $scope.fetch = function() {
        if ($scope.status != null) {
            $scope.data = null;
            $scope.status = null;
        }
        else {
            $http({method: $scope.method, url: $scope.url, cache: $templateCache}).
                success(function (data, status) {
                    $scope.status = status;
                    $scope.data = data;
                }).
                error(function (data, status) {
                    $scope.data = data || "Request failed";
                    $scope.status = status;
                });
        };
    };
}
