//https://github.com/angular/angular-seed/blob/master/README.md
//https://docs.angularjs.org/guide/controller
//angular.module('reviews', ['ngRoute']);
////https://docs.angularjs.org/guide/controller
////https://www.w3schools.com/angular/angular_routing.asp
//.config(['$routeProvider', function($routeProvider) {
//    $routeProvider;
//}])
////https://github.com/angular/angular-phonecat/blob/master/app/phone-detail/phone-detail.component.js
//.controller('reviewsCtrl', [function($routeParams, $scope) {
//        $scope.coffees =
//       [
//       {'id': 1,
//       'brand': "Average Andy's Coffee",
//       'name': 'Regular Coffee',
//       'country': 'Denmark',
//       'reviews': [
//               {'rating': 3,
//               'comment': "Could've been crispier",
//               'reviewer': "Chris P. Bacon"
//               }
//       ]
//       },
//       {'id': 2,
//       'brand': "Jimmy's Coffee",
//       'name': 'Mocha',
//       'country': 'America',
//       'reviews': [
//       {'rating': 10,
//       'comment': 'What everyone should drink in the morning!',
//       'reviewer': 'Earl Lee Riser'
//       },
//       {'rating': 10,
//       'comment': 'A genius of everything coffee',
//       'reviewer': 'Bob'
//       }
//       ]
//       },
//       {'id': 3,
//       'brand': "We Did Our Best",
//       'name': 'Latte',
//       'country': 'France',
//       'reviews': [
//       {'rating': 1,
//       'comment': " a 'latte' yuckiness.",
//       'reviewer': 'Tim Burr'
//       },
//       {'rating': 1,
//       'comment': 'Is this even coffee?',
//       'reviewer': 'Sue Flay'
//       },
//        {'rating': 1,
//       'comment': 'The grossest thing I have ever had.',
//       'reviewer': 'Myles Long'
//       },
//        {'rating': 5,
//       'comment': 'I dont know what the fuss is about, i dont think its too bad!',
//       'reviewer': 'Sara Bellum'
//       }
//       ]
//       },
//       {'id': 4,
//       'brand': "Jimmy's Special Coffee",
//       'name': 'Americano',
//       'country': 'America',
//       'reviews': [
//       {'rating': 10,
//       'comment': 'If I could rate it higher, I would!',
//       'reviewer': 'Justin Case'
//       },
//       {'rating': 10,
//       'comment': 'He does it again!',
//       'reviewer': 'Eileen Dover'
//       }
//       ]
//       }];
////http://stackoverflow.com/questions/42010631/how-to-iterate-through-angular-scope-variables-with-a-for-loop
//       for(var i =0; i <= $scope.coffees.length; i++) {
//            if($routeParams.id == $scope.coffees[i].id) {
//                $scope.coffee = $scope.coffees[i];
//                $scope.reviews = $scope.coffees[i].reviews;
//            }
//       }
//}]);