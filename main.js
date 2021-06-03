var app = angular.module('todoApp', []);

app.controller('MainCtrl', ['$scope', function($scope) {
    $scope.todoList = [
        {name: 'Aprender Angular', completed: false},
        {name: 'Criar uma aplicação', completed: true}
    ];
    
    function Tarefa(){
        this.name = '';
        this.completed = false;
    }
    
    function updateProgress() {
        $scope.progress = {
            total: $scope.todoList.length,
            getProgress: function() {
                var complete = 0;
                $scope.todoList.forEach(function(item){
                    if (item.completed) {
                        complete++;
                    }
                });
                return (complete * 100) / this.total + '%';
            }
        }
    }
    
    $scope.task = new Tarefa();
    
    $scope.addItem = function () {
        $scope.todoList.push($scope.tarefa);
        $scope.tarefa = new Tarefa();
        updateProgress();
    }
    
    $scope.deleteTarefa = function() {
        var novaLista = [];
        $scope.todoList.forEach(function(item) {
            if (!item.completed) {
                novaLista.push(item);
            }
        });
        
        $scope.todoList = novaLista;
        updateProgress();
    }
    
    updateProgress();
}]);