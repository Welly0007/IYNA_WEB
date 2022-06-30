let query = window.matchMedia("(max-width:1110px)");
if(query.matches){
    (function($) {
        var slide = function(ele,options) {
            var $ele = $(ele);
            var setting = {
                speed: 500,
                interval: 1500,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 0, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 1, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 2, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 3, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 4, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 5, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 6, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 7, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 8, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 9, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 10, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 11, width: 120, height: 150, top: 69, left: 700, $opacity: 0 },
                { $zIndex: 12, width: 130, height: 170, top: 59, left: 700, $opacity: 0 },
                { $zIndex: 13, width: 200, height: 302, top: 35, left: 0, $opacity: 0.8 },
                { $zIndex: 14, width: 268, height: 399, top: 0, left: 235, $opacity: 1 },
                { $zIndex: 13, width: 200, height: 302, top: 35, left: 538, $opacity: 0.8 },
                { $zIndex: 12, width: 130, height: 170, top: 59, left: 700, $opacity: 0.0 },
                { $zIndex: 11, width: 120, height: 150, top: 69, left: 700, $opacity: 0 },
                { $zIndex: 10, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 9, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 8, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 7, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 6, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 5, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 4, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 3, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 2, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 1, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 0, width: 0, height: 0, top: 79, left: 700, $opacity: 0 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
    
            // 事件
            $ele.find('.hi-next').on('click', function() {
                next();
            });
            $ele.find('.hi-prev').on('click', function() {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            move();
            // autoPlay();
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
                speed: 500,
                interval: 1500,
                
            };
            $.extend(true, setting, options);
            var states = [
                { $zIndex: 0, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 1, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 2, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 3, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 4, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 5, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 6, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 7, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 8, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 9, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 10, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 11, width: 120, height: 150, top: 69, left: 700, $opacity: 0 },
                { $zIndex: 12, width: 130, height: 170, top: 59, left: 700, $opacity: 0 },
                { $zIndex: 13, width: 250, height: 352, top: 35, left: 0, $opacity: 0.8 },
                { $zIndex: 14, width: 318, height: 449, top: 0, left: 295, $opacity: 1 },
                { $zIndex: 13, width: 250, height: 352, top: 35, left: 658, $opacity: 0.8 },
                { $zIndex: 12, width: 130, height: 170, top: 59, left: 700, $opacity: 0.0 },
                { $zIndex: 11, width: 120, height: 150, top: 69, left: 700, $opacity: 0 },
                { $zIndex: 10, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 9, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 8, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 7, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 6, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 5, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 4, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 3, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 2, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 1, width: 0, height: 0, top: 79, left: 700, $opacity: 0 },
                { $zIndex: 0, width: 0, height: 0, top: 79, left: 700, $opacity: 0 }
            ];
    
            var $lis = $ele.find('li');
            var timer = null;
    
            // 事件
            $ele.find('.hi-next').on('click', function() {
                next();
            });
            $ele.find('.hi-prev').on('click', function() {
                states.push(states.shift());
                move();
            });
            $ele.on('mouseenter', function() {
                clearInterval(timer);
                timer = null;
            }).on('mouseleave', function() {
                autoPlay();
            });
    
            move();
            // autoPlay();
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
