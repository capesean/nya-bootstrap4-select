"use strict";

angular.module("app", ["nya.bootstrap.select"])
    .controller("MainCtrl", function ($scope) {

        $scope.example1options = [{ id: 1, label: "One" }, { id: 2, label: "Two" }, { id: 3, label: "Three" }];
    });