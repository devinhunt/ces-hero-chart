parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KA2S":[function(require,module,exports) {
var t=function(t){"use strict";var r,e=Object.prototype,n=e.hasOwnProperty,o="function"==typeof Symbol?Symbol:{},i=o.iterator||"@@iterator",a=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(t,r,e,n){var o=r&&r.prototype instanceof v?r:v,i=Object.create(o.prototype),a=new k(n||[]);return i._invoke=function(t,r,e){var n=f;return function(o,i){if(n===l)throw new Error("Generator is already running");if(n===p){if("throw"===o)throw i;return N()}for(e.method=o,e.arg=i;;){var a=e.delegate;if(a){var c=_(a,e);if(c){if(c===y)continue;return c}}if("next"===e.method)e.sent=e._sent=e.arg;else if("throw"===e.method){if(n===f)throw n=p,e.arg;e.dispatchException(e.arg)}else"return"===e.method&&e.abrupt("return",e.arg);n=l;var u=h(t,r,e);if("normal"===u.type){if(n=e.done?p:s,u.arg===y)continue;return{value:u.arg,done:e.done}}"throw"===u.type&&(n=p,e.method="throw",e.arg=u.arg)}}}(t,e,a),i}function h(t,r,e){try{return{type:"normal",arg:t.call(r,e)}}catch(n){return{type:"throw",arg:n}}}t.wrap=u;var f="suspendedStart",s="suspendedYield",l="executing",p="completed",y={};function v(){}function d(){}function g(){}var m={};m[i]=function(){return this};var w=Object.getPrototypeOf,L=w&&w(w(G([])));L&&L!==e&&n.call(L,i)&&(m=L);var x=g.prototype=v.prototype=Object.create(m);function E(t){["next","throw","return"].forEach(function(r){t[r]=function(t){return this._invoke(r,t)}})}function b(t,r){var e;this._invoke=function(o,i){function a(){return new r(function(e,a){!function e(o,i,a,c){var u=h(t[o],t,i);if("throw"!==u.type){var f=u.arg,s=f.value;return s&&"object"==typeof s&&n.call(s,"__await")?r.resolve(s.__await).then(function(t){e("next",t,a,c)},function(t){e("throw",t,a,c)}):r.resolve(s).then(function(t){f.value=t,a(f)},function(t){return e("throw",t,a,c)})}c(u.arg)}(o,i,e,a)})}return e=e?e.then(a,a):a()}}function _(t,e){var n=t.iterator[e.method];if(n===r){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=r,_(t,e),"throw"===e.method))return y;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return y}var o=h(n,t.iterator,e.arg);if("throw"===o.type)return e.method="throw",e.arg=o.arg,e.delegate=null,y;var i=o.arg;return i?i.done?(e[t.resultName]=i.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=r),e.delegate=null,y):i:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,y)}function j(t){var r={tryLoc:t[0]};1 in t&&(r.catchLoc=t[1]),2 in t&&(r.finallyLoc=t[2],r.afterLoc=t[3]),this.tryEntries.push(r)}function O(t){var r=t.completion||{};r.type="normal",delete r.arg,t.completion=r}function k(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(j,this),this.reset(!0)}function G(t){if(t){var e=t[i];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var o=-1,a=function e(){for(;++o<t.length;)if(n.call(t,o))return e.value=t[o],e.done=!1,e;return e.value=r,e.done=!0,e};return a.next=a}}return{next:N}}function N(){return{value:r,done:!0}}return d.prototype=x.constructor=g,g.constructor=d,g[c]=d.displayName="GeneratorFunction",t.isGeneratorFunction=function(t){var r="function"==typeof t&&t.constructor;return!!r&&(r===d||"GeneratorFunction"===(r.displayName||r.name))},t.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,g):(t.__proto__=g,c in t||(t[c]="GeneratorFunction")),t.prototype=Object.create(x),t},t.awrap=function(t){return{__await:t}},E(b.prototype),b.prototype[a]=function(){return this},t.AsyncIterator=b,t.async=function(r,e,n,o,i){void 0===i&&(i=Promise);var a=new b(u(r,e,n,o),i);return t.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},E(x),x[c]="Generator",x[i]=function(){return this},x.toString=function(){return"[object Generator]"},t.keys=function(t){var r=[];for(var e in t)r.push(e);return r.reverse(),function e(){for(;r.length;){var n=r.pop();if(n in t)return e.value=n,e.done=!1,e}return e.done=!0,e}},t.values=G,k.prototype={constructor:k,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=r,this.done=!1,this.delegate=null,this.method="next",this.arg=r,this.tryEntries.forEach(O),!t)for(var e in this)"t"===e.charAt(0)&&n.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=r)},stop:function(){this.done=!0;var t=this.tryEntries[0].completion;if("throw"===t.type)throw t.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var e=this;function o(n,o){return c.type="throw",c.arg=t,e.next=n,o&&(e.method="next",e.arg=r),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return o("end");if(a.tryLoc<=this.prev){var u=n.call(a,"catchLoc"),h=n.call(a,"finallyLoc");if(u&&h){if(this.prev<a.catchLoc)return o(a.catchLoc,!0);if(this.prev<a.finallyLoc)return o(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return o(a.catchLoc,!0)}else{if(!h)throw new Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return o(a.finallyLoc)}}}},abrupt:function(t,r){for(var e=this.tryEntries.length-1;e>=0;--e){var o=this.tryEntries[e];if(o.tryLoc<=this.prev&&n.call(o,"finallyLoc")&&this.prev<o.finallyLoc){var i=o;break}}i&&("break"===t||"continue"===t)&&i.tryLoc<=r&&r<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=t,a.arg=r,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(t,r){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&r&&(this.next=r),y},finish:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.finallyLoc===t)return this.complete(e.completion,e.afterLoc),O(e),y}},catch:function(t){for(var r=this.tryEntries.length-1;r>=0;--r){var e=this.tryEntries[r];if(e.tryLoc===t){var n=e.completion;if("throw"===n.type){var o=n.arg;O(e)}return o}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:G(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=r),y}},t}("object"==typeof module?module.exports:{});try{regeneratorRuntime=t}catch(r){Function("r","regeneratorRuntime = r")(t)}
},{}],"jPmG":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.fips=void 0;var a={"01":{abbreviation:"AL",name:"Alabama"},"02":{abbreviation:"AK",name:"Alaska"},"03":{abbreviation:"AS",name:"American Samoa"},"04":{abbreviation:"AZ",name:"Arizona"},"05":{abbreviation:"AR",name:"Arkansas"},"06":{abbreviation:"CA",name:"California"},"07":{abbreviation:"CZ",name:"Canal Zone"},"08":{abbreviation:"CO",name:"Colorado"},"09":{abbreviation:"CT",name:"Connecticut"},10:{abbreviation:"DE",name:"Delaware"},11:{abbreviation:"DC",name:"District Of Columbia"},12:{abbreviation:"FL",name:"Florida"},13:{abbreviation:"GA",name:"Georgia"},14:{abbreviation:"GU",name:"Guam"},15:{abbreviation:"HI",name:"Hawaii"},16:{abbreviation:"ID",name:"Idaho"},17:{abbreviation:"IL",name:"Illinois"},18:{abbreviation:"IN",name:"Indiana"},19:{abbreviation:"IA",name:"Iowa"},20:{abbreviation:"KS",name:"Kansas"},21:{abbreviation:"KY",name:"Kentucky"},22:{abbreviation:"LA",name:"Louisiana"},23:{abbreviation:"ME",name:"Maine"},24:{abbreviation:"MD",name:"Maryland"},25:{abbreviation:"MA",name:"Massachusetts"},26:{abbreviation:"MI",name:"Michigan"},27:{abbreviation:"MN",name:"Minnesota"},28:{abbreviation:"MS",name:"Mississippi"},29:{abbreviation:"MO",name:"Missouri"},30:{abbreviation:"MT",name:"Montana"},31:{abbreviation:"NE",name:"Nebraska"},32:{abbreviation:"NV",name:"Nevada"},33:{abbreviation:"NH",name:"New Hampshire"},34:{abbreviation:"NJ",name:"New Jersey"},35:{abbreviation:"NM",name:"New Mexico"},36:{abbreviation:"NY",name:"New York"},37:{abbreviation:"NC",name:"North Carolina"},38:{abbreviation:"ND",name:"North Dakota"},39:{abbreviation:"OH",name:"Ohio"},40:{abbreviation:"OK",name:"Oklahoma"},41:{abbreviation:"OR",name:"Oregon"},42:{abbreviation:"PA",name:"Pennsylvania"},43:{abbreviation:"PR",name:"Puerto Rico"},44:{abbreviation:"RI",name:"Rhode Island"},45:{abbreviation:"SC",name:"South Carolina"},46:{abbreviation:"SD",name:"South Dakota"},47:{abbreviation:"TN",name:"Tennessee"},48:{abbreviation:"TX",name:"Texas"},49:{abbreviation:"UT",name:"Utah"},50:{abbreviation:"VT",name:"Vermont"},51:{abbreviation:"VA",name:"Virginia"},52:{abbreviation:"VI",name:"Virgin Islands"},53:{abbreviation:"WA",name:"Washington"},54:{abbreviation:"WV",name:"West Virginia"},55:{abbreviation:"WI",name:"Wisconsin"},56:{abbreviation:"WY",name:"Wyoming"},72:{abbreviation:"PR",name:"Puerto Rico"}};exports.fips=a;
},{}],"vpnQ":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.idToStateData=exports.idToStateAbbr=exports.idToStateName=exports.groupTrend=exports.sheetsCsvTemplate=exports.scoreToSafeString=exports.scoreToTrendMap=void 0;var e=require("./fips"),r={"Bruised Red":"Uncontrolled spread",Red:"Trending poorly",Yellow:"Making progress",Green:"Trending better"};exports.scoreToTrendMap=r;var t={"Bruised Red":"Bruised-Red",Red:"Red",Yellow:"Yellow",Green:"Green"};exports.scoreToSafeString=t;var o=function(e){return"https://docs.google.com/spreadsheets/d/".concat(e,"/pub?output=csv")};exports.sheetsCsvTemplate=o;var n=function(e,r){for(var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0,o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:1,n=!(arguments.length>4&&void 0!==arguments[4])||arguments[4],s=t,i=function(e){return"".concat(r).concat(e.toLocaleString("en-US",{minimumIntegerDigits:o,useGrouping:!1}))},a=[];i(s)in e;)a.push(e[i(s)]),s++;return n&&a.reverse(),a};exports.groupTrend=n;var s=function(r){return e.fips[r].name};exports.idToStateName=s;var i=function(r){return e.fips[r].abbreviation};exports.idToStateAbbr=i;var a=function(e,r){return r.filter(function(r){return r.STATE.toLowerCase()==s(e).toLowerCase()})[0]};exports.idToStateData=a;
},{"./fips":"jPmG"}],"XCwh":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.heroStyle=exports.GREEN=exports.YELLOW=exports.RED=exports.DEEP_RED=exports.injectStyle=void 0;var e=function(e){var n=document.createElement("style");n.textContent=e,document.head.append(n)};exports.injectStyle=e;var n="#90112E";exports.DEEP_RED=n;var o="#DA3C2E";exports.RED=o;var t="#FCE04F";exports.YELLOW=t;var r="#46AD5A";exports.GREEN=r;var l='\n\n.ces-grid {\n  display: flex;\n}\n\n.ces-col {\n  flex: 1 0;\n}\n\n.ces-hero-tooltip {\n  display: none;\n  position: absolute;\n  z-index: 999;\n  transform: translate(-50%, 10px);\n  backface-visibility: hidden;\n\n  left: 0;\n  top: 0;\n\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n  font-size: 11px;\n}\n\n.ces-hero-tooltip.ces-active {\n  display: block;\n}\n\n.Green { color: '.concat(r,"; }\n.Yellow { color: ").concat(t,"; }\n.Red { color: ").concat(o,"; }\n.Bruised-Red { color: ").concat(n,"; }\n\n.Green-bg { background-color: ").concat(r,"; }\n.Yellow-bg { background-color: ").concat(t,"; }\n.Red-bg { background-color: ").concat(o,"; }\n.Bruised-Red-bg { background-color: ").concat(n,"; }\n\n.ces-tooltip-content {\n  width: 360px;\n  border-radius: 4px;\n  color: white;\n  padding: 8px 10px;\n  box-sizing: border-box;\n  border: 2px solid #eee;\n}\n\n.ces-tooltip-content.Yellow-bg {\n  color: #222;\n}\n\n.ces-hero-tooltip h1 {\n  font-size: 20px;\n  line-height: 20px;\n  margin: 5px 0 9px 0;\n}\n\n.ces-trend-label {\n  display: block;\n  line-height: 15px;\n  margin-top: 5px;\n}\n\n.ces-tooltip-header-title {\n  color: white;\n}\n\n.ces-tooltip-header-trend {\n  flex: 1 0;\n}\n\n#ces-tooltip-spark-trend > svg {\n  overflow: visible;\n}\n\n.ces-trend-spark-label {\n  font-size: 10px;\n}\n\n.Green-bg .ces-spark-line, .Red-bg .ces-spark-line, .Bruised-Red-bg .ces-spark-line {\n  stroke: white;\n}\n\n.Green-bg .ces-trend-spark-label, .Red-bg .ces-trend-spark-label, .Bruised-Red-bg .ces-trend-spark-label {\n  fill: white;\n}\n\n.Yellow-bg .ces-spark-line {\n  stroke: black;\n}\n\n.Yellow-bg .ces-trend-spark-label {\n  fill: black;\n}\n");exports.heroStyle=l;
},{}],"sEnY":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.tooltipTemplate=exports.setupTooltip=void 0;var s=require("./data"),e=function(s){return d3.select(s).append("div").classed("ces-hero-tooltip",!0).classed("ces-active",!1)};exports.setupTooltip=e;var n=function(e){var n=e["NEW GATING SCORE"],c=s.scoreToSafeString[n];return'\n    <div class="ces-tooltip-content '.concat(c,'-bg">\n      <div class="ces-grid">\n        <div class="ces-col">\n          <span class="ces-trend-label">').concat(s.scoreToTrendMap[n],"</span>\n          <h1>").concat(e.STATE,'</h1>        \n        </div>\n        <div class="ces-col">\n          <span class="ces-trend-label">New cases per million</span>\n          <h1>').concat(e["NEW CASES PER MILLION PER DAY"],'</h1>\n        </div>\n      </div>\n      <div class="ces-grid">\n        <div class="ces-col">\n          <span class="ces-trend-label">Last 14 days COVID+</span>\n          <div id="ces-spark-covid-plus"></div>          \n        </div>\n        <div class="ces-col">\n          <span class="ces-trend-label">Last 14 days positivity</span>\n          <div id="ces-spark-positivity"></div>\n        </div>\n      </div>\n    </div>\n  ')};exports.tooltipTemplate=n;
},{"./data":"vpnQ"}],"pkQ8":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var t=require("./data"),e=require("./hero-style");function r(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter(function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable})),r.push.apply(r,n)}return r}function n(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?r(Object(n),!0).forEach(function(e){h(t,e,n[e])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach(function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))})}return t}function a(t,e){return c(t)||u(t,e)||o(t,e)||i()}function i(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}function o(t,e){if(t){if("string"==typeof t)return s(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?s(t,e):void 0}}function s(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}function u(t,e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t)){var r=[],n=!0,a=!1,i=void 0;try{for(var o,s=t[Symbol.iterator]();!(n=(o=s.next()).done)&&(r.push(o.value),!e||r.length!==e);n=!0);}catch(u){a=!0,i=u}finally{try{n||null==s.return||s.return()}finally{if(a)throw i}}return r}}function c(t){if(Array.isArray(t))return t}function l(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function f(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,n.key,n)}}function p(t,e,r){return e&&f(t.prototype,e),r&&f(t,r),t}function h(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}var d=function(){function r(t,n,a){l(this,r),h(this,"WIDTH",1e3),h(this,"HEIGHT",700),h(this,"SCORE_TO_COLOR",{"Bruised Red":e.DEEP_RED,Red:e.RED,Yellow:e.YELLOW,Green:e.GREEN}),this.mapData=t,this.cesData=n,this.initialize()}return p(r,[{key:"initialize",value:function(){var e=this;this.svg=d3.create("svg").attr("viewBox",[0,0,this.WIDTH,this.HEIGHT]).attr("preserveAspectRation","xMidYMid meet"),this.mapG=this.svg.append("g");var r=d3.geoPath(),i=topojson.feature(this.mapData,this.mapData.objects.states);i.features.forEach(function(t){var e=a(r.centroid(t),2),i=e[0],o=e[1];t.properties=n(n({},t.properties),{},{x:i,y:o})}),this.statePaths=this.mapG.append("g").selectAll("path").data(i.features).join("path").attr("fill",function(r){return n=r.id,a=(0,t.idToStateData)(n,e.cesData),e.SCORE_TO_COLOR[a["NEW GATING SCORE"]];var n,a}).attr("d",r),this.mapG.append("path").attr("fill","none").attr("stroke","white").attr("stroke-linejoin","round").attr("d",r(topojson.mesh(this.mapData,this.mapData.objects.states,function(t,e){return t!==e})))}},{key:"node",get:function(){return this.svg.node()}}]),r}();exports.default=d;
},{"./data":"vpnQ","./hero-style":"XCwh"}],"HjeP":[function(require,module,exports) {
"use strict";function t(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function e(t,e){for(var a=0;a<e.length;a++){var i=e[a];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function a(t,a,i){return a&&e(t.prototype,a),i&&e(t,i),t}Object.defineProperty(exports,"__esModule",{value:!0}),exports.default=void 0;var i=function(){function e(a){var i=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";t(this,e),this.metrics=a,this.labelFormat=i,this.initialize()}return a(e,[{key:"initialize",value:function(){this.svg=d3.create("svg").attr("width",this.metrics.width).attr("height",this.metrics.height),this.path=this.svg.append("path").classed("ces-spark-line",!0).attr("fill","none").attr("stroke-width",1.5),this.leftLabel=this.svg.append("g"),this.leftLabel.append("text").classed("ces-trend-spark-label",!0).text("0").attr("text-anchor","end").attr("y",3),this.rightLabel=this.svg.append("g"),this.rightLabel.append("text").classed("ces-trend-spark-label",!0).text("0").attr("text-anchor","start").attr("y",3)}},{key:"update",value:function(t){var e=d3.scaleLinear().domain([0,t.length]).range([this.metrics.left,this.metrics.width-this.metrics.right]),a=d3.scaleLinear().domain(d3.extent(t)).range([this.metrics.height-this.metrics.bottom,this.metrics.top]),i=d3.line().x(function(t,a){return e(a)}).y(function(t){return a(t)});this.path.datum(t).attr("d",i),this.leftLabel.attr("transform","translate(".concat(e(0)-3,", ").concat(a(t[0]),")")),this.leftLabel.select("text").text(this.formatDatum(t[0])),this.rightLabel.attr("transform","translate(".concat(e(t.length-1)+3,", ").concat(a(t[t.length-1]),")")),this.rightLabel.select("text").text(this.formatDatum(t[t.length-1]))}},{key:"formatDatum",value:function(t){return d3.format(this.labelFormat)(t)}},{key:"node",get:function(){return this.svg.node()}}]),e}();exports.default=i;
},{}],"Focm":[function(require,module,exports) {
"use strict";require("regenerator-runtime/runtime");var e=require("./src/data"),t=require("./src/hero-style"),n=require("./src/tooltip"),r=u(require("./src/map")),o=u(require("./src/spark"));function u(e){return e&&e.__esModule?e:{default:e}}function a(e,t,n,r,o,u,a){try{var i=e[u](a),c=i.value}catch(s){return void n(s)}i.done?t(c):Promise.resolve(c).then(r,o)}function i(e){return function(){var t=this,n=arguments;return new Promise(function(r,o){var u=e.apply(t,n);function i(e){a(u,r,o,i,c,"next",e)}function c(e){a(u,r,o,i,c,"throw",e)}i(void 0)})}}var c="1ZhwP0GZTz50myibSaWsMXOVQKx9DQaJO4rN1i58Rrjc",s=null,l=null,p=0,d=0,T=function(e){d3.select(e).style("position","relative")};window.CESHero=function(){var u=i(regeneratorRuntime.mark(function u(a){var i,c,f,m,S,h,v,E,g,w;return regeneratorRuntime.wrap(function(u){for(;;)switch(u.prev=u.next){case 0:return w=function(e){var t=a.getBoundingClientRect();p=e.clientX-t.left-150,d=e.clientY-t.top+10,p=Math.min(t.width-300,Math.max(0,p)),s.style("transform","translate(".concat(p,"px, ").concat(d,"px)"))},g=function(e){s.classed("ces-active",!1)},E=function(t){l=(0,e.idToStateData)(t.id,c),s.html((0,n.tooltipTemplate)(l)),document.querySelector("#ces-spark-covid-plus").append(S.node),S.update(l.TREND_CASES),document.querySelector("#ces-spark-positivity").append(h.node),h.update(l.TREND_POSITIVITY),s.classed("ces-active",!0)},v=function(e){console.log(e.id)},(0,t.injectStyle)(t.heroStyle),T(a),s=(0,n.setupTooltip)(a),u.next=9,d3.json("https://unpkg.com/us-atlas@1/us/10m.json");case 9:return i=u.sent,u.next=12,d3.csv("https://ces-data.herokuapp.com/data");case 12:(c=u.sent).forEach(function(t){t.TREND_CASES=(0,e.groupTrend)(t,"CASES-T-").map(function(e){return+e});var n=t.TREND_CASES.length;t.TREND_CASES=t.TREND_CASES.slice(n-14,n),t.TREND_TESTS=(0,e.groupTrend)(t,"TESTS-T-").map(function(e){return+e}),t.TREND_DEATHS=(0,e.groupTrend)(t,"DEATHS-",0,2).map(function(e){return+e}),t.TREND_POSITIVITY=(0,e.groupTrend)(t,"POSITIVITY-",0,2).map(function(e){return+e.substring(0,e.length-1)/100})}),console.log(c),f=new r.default(i,c),a.append(f.node),f.statePaths.on("click",v).on("mouseenter",E),f.mapG.on("mouseleave",g),m={width:160,height:50,top:20,right:30,bottom:5,left:30},S=new o.default(m,".3~s"),h=new o.default(m,".1%"),window.addEventListener("mousemove",w);case 23:case"end":return u.stop()}},u)}));return function(e){return u.apply(this,arguments)}}();
},{"regenerator-runtime/runtime":"KA2S","./src/data":"vpnQ","./src/hero-style":"XCwh","./src/tooltip":"sEnY","./src/map":"pkQ8","./src/spark":"HjeP"}]},{},["Focm"], null)
//# sourceMappingURL=/index.js.map