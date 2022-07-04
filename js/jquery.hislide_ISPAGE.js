let query = window.matchMedia("(max-width:1366px)");
if(query.matches){
    (function($) {
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 1500,
                interval: 1500,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 15, width: 250, height: 332, top: 0, left: 0, $opacity: 1 },
                { $zIndex: 14, width: 203, height: 267, top: 32, left: 125, $opacity: 0.9 },
                { $zIndex: 13, width: 145, height: 193, top: 64, left: 260, $opacity: 0.9 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            autoPlay();
            function move() {
                $lis.each(function(index, element) {
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                });
            }
            function next() {
                states.unshift(states.pop());
                move();
            }
    
            function autoPlay() {
                timer = setInterval(next, setting.interval);
            }
        }
        $.fn.hiSlide = function(options) {
            $(this).each(function(index, ele) {
                slide(ele,options);
            });
            return this;
        }
    })(jQuery);
    
}else{
    (function($) {
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 1500,
                interval: 1500,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 15, width: 364, height: 483, top: 0, left: 0, $opacity: 1 },
                { $zIndex: 14, width: 303, height: 399, top: 40, left: 182, $opacity: 0.9 },
                { $zIndex: 13, width: 245, height: 326, top: 80, left: 333, $opacity: 0.9 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            autoPlay();
            function move() {
                $lis.each(function(index, element) {
                    var state = states[index];
                    $(element).css('zIndex', state.$zIndex).finish().animate(state, setting.speed).find('img').css('opacity', state.$opacity);
                });
            }
            function next() {
                states.unshift(states.pop());
                move();
            }
    
            function autoPlay() {
                timer = setInterval(next, setting.interval);
            }
        }
        $.fn.hiSlide = function(options) {
            $(this).each(function(index, ele) {
                slide(ele,options);
            });
            return this;
        }
    })(jQuery);
    
}
