(function(angular) {
  'use strict';

  
  angular.module('heroApp').component('heroDetail', {
	  templateUrl: 'heroDetail.html',
	  controller: ['$scope', '$timeout', function($scope, $timeout) {
		  $timeout(() => {
			  bindings: {
				hero: '='
			  }
		  }, 2000);
	  }]
	});
})(window.angular);

/*
Copyright 2017 Google Inc. All Rights Reserved.
Use of this source code is governed by an MIT-style license that
can be found in the LICENSE file at http://angular.io/license
*/