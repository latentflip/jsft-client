(function (root, factory) {
    if (typeof define === 'function' && define.amd) {
        define([], factory);
    } else if (typeof exports === 'object') {
        module.exports = factory();
    } else {
        root.templatizer = factory();
    }
}(this, function () {
    var jade=function(){function r(r){return null!=r&&""!==r}function n(e){return Array.isArray(e)?e.map(n).filter(r).join(" "):e}var e={};return e.merge=function t(n,e){if(1===arguments.length){for(var a=n[0],s=1;s<n.length;s++)a=t(a,n[s]);return a}var i=n["class"],l=e["class"];(i||l)&&(i=i||[],l=l||[],Array.isArray(i)||(i=[i]),Array.isArray(l)||(l=[l]),n["class"]=i.concat(l).filter(r));for(var o in e)"class"!=o&&(n[o]=e[o]);return n},e.joinClasses=n,e.cls=function(r,t){for(var a=[],s=0;s<r.length;s++)a.push(t&&t[s]?e.escape(n([r[s]])):n(r[s]));var i=n(a);return i.length?' class="'+i+'"':""},e.attr=function(r,n,t,a){return"boolean"==typeof n||null==n?n?" "+(a?r:r+'="'+r+'"'):"":0==r.indexOf("data")&&"string"!=typeof n?" "+r+"='"+JSON.stringify(n).replace(/'/g,"&apos;")+"'":t?" "+r+'="'+e.escape(n)+'"':" "+r+'="'+n+'"'},e.attrs=function(r,t){var a=[],s=Object.keys(r);if(s.length)for(var i=0;i<s.length;++i){var l=s[i],o=r[l];"class"==l?(o=n(o))&&a.push(" "+l+'="'+o+'"'):a.push(e.attr(l,o,!1,t))}return a.join("")},e.escape=function(r){var n=String(r).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;");return n===""+r?r:n},e.rethrow=function a(r,n,e,t){if(!(r instanceof Error))throw r;if(!("undefined"==typeof window&&n||t))throw r.message+=" on line "+e,r;try{t=t||require("fs").readFileSync(n,"utf8")}catch(s){a(r,null,e)}var i=3,l=t.split("\n"),o=Math.max(e-i,0),c=Math.min(l.length,e+i),i=l.slice(o,c).map(function(r,n){var t=n+o+1;return(t==e?"  > ":"    ")+t+"| "+r}).join("\n");throw r.path=n,r.message=(n||"Jade")+":"+e+"\n"+i+"\n\n"+r.message,r},e}();

    var templatizer = {};
    templatizer["includes"] = {};
    templatizer["pages"] = {};

    // body.jade compiled template
    templatizer["body"] = function tmpl_body() {
        return '<div><nav class="pure-menu pure-menu-open pure-menu-horizontal"><a href="#" class="pure-menu-heading">Wolves.Technology</a><ul><li><a href="/">Den</a></li><li><a href="/howls">Howls</a></li><li><a href="/marks">Marks</a></li><li><a href="/wolves">Wolves</a></li></ul></nav><div role="page"></div></div>';
    };

    // includes/howl.jade compiled template
    templatizer["includes"]["howl"] = function tmpl_includes_howl(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(model) {
            buf.push("<div><p>" + jade.escape(null == (jade_interp = model.content) ? "" : jade_interp) + "</p><p>" + jade.escape(null == (jade_interp = model.createdAt) ? "" : jade_interp) + "</p></div>");
        })("model" in locals_for_with ? locals_for_with.model : typeof model !== "undefined" ? model : undefined);
        return buf.join("");
    };

    // includes/main-nav.jade compiled template
    templatizer["includes"]["main-nav"] = function tmpl_includes_main_nav() {
        return '<nav class="pure-menu pure-menu-open pure-menu-horizontal"><a href="#" class="pure-menu-heading">Wolves.Technology</a><ul><li><a href="/">Den</a></li><li><a href="/howls">Howls</a></li><li><a href="/marks">Marks</a></li><li><a href="/wolves">Wolves</a></li></ul></nav>';
    };

    // includes/wolf.jade compiled template
    templatizer["includes"]["wolf"] = function tmpl_includes_wolf(locals) {
        var buf = [];
        var jade_mixins = {};
        var jade_interp;
        var locals_for_with = locals || {};
        (function(model) {
            buf.push("<div><p>" + jade.escape(null == (jade_interp = model.username) ? "" : jade_interp) + "</p></div>");
        })("model" in locals_for_with ? locals_for_with.model : typeof model !== "undefined" ? model : undefined);
        return buf.join("");
    };

    // pages/den.jade compiled template
    templatizer["pages"]["den"] = function tmpl_pages_den() {
        return '<div><h1>Den</h1><div role="howls"></div></div>';
    };

    // pages/fourOhFour.jade compiled template
    templatizer["pages"]["fourOhFour"] = function tmpl_pages_fourOhFour() {
        return "<div><h1>404</h1></div>";
    };

    // pages/howls.jade compiled template
    templatizer["pages"]["howls"] = function tmpl_pages_howls() {
        return "<div><h1>Howls</h1></div>";
    };

    // pages/marks.jade compiled template
    templatizer["pages"]["marks"] = function tmpl_pages_marks() {
        return "<div><h1>Marks</h1></div>";
    };

    // pages/wolves.jade compiled template
    templatizer["pages"]["wolves"] = function tmpl_pages_wolves() {
        return '<div><h1>Wolves</h1><div role="wolves"></div></div>';
    };

    return templatizer;
}));