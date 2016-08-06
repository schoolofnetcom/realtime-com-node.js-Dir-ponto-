(function() {
    var Factory = function Socket($rootScope) {
        var factory = {
            on  : on,
            emit: emit
        };

        var socket = io.connect();

        function on(eventName, cb) {
            socket.on(eventName, function() {
               var args = arguments;

                $rootScope.$apply(function() {
                   cb.apply(socket, args);
                });
            });
        }

        function emit(eventName, data, cb) {
            socket.emit(eventName, data, function() {
               var args = arguments;

                $rootScope.$apply(function() {
                   if (cb) {
                       return cb.apply(socket, args);
                   }
                });
            });
        }

        return factory;
    };


    angular
        .module('post')
        .factory('Socket', Factory);
})();