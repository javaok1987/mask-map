(this["webpackJsonpmask-map"]=this["webpackJsonpmask-map"]||[]).push([[0],{168:function(e,i,d){e.exports=d(304)},173:function(e,i,d){},179:function(e,i,d){},299:function(e,i,d){},304:function(e,i,d){"use strict";d.r(i);var a=d(0),n=d.n(a),o=d(38),t=d.n(o),p=(d(173),d(20)),m=d(21),r=d(22),s=d(23),C=d(24),z=(d(174),d(175),d(176),d(177),d(178),d(179),window.L),c=window.turf,l=function(e){return e>200?"#7cafc2":e>150?"#86c1b9":e>100?"#a1b56c":e>50?"#f7ca88":e>0?"#dc9656":"rgba(236,222,239,.9)"},u=function(e,i){var d='\n      <div class="info-window">\n        <h3>'.concat(i.feature.properties.name,"</h3>\n        <p>\u6210\u4eba\u53e3\u7f69\b\uff1a").concat(e.properties.mask_adult," \u500b</p>\n        <p>\u5152\u7ae5\u53e3\u7f69\uff1a").concat(e.properties.mask_child," \u500b</p>\n      </div>\n    ");i.bindPopup(d)},h=function(e){function i(e){var d;return Object(p.a)(this,i),(d=Object(r.a)(this,Object(s.a)(i).call(this,e))).state={myPlace:null,markerPool:null,maskMap:null,countryLayer:null,countryName:""},d}return Object(C.a)(i,e),Object(m.a)(i,[{key:"componentDidMount",value:function(){var e=this;this.markerPool=z.markerClusterGroup({zoomToBoundsOnClick:!0,removeOutsideVisibleBounds:!0});var i=[this.props.latitude,this.props.longitude];this.maskMap=z.map("map-canvas",{center:i,zoom:12,layers:[z.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",{attribution:'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery \xa9 <a href="https://www.mapbox.com/">Mapbox</a>',id:"mapbox/dark-v10",accessToken:"pk.eyJ1IjoiaWFubGlhbzE5ODciLCJhIjoiY2s2OHFmMzQ0MDV5MjN1bjlmMzF2a3htZyJ9.n70D4lI2aqZ1dj-EGCuqJw"})]}),this.marker=z.marker(i).addTo(this.maskMap),this.maskMap.locate({setView:!0,maxZoom:11}),this.maskMap.on("locationfound",(function(i){e.setState({myPlace:i.latlng}),e.marker.setLatLng(e.state.myPlace).bindPopup("You are here!").openPopup()})),function(){var e=z.control({position:"bottomright"});return e.onAdd=function(){for(var e=z.DomUtil.create("div","legend-panel"),i=[0,50,100,150,200],d=[],a=0;a<i.length;a++)d.push('\n        <div class="legend-item">\n          <i style="background:'.concat(l(i[a]+1),'"></i>\n          ').concat(i[a]).concat(i[a+1]?"&ndash;"+i[a+1]+"<br>":"+","\n        </div>\n      "));return e.innerHTML=d.join(""),e},e}().addTo(this.maskMap);var d=z.Toolbar2.Action.extend({options:{toolbarIcon:{html:'<div><i aria-hidden="true" class="teal street view large icon"></i></div>',tooltip:"Go to the Eiffel Tower"}},addHooks:function(){e.marker.setLatLng(e.state.myPlace).bindPopup("You are here!").openPopup(),e.maskMap.flyTo(e.state.myPlace,17)}});new z.Toolbar2.Control({actions:[d]}).addTo(this.maskMap)}},{key:"componentDidUpdate",value:function(){var e=this;if(this.markerPool.clearLayers(),this.props.focus){var i=new z.LatLng(this.props.focus[1],this.props.focus[0]);this.marker.setLatLng(i).bindPopup('\n          <a href="https://www.google.com.tw/maps/dir/'.concat(this.state.myPlace.lat,",").concat(this.state.myPlace.lng,"/").concat(this.props.focus[1],",").concat(this.props.focus[0],'" target="_blank" rel="noopener noreferrer">\n            \u5c0e\u822a\u5230\u9019\n          </a>\n        ')).openPopup(),this.maskMap.flyTo(i,17)}if(this.props.layer&&1===this.props.layer.length){var d=this.props.layer[0];if(d.properties.name!==this.countryName){this.countryLayer&&this.countryLayer.clearLayers();var a=c.centerOfMass(d),n=new z.LatLng(a.geometry.coordinates[1],a.geometry.coordinates[0]);this.countryLayer=z.geoJson(null).addData(this.props.layer).addTo(this.maskMap),this.countryName=d.properties.name,this.marker.setLatLng(n).bindPopup(this.countryName).openPopup(),this.maskMap.flyTo(n,10)}if(!this.props.markersData)return!1;var o=c.pointsWithinPolygon(this.props.markersData,this.props.layer[0]);o&&(z.geoJSON(o,{style:function(e){return{color:e.properties.color}},onEachFeature:u,pointToLayer:function(i,d){var a=i.properties.mask_adult+i.properties.mask_child,n=z.circleMarker(d,function(e){return{radius:8,weight:1,opacity:1,fillOpacity:1,fillColor:l(e)}}(a));return e.markerPool.addLayer(n),n}}),this.maskMap.addLayer(this.markerPool))}}},{key:"render",value:function(){return n.a.createElement("div",{id:"map-canvas"})}}]),i}(n.a.Component),f=d(311),y=d(312),k=d(49),v=d(309),g=function(e){function i(e){var d;return Object(p.a)(this,i),(d=Object(r.a)(this,Object(s.a)(i).call(this,e))).handleClick=function(e){d.props.onClickDrugstore(e)},d.state={},d}return Object(C.a)(i,e),Object(m.a)(i,[{key:"getPercent",value:function(e,i){var d=e/i;return d>1?100:100*d}},{key:"render",value:function(){var e=this,i="".concat(this.props.city).concat(this.props.district);return n.a.createElement("div",{className:"floating-panel__list"},this.props.markersData&&this.props.markersData.features.map((function(d){return d.properties.address.substring(0,i.length)===i?n.a.createElement(f.a,{key:d.properties.id},n.a.createElement(f.a.Content,null,n.a.createElement(f.a.Header,{onClick:function(){return e.handleClick(d.geometry)}},d.properties.name),n.a.createElement(f.a.Meta,null,d.properties.phone),n.a.createElement(f.a.Description,null,n.a.createElement("a",{href:"https://www.google.com.tw/maps/place/".concat(d.properties.address),target:"_blank",rel:"noopener noreferrer"},d.properties.address),n.a.createElement("br",null),""===d.properties.service_note||"\u7121\u7279\u5b9a"===d.properties.service_note?null:n.a.createElement(y.a,{size:"tiny"},n.a.createElement(k.a,{name:"bullhorn"}),d.properties.service_note))),n.a.createElement(f.a.Content,{extra:!0},n.a.createElement(v.a,{percent:e.getPercent(d.properties.mask_adult,200),indicating:!0},"\u6210\u4eba:",d.properties.mask_adult),n.a.createElement(v.a,{percent:e.getPercent(d.properties.mask_child,50),indicating:!0},"\u5152\u7ae5:",d.properties.mask_child))):null})))}}]),i}(n.a.Component),b=d(310),w=d(98),O=function(e){function i(e){var d;return Object(p.a)(this,i),(d=Object(r.a)(this,Object(s.a)(i).call(this,e))).handleCity=function(e,i){var a=i.value;d.props.onSelectCity(a);var n=w.find((function(e,i,d){return e.name===a}));if(d.setState({city:a,districtOptions:n.districts.map((function(e){return{key:e.id,text:e.name,value:e.name}}))}),n.districts&&n.districts.length>1){var o=n.districts[0].name;d.setState({district:o}),d.props.onSelectDistrict(o)}},d.handleDistrict=function(e,i){var a=i.value;d.setState({district:a}),d.props.onSelectDistrict(a)},d.state={cityOptions:w.map((function(e){return{key:e.id,text:e.name,value:e.name}})),districtOptions:[{key:1,text:"\u4e2d\u6b63\u5340",value:"\u4e2d\u6b63\u5340"},{key:2,text:"\u5927\u540c\u5340",value:"\u5927\u540c\u5340"},{key:3,text:"\u4e2d\u5c71\u5340",value:"\u4e2d\u5c71\u5340"},{key:4,text:"\u677e\u5c71\u5340",value:"\u677e\u5c71\u5340"},{key:5,text:"\u5927\u5b89\u5340",value:"\u5927\u5b89\u5340"},{key:6,text:"\u842c\u83ef\u5340",value:"\u842c\u83ef\u5340"},{key:7,text:"\u4fe1\u7fa9\u5340",value:"\u4fe1\u7fa9\u5340"},{key:8,text:"\u58eb\u6797\u5340",value:"\u58eb\u6797\u5340"},{key:9,text:"\u5317\u6295\u5340",value:"\u5317\u6295\u5340"},{key:10,text:"\u5167\u6e56\u5340",value:"\u5167\u6e56\u5340"},{key:11,text:"\u5357\u6e2f\u5340",value:"\u5357\u6e2f\u5340"},{key:12,text:"\u6587\u5c71\u5340",value:"\u6587\u5c71\u5340"}],city:"\u53f0\u5317\u5e02",district:"\u5927\u5b89\u5340"},d}return Object(C.a)(i,e),Object(m.a)(i,[{key:"render",value:function(){var e=this.state,i=e.cityOptions,d=e.districtOptions,a=e.city,o=e.district;return n.a.createElement("div",null,n.a.createElement(b.a,{button:!0,className:"icon teal",floating:!0,labeled:!0,scrolling:!0,icon:"map marker alternate",options:i,onChange:this.handleCity,text:a}),n.a.createElement(b.a,{button:!0,className:"icon teal",floating:!0,labeled:!0,scrolling:!0,icon:"map marker alternate",options:d,onChange:this.handleDistrict,text:o}))}}]),i}(n.a.Component),j=d(313),E=(d(299),function(e){function i(e){var d;return Object(p.a)(this,i),(d=Object(r.a)(this,Object(s.a)(i).call(this,e))).handleCity=function(e){d.setState({city:e,focus:null,layer:d.state.twCountyGJson.features.filter((function(i){return i.properties.name===e}))})},d.handleDistrict=function(e){d.setState({focus:null,district:e})},d.handleClickDrugstore=function(e){d.setState({focus:e.coordinates})},d.state={viewport:{latitude:25.030313,longitude:121.54924,zoom:16},drugstoreGJson:null,twCountyGJson:null,layer:null,focus:null,visible:!0,city:"\u53f0\u5317\u5e02",district:"\u5927\u5b89\u5340"},d}return Object(C.a)(i,e),Object(m.a)(i,[{key:"componentDidMount",value:function(){var e=this;fetch("https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json").then((function(e){return e.json()})).then((function(i){e.setState({drugstoreGJson:i}),document.body.classList.add("dom-ready")})).catch((function(e){console.log("\u932f\u8aa4:",e)})),fetch("https://raw.githubusercontent.com/javaok1987/mask-map/master/src/data/tw-county.geojson").then((function(e){return e.json()})).then((function(i){e.setState({twCountyGJson:i}),e.setState({layer:e.state.twCountyGJson.features.filter((function(i){return i.properties.name===e.state.city}))})})).catch((function(e){console.log("\u932f\u8aa4:",e)}))}},{key:"toggleSidebar",value:function(e){this.setState({visible:!e})}},{key:"render",value:function(){var e=this,i=this.state,d=i.viewport,a=i.drugstoreGJson,o=i.city,t=i.district,p=i.focus,m=i.layer;return n.a.createElement("div",{className:"App"},n.a.createElement(h,Object.assign({},d,{markersData:a,layer:m,focus:p})),n.a.createElement("div",{className:this.state.visible?"floating-panel is-visible":"floating-panel"},n.a.createElement(O,{onSelectCity:this.handleCity,onSelectDistrict:this.handleDistrict}),n.a.createElement(g,{markersData:a,city:o,district:t,onClickDrugstore:this.handleClickDrugstore}),n.a.createElement(j.a,{icon:!0,compact:!0,color:"teal",labelPosition:"right",className:"floating-panel__close",onClick:function(){return e.toggleSidebar(e.state.visible)}},"\u95dc\u9589",n.a.createElement(k.a,{name:this.state.visible?"angle double right":"angle double left"}))))}}]),i}(n.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));t.a.render(n.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},98:function(e){e.exports=JSON.parse('[{"id":"0","name":"\u53f0\u5317\u5e02","districts":[{"id":1,"zipCode":"100","name":"\u4e2d\u6b63\u5340"},{"id":2,"zipCode":"103","name":"\u5927\u540c\u5340"},{"id":3,"zipCode":"104","name":"\u4e2d\u5c71\u5340"},{"id":4,"zipCode":"105","name":"\u677e\u5c71\u5340"},{"id":5,"zipCode":"106","name":"\u5927\u5b89\u5340"},{"id":6,"zipCode":"108","name":"\u842c\u83ef\u5340"},{"id":7,"zipCode":"110","name":"\u4fe1\u7fa9\u5340"},{"id":8,"zipCode":"111","name":"\u58eb\u6797\u5340"},{"id":9,"zipCode":"112","name":"\u5317\u6295\u5340"},{"id":10,"zipCode":"114","name":"\u5167\u6e56\u5340"},{"id":11,"zipCode":"115","name":"\u5357\u6e2f\u5340"},{"id":12,"zipCode":"116","name":"\u6587\u5c71\u5340"}]},{"id":"1","name":"\u65b0\u5317\u5e02","districts":[{"id":13,"zipCode":"207","name":"\u842c\u91cc\u5340"},{"id":14,"zipCode":"208","name":"\u91d1\u5c71\u5340"},{"id":15,"zipCode":"220","name":"\u677f\u6a4b\u5340"},{"id":16,"zipCode":"221","name":"\u6c50\u6b62\u5340"},{"id":17,"zipCode":"222","name":"\u6df1\u5751\u5340"},{"id":18,"zipCode":"223","name":"\u77f3\u7887\u5340"},{"id":19,"zipCode":"224","name":"\u745e\u82b3\u5340"},{"id":20,"zipCode":"226","name":"\u5e73\u6eaa\u5340"},{"id":21,"zipCode":"227","name":"\u96d9\u6eaa\u5340"},{"id":22,"zipCode":"228","name":"\u8ca2\u5bee\u5340"},{"id":23,"zipCode":"231","name":"\u65b0\u5e97\u5340"},{"id":24,"zipCode":"232","name":"\u576a\u6797\u5340"},{"id":25,"zipCode":"233","name":"\u70cf\u4f86\u5340"},{"id":26,"zipCode":"234","name":"\u6c38\u548c\u5340"},{"id":27,"zipCode":"235","name":"\u4e2d\u548c\u5340"},{"id":28,"zipCode":"236","name":"\u571f\u57ce\u5340"},{"id":29,"zipCode":"237","name":"\u4e09\u5cfd\u5340"},{"id":30,"zipCode":"238","name":"\u6a39\u6797\u5340"},{"id":31,"zipCode":"239","name":"\u9daf\u6b4c\u5340"},{"id":32,"zipCode":"241","name":"\u4e09\u91cd\u5340"},{"id":33,"zipCode":"242","name":"\u65b0\u838a\u5340"},{"id":34,"zipCode":"243","name":"\u6cf0\u5c71\u5340"},{"id":35,"zipCode":"244","name":"\u6797\u53e3\u5340"},{"id":36,"zipCode":"247","name":"\u8606\u6d32\u5340"},{"id":37,"zipCode":"248","name":"\u4e94\u80a1\u5340"},{"id":38,"zipCode":"249","name":"\u516b\u91cc\u5340"},{"id":39,"zipCode":"251","name":"\u6de1\u6c34\u5340"},{"id":40,"zipCode":"252","name":"\u4e09\u829d\u5340"},{"id":41,"zipCode":"253","name":"\u77f3\u9580\u5340"}]},{"id":"2","name":"\u57fa\u9686\u5e02","districts":[{"id":42,"zipCode":"200","name":"\u4ec1\u611b\u5340"},{"id":43,"zipCode":"201","name":"\u4fe1\u7fa9\u5340"},{"id":44,"zipCode":"202","name":"\u4e2d\u6b63\u5340"},{"id":45,"zipCode":"203","name":"\u4e2d\u5c71\u5340"},{"id":46,"zipCode":"204","name":"\u5b89\u6a02\u5340"},{"id":47,"zipCode":"205","name":"\u6696\u6696\u5340"},{"id":48,"zipCode":"206","name":"\u4e03\u5835\u5340"}]},{"id":"3","name":"\u9023\u6c5f\u7e23","districts":[{"id":49,"zipCode":"209","name":"\u5357\u7aff\u9109"},{"id":50,"zipCode":"210","name":"\u5317\u7aff\u9109"},{"id":51,"zipCode":"211","name":"\u8392\u5149\u9109"},{"id":52,"zipCode":"212","name":"\u6771\u5f15\u9109"}]},{"id":"4","name":"\u5b9c\u862d\u7e23","districts":[{"id":53,"zipCode":"260","name":"\u5b9c\u862d\u5e02"},{"id":54,"zipCode":"261","name":"\u982d\u57ce\u93ae"},{"id":55,"zipCode":"262","name":"\u7901\u6eaa\u9109"},{"id":56,"zipCode":"263","name":"\u58ef\u570d\u9109"},{"id":57,"zipCode":"264","name":"\u54e1\u5c71\u9109"},{"id":58,"zipCode":"265","name":"\u7f85\u6771\u93ae"},{"id":59,"zipCode":"266","name":"\u4e09\u661f\u9109"},{"id":60,"zipCode":"267","name":"\u5927\u540c\u9109"},{"id":61,"zipCode":"268","name":"\u4e94\u7d50\u9109"},{"id":62,"zipCode":"269","name":"\u51ac\u5c71\u9109"},{"id":63,"zipCode":"270","name":"\u8607\u6fb3\u93ae"},{"id":64,"zipCode":"272","name":"\u5357\u6fb3\u9109"},{"id":376,"zipCode":"290","name":"\u91e3\u9b5a\u53f0"}]},{"id":"6","name":"\u65b0\u7af9\u5e02","districts":[{"id":66,"zipCode":"300","name":"\u65b0\u7af9\u5e02"},{"id":67,"zipCode":"300","name":"\u6771\u5340"},{"id":68,"zipCode":"300","name":"\u5317\u5340"},{"id":69,"zipCode":"300","name":"\u9999\u5c71\u5340"}]},{"id":"7","name":"\u65b0\u7af9\u7e23","districts":[{"id":70,"zipCode":"302","name":"\u7af9\u5317\u5e02"},{"id":71,"zipCode":"303","name":"\u6e56\u53e3\u9109"},{"id":72,"zipCode":"304","name":"\u65b0\u8c50\u9109"},{"id":73,"zipCode":"305","name":"\u65b0\u57d4\u93ae"},{"id":74,"zipCode":"306","name":"\u95dc\u897f\u93ae"},{"id":75,"zipCode":"307","name":"\u828e\u6797\u9109"},{"id":76,"zipCode":"308","name":"\u5bf6\u5c71\u9109"},{"id":77,"zipCode":"310","name":"\u7af9\u6771\u93ae"},{"id":78,"zipCode":"311","name":"\u4e94\u5cf0\u9109"},{"id":79,"zipCode":"312","name":"\u6a6b\u5c71\u9109"},{"id":80,"zipCode":"313","name":"\u5c16\u77f3\u9109"},{"id":81,"zipCode":"314","name":"\u5317\u57d4\u9109"},{"id":82,"zipCode":"315","name":"\u5ce8\u7709\u9109"}]},{"id":"8","name":"\u6843\u5712\u5e02","districts":[{"id":83,"zipCode":"320","name":"\u4e2d\u58e2\u5340"},{"id":84,"zipCode":"324","name":"\u5e73\u93ae\u5340"},{"id":85,"zipCode":"325","name":"\u9f8d\u6f6d\u5340"},{"id":86,"zipCode":"326","name":"\u694a\u6885\u5340"},{"id":87,"zipCode":"327","name":"\u65b0\u5c4b\u5340"},{"id":88,"zipCode":"328","name":"\u89c0\u97f3\u5340"},{"id":89,"zipCode":"330","name":"\u6843\u5712\u5340"},{"id":90,"zipCode":"333","name":"\u9f9c\u5c71\u5340"},{"id":91,"zipCode":"334","name":"\u516b\u5fb7\u5340"},{"id":92,"zipCode":"335","name":"\u5927\u6eaa\u5340"},{"id":93,"zipCode":"336","name":"\u5fa9\u8208\u5340"},{"id":94,"zipCode":"337","name":"\u5927\u5712\u5340"},{"id":95,"zipCode":"338","name":"\u8606\u7af9\u5340"}]},{"id":"9","name":"\u82d7\u6817\u7e23","districts":[{"id":96,"zipCode":"350","name":"\u7af9\u5357\u93ae"},{"id":97,"zipCode":"351","name":"\u982d\u4efd\u5e02"},{"id":98,"zipCode":"352","name":"\u4e09\u7063\u9109"},{"id":99,"zipCode":"353","name":"\u5357\u5e84\u9109"},{"id":100,"zipCode":"354","name":"\u7345\u6f6d\u9109"},{"id":101,"zipCode":"356","name":"\u5f8c\u9f8d\u93ae"},{"id":102,"zipCode":"357","name":"\u901a\u9704\u93ae"},{"id":103,"zipCode":"358","name":"\u82d1\u88e1\u93ae"},{"id":104,"zipCode":"360","name":"\u82d7\u6817\u5e02"},{"id":105,"zipCode":"361","name":"\u9020\u6a4b\u9109"},{"id":106,"zipCode":"362","name":"\u982d\u5c4b\u9109"},{"id":107,"zipCode":"363","name":"\u516c\u9928\u9109"},{"id":108,"zipCode":"364","name":"\u5927\u6e56\u9109"},{"id":109,"zipCode":"365","name":"\u6cf0\u5b89\u9109"},{"id":110,"zipCode":"366","name":"\u9285\u947c\u9109"},{"id":111,"zipCode":"367","name":"\u4e09\u7fa9\u9109"},{"id":112,"zipCode":"368","name":"\u897f\u6e56\u9109"},{"id":113,"zipCode":"369","name":"\u5353\u862d\u93ae"}]},{"id":"10","name":"\u53f0\u4e2d\u5e02","districts":[{"id":114,"zipCode":"400","name":"\u4e2d\u5340"},{"id":115,"zipCode":"401","name":"\u6771\u5340"},{"id":116,"zipCode":"402","name":"\u5357\u5340"},{"id":117,"zipCode":"403","name":"\u897f\u5340"},{"id":118,"zipCode":"404","name":"\u5317\u5340"},{"id":119,"zipCode":"406","name":"\u5317\u5c6f\u5340"},{"id":120,"zipCode":"407","name":"\u897f\u5c6f\u5340"},{"id":121,"zipCode":"408","name":"\u5357\u5c6f\u5340"},{"id":122,"zipCode":"411","name":"\u592a\u5e73\u5340"},{"id":123,"zipCode":"412","name":"\u5927\u91cc\u5340"},{"id":124,"zipCode":"413","name":"\u9727\u5cf0\u5340"},{"id":125,"zipCode":"414","name":"\u70cf\u65e5\u5340"},{"id":126,"zipCode":"420","name":"\u8c50\u539f\u5340"},{"id":127,"zipCode":"421","name":"\u540e\u91cc\u5340"},{"id":128,"zipCode":"422","name":"\u77f3\u5ca1\u5340"},{"id":129,"zipCode":"423","name":"\u6771\u52e2\u5340"},{"id":130,"zipCode":"424","name":"\u548c\u5e73\u5340"},{"id":131,"zipCode":"426","name":"\u65b0\u793e\u5340"},{"id":132,"zipCode":"427","name":"\u6f6d\u5b50\u5340"},{"id":133,"zipCode":"428","name":"\u5927\u96c5\u5340"},{"id":134,"zipCode":"429","name":"\u795e\u5ca1\u5340"},{"id":135,"zipCode":"432","name":"\u5927\u809a\u5340"},{"id":136,"zipCode":"433","name":"\u6c99\u9e7f\u5340"},{"id":137,"zipCode":"434","name":"\u9f8d\u4e95\u5340"},{"id":138,"zipCode":"435","name":"\u68a7\u68f2\u5340"},{"id":139,"zipCode":"436","name":"\u6e05\u6c34\u5340"},{"id":140,"zipCode":"437","name":"\u5927\u7532\u5340"},{"id":141,"zipCode":"438","name":"\u5916\u57d4\u5340"},{"id":142,"zipCode":"439","name":"\u5927\u5b89\u5340"}]},{"id":"12","name":"\u5f70\u5316\u7e23","districts":[{"id":143,"zipCode":"500","name":"\u5f70\u5316\u5e02"},{"id":144,"zipCode":"502","name":"\u82ac\u5712\u9109"},{"id":145,"zipCode":"503","name":"\u82b1\u58c7\u9109"},{"id":146,"zipCode":"504","name":"\u79c0\u6c34\u9109"},{"id":147,"zipCode":"505","name":"\u9e7f\u6e2f\u93ae"},{"id":148,"zipCode":"506","name":"\u798f\u8208\u9109"},{"id":149,"zipCode":"507","name":"\u7dda\u897f\u9109"},{"id":150,"zipCode":"508","name":"\u548c\u7f8e\u93ae"},{"id":151,"zipCode":"509","name":"\u4f38\u6e2f\u9109"},{"id":152,"zipCode":"510","name":"\u54e1\u6797\u5e02"},{"id":153,"zipCode":"511","name":"\u793e\u982d\u9109"},{"id":154,"zipCode":"512","name":"\u6c38\u9756\u9109"},{"id":155,"zipCode":"513","name":"\u57d4\u5fc3\u9109"},{"id":156,"zipCode":"514","name":"\u6eaa\u6e56\u93ae"},{"id":157,"zipCode":"515","name":"\u5927\u6751\u9109"},{"id":158,"zipCode":"516","name":"\u57d4\u9e7d\u9109"},{"id":159,"zipCode":"520","name":"\u7530\u4e2d\u93ae"},{"id":160,"zipCode":"521","name":"\u5317\u6597\u93ae"},{"id":161,"zipCode":"522","name":"\u7530\u5c3e\u9109"},{"id":162,"zipCode":"523","name":"\u57e4\u982d\u9109"},{"id":163,"zipCode":"524","name":"\u6eaa\u5dde\u9109"},{"id":164,"zipCode":"525","name":"\u7af9\u5858\u9109"},{"id":165,"zipCode":"526","name":"\u4e8c\u6797\u93ae"},{"id":166,"zipCode":"527","name":"\u5927\u57ce\u9109"},{"id":167,"zipCode":"528","name":"\u82b3\u82d1\u9109"},{"id":168,"zipCode":"530","name":"\u4e8c\u6c34\u9109"}]},{"id":"13","name":"\u5357\u6295\u7e23","districts":[{"id":169,"zipCode":"540","name":"\u5357\u6295\u5e02"},{"id":170,"zipCode":"541","name":"\u4e2d\u5bee\u9109"},{"id":171,"zipCode":"542","name":"\u8349\u5c6f\u93ae"},{"id":172,"zipCode":"544","name":"\u570b\u59d3\u9109"},{"id":173,"zipCode":"545","name":"\u57d4\u91cc\u93ae"},{"id":174,"zipCode":"546","name":"\u4ec1\u611b\u9109"},{"id":175,"zipCode":"551","name":"\u540d\u9593\u9109"},{"id":176,"zipCode":"552","name":"\u96c6\u96c6\u93ae"},{"id":177,"zipCode":"553","name":"\u6c34\u91cc\u9109"},{"id":178,"zipCode":"555","name":"\u9b5a\u6c60\u9109"},{"id":179,"zipCode":"556","name":"\u4fe1\u7fa9\u9109"},{"id":180,"zipCode":"557","name":"\u7af9\u5c71\u93ae"},{"id":181,"zipCode":"558","name":"\u9e7f\u8c37\u9109"}]},{"id":"14","name":"\u5609\u7fa9\u5e02","districts":[{"id":182,"zipCode":"600","name":"\u5609\u7fa9\u5e02"},{"id":183,"zipCode":"600","name":"\u6771\u5340"},{"id":184,"zipCode":"600","name":"\u897f\u5340"}]},{"id":"15","name":"\u5609\u7fa9\u7e23","districts":[{"id":185,"zipCode":"602","name":"\u756a\u8def\u9109"},{"id":186,"zipCode":"603","name":"\u6885\u5c71\u9109"},{"id":187,"zipCode":"604","name":"\u7af9\u5d0e\u9109"},{"id":188,"zipCode":"605","name":"\u963f\u91cc\u5c71"},{"id":189,"zipCode":"606","name":"\u4e2d\u57d4\u9109"},{"id":190,"zipCode":"607","name":"\u5927\u57d4\u9109"},{"id":191,"zipCode":"608","name":"\u6c34\u4e0a\u9109"},{"id":192,"zipCode":"611","name":"\u9e7f\u8349\u9109"},{"id":193,"zipCode":"612","name":"\u592a\u4fdd\u5e02"},{"id":194,"zipCode":"613","name":"\u6734\u5b50\u5e02"},{"id":195,"zipCode":"614","name":"\u6771\u77f3\u9109"},{"id":196,"zipCode":"615","name":"\u516d\u8173\u9109"},{"id":197,"zipCode":"616","name":"\u65b0\u6e2f\u9109"},{"id":198,"zipCode":"621","name":"\u6c11\u96c4\u9109"},{"id":199,"zipCode":"622","name":"\u5927\u6797\u93ae"},{"id":200,"zipCode":"623","name":"\u6eaa\u53e3\u9109"},{"id":201,"zipCode":"624","name":"\u7fa9\u7af9\u9109"},{"id":202,"zipCode":"625","name":"\u5e03\u888b\u93ae"}]},{"id":"16","name":"\u96f2\u6797\u7e23","districts":[{"id":203,"zipCode":"630","name":"\u6597\u5357\u93ae"},{"id":204,"zipCode":"631","name":"\u5927\u57e4\u9109"},{"id":205,"zipCode":"632","name":"\u864e\u5c3e\u93ae"},{"id":206,"zipCode":"633","name":"\u571f\u5eab\u93ae"},{"id":207,"zipCode":"634","name":"\u8912\u5fe0\u9109"},{"id":208,"zipCode":"635","name":"\u6771\u52e2\u9109"},{"id":209,"zipCode":"636","name":"\u53f0\u897f\u9109"},{"id":210,"zipCode":"637","name":"\u5d19\u80cc\u9109"},{"id":211,"zipCode":"638","name":"\u9ea5\u5bee\u9109"},{"id":212,"zipCode":"640","name":"\u6597\u516d\u5e02"},{"id":213,"zipCode":"643","name":"\u6797\u5167\u9109"},{"id":214,"zipCode":"646","name":"\u53e4\u5751\u9109"},{"id":215,"zipCode":"647","name":"\u83bf\u6850\u9109"},{"id":216,"zipCode":"648","name":"\u897f\u87ba\u93ae"},{"id":217,"zipCode":"649","name":"\u4e8c\u5d19\u9109"},{"id":218,"zipCode":"651","name":"\u5317\u6e2f\u93ae"},{"id":219,"zipCode":"652","name":"\u6c34\u6797\u9109"},{"id":220,"zipCode":"653","name":"\u53e3\u6e56\u9109"},{"id":221,"zipCode":"654","name":"\u56db\u6e56\u9109"},{"id":222,"zipCode":"655","name":"\u5143\u9577\u9109"}]},{"id":"17","name":"\u53f0\u5357\u5e02","districts":[{"id":224,"zipCode":"700","name":"\u4e2d\u897f\u5340"},{"id":225,"zipCode":"701","name":"\u6771\u5340"},{"id":226,"zipCode":"702","name":"\u5357\u5340"},{"id":228,"zipCode":"704","name":"\u5317\u5340"},{"id":229,"zipCode":"708","name":"\u5b89\u5e73\u5340"},{"id":230,"zipCode":"709","name":"\u5b89\u5357\u5340"},{"id":231,"zipCode":"710","name":"\u6c38\u5eb7\u5340"},{"id":232,"zipCode":"711","name":"\u6b78\u4ec1\u5340"},{"id":233,"zipCode":"712","name":"\u65b0\u5316\u5340"},{"id":234,"zipCode":"713","name":"\u5de6\u93ae\u5340"},{"id":235,"zipCode":"714","name":"\u7389\u4e95\u5340"},{"id":236,"zipCode":"715","name":"\u6960\u897f\u5340"},{"id":237,"zipCode":"716","name":"\u5357\u5316\u5340"},{"id":238,"zipCode":"717","name":"\u4ec1\u5fb7\u5340"},{"id":239,"zipCode":"718","name":"\u95dc\u5edf\u5340"},{"id":240,"zipCode":"719","name":"\u9f8d\u5d0e\u5340"},{"id":241,"zipCode":"720","name":"\u5b98\u7530\u5340"},{"id":242,"zipCode":"721","name":"\u9ebb\u8c46\u5340"},{"id":243,"zipCode":"722","name":"\u4f73\u91cc\u5340"},{"id":244,"zipCode":"723","name":"\u897f\u6e2f\u5340"},{"id":245,"zipCode":"724","name":"\u4e03\u80a1\u5340"},{"id":246,"zipCode":"725","name":"\u5c07\u8ecd\u5340"},{"id":247,"zipCode":"726","name":"\u5b78\u7532\u5340"},{"id":248,"zipCode":"727","name":"\u5317\u9580\u5340"},{"id":249,"zipCode":"730","name":"\u65b0\u71df\u5340"},{"id":250,"zipCode":"731","name":"\u5f8c\u58c1\u5340"},{"id":251,"zipCode":"732","name":"\u767d\u6cb3\u5340"},{"id":252,"zipCode":"733","name":"\u6771\u5c71\u5340"},{"id":253,"zipCode":"734","name":"\u516d\u7532\u5340"},{"id":254,"zipCode":"735","name":"\u4e0b\u71df\u5340"},{"id":255,"zipCode":"736","name":"\u67f3\u71df\u5340"},{"id":256,"zipCode":"737","name":"\u9e7d\u6c34\u5340"},{"id":257,"zipCode":"741","name":"\u5584\u5316\u5340"},{"id":258,"zipCode":"742","name":"\u5927\u5167\u5340"},{"id":259,"zipCode":"743","name":"\u5c71\u4e0a\u5340"},{"id":260,"zipCode":"744","name":"\u65b0\u5e02\u5340"},{"id":261,"zipCode":"745","name":"\u5b89\u5b9a\u5340"}]},{"id":"19","name":"\u9ad8\u96c4\u5e02","districts":[{"id":262,"zipCode":"800","name":"\u65b0\u8208\u5340"},{"id":263,"zipCode":"801","name":"\u524d\u91d1\u5340"},{"id":264,"zipCode":"802","name":"\u82d3\u96c5\u5340"},{"id":265,"zipCode":"803","name":"\u9e7d\u57d5\u5340"},{"id":266,"zipCode":"804","name":"\u9f13\u5c71\u5340"},{"id":267,"zipCode":"805","name":"\u65d7\u6d25\u5340"},{"id":268,"zipCode":"806","name":"\u524d\u93ae\u5340"},{"id":269,"zipCode":"807","name":"\u4e09\u6c11\u5340"},{"id":270,"zipCode":"811","name":"\u6960\u6893\u5340"},{"id":271,"zipCode":"812","name":"\u5c0f\u6e2f\u5340"},{"id":272,"zipCode":"813","name":"\u5de6\u71df\u5340"},{"id":275,"zipCode":"814","name":"\u4ec1\u6b66\u5340"},{"id":276,"zipCode":"815","name":"\u5927\u793e\u5340"},{"id":277,"zipCode":"820","name":"\u5ca1\u5c71\u5340"},{"id":278,"zipCode":"821","name":"\u8def\u7af9\u5340"},{"id":279,"zipCode":"822","name":"\u963f\u84ee\u5340"},{"id":280,"zipCode":"823","name":"\u7530\u5bee\u5340"},{"id":281,"zipCode":"824","name":"\u71d5\u5de2\u5340"},{"id":282,"zipCode":"825","name":"\u6a4b\u982d\u5340"},{"id":283,"zipCode":"826","name":"\u6893\u5b98\u5340"},{"id":284,"zipCode":"827","name":"\u5f4c\u9640\u5340"},{"id":285,"zipCode":"828","name":"\u6c38\u5b89\u5340"},{"id":286,"zipCode":"829","name":"\u6e56\u5167\u5340"},{"id":287,"zipCode":"830","name":"\u9cf3\u5c71\u5340"},{"id":288,"zipCode":"831","name":"\u5927\u5bee\u5340"},{"id":289,"zipCode":"832","name":"\u6797\u5712\u5340"},{"id":290,"zipCode":"833","name":"\u9ce5\u677e\u5340"},{"id":291,"zipCode":"840","name":"\u5927\u6a39\u5340"},{"id":292,"zipCode":"842","name":"\u65d7\u5c71\u5340"},{"id":293,"zipCode":"843","name":"\u7f8e\u6fc3\u5340"},{"id":294,"zipCode":"844","name":"\u516d\u9f9c\u5340"},{"id":295,"zipCode":"845","name":"\u5167\u9580\u5340"},{"id":296,"zipCode":"846","name":"\u6749\u6797\u5340"},{"id":297,"zipCode":"847","name":"\u7532\u4ed9\u5340"},{"id":298,"zipCode":"848","name":"\u6843\u6e90\u5340"},{"id":299,"zipCode":"849","name":"\u90a3\u746a\u590f\u5340"},{"id":300,"zipCode":"851","name":"\u8302\u6797\u5340"},{"id":301,"zipCode":"852","name":"\u8304\u8423\u5340"}]},{"id":"22","name":"\u6f8e\u6e56\u7e23","districts":[{"id":302,"zipCode":"880","name":"\u99ac\u516c\u5e02"},{"id":303,"zipCode":"881","name":"\u897f\u5dbc\u9109"},{"id":304,"zipCode":"882","name":"\u671b\u5b89\u9109"},{"id":305,"zipCode":"883","name":"\u4e03\u7f8e\u9109"},{"id":306,"zipCode":"884","name":"\u767d\u6c99\u9109"},{"id":307,"zipCode":"885","name":"\u6e56\u897f\u9109"}]},{"id":"23","name":"\u91d1\u9580\u7e23","districts":[{"id":308,"zipCode":"890","name":"\u91d1\u6c99\u93ae"},{"id":309,"zipCode":"891","name":"\u91d1\u6e56\u93ae"},{"id":310,"zipCode":"892","name":"\u91d1\u5be7\u9109"},{"id":311,"zipCode":"893","name":"\u91d1\u57ce\u93ae"},{"id":312,"zipCode":"894","name":"\u70c8\u5dbc\u9109"},{"id":313,"zipCode":"896","name":"\u70cf\u5775\u9109"}]},{"id":"24","name":"\u5c4f\u6771\u7e23","districts":[{"id":314,"zipCode":"900","name":"\u5c4f\u6771\u5e02"},{"id":315,"zipCode":"901","name":"\u4e09\u5730\u9580"},{"id":316,"zipCode":"902","name":"\u9727\u53f0\u9109"},{"id":317,"zipCode":"903","name":"\u746a\u5bb6\u9109"},{"id":318,"zipCode":"904","name":"\u4e5d\u5982\u9109"},{"id":319,"zipCode":"905","name":"\u91cc\u6e2f\u9109"},{"id":320,"zipCode":"906","name":"\u9ad8\u6a39\u9109"},{"id":321,"zipCode":"907","name":"\u9e7d\u57d4\u9109"},{"id":322,"zipCode":"908","name":"\u9577\u6cbb\u9109"},{"id":323,"zipCode":"909","name":"\u9e9f\u6d1b\u9109"},{"id":324,"zipCode":"911","name":"\u7af9\u7530\u9109"},{"id":325,"zipCode":"912","name":"\u5167\u57d4\u9109"},{"id":326,"zipCode":"913","name":"\u842c\u4e39\u9109"},{"id":327,"zipCode":"920","name":"\u6f6e\u5dde\u93ae"},{"id":328,"zipCode":"921","name":"\u6cf0\u6b66\u9109"},{"id":329,"zipCode":"922","name":"\u4f86\u7fa9\u9109"},{"id":330,"zipCode":"923","name":"\u842c\u5dd2\u9109"},{"id":331,"zipCode":"924","name":"\u5d01\u9802\u9109"},{"id":332,"zipCode":"925","name":"\u65b0\u57e4\u9109"},{"id":333,"zipCode":"926","name":"\u5357\u5dde\u9109"},{"id":334,"zipCode":"927","name":"\u6797\u908a\u9109"},{"id":335,"zipCode":"928","name":"\u6771\u6e2f\u93ae"},{"id":336,"zipCode":"929","name":"\u7409\u7403\u9109"},{"id":337,"zipCode":"931","name":"\u4f73\u51ac\u9109"},{"id":338,"zipCode":"932","name":"\u65b0\u5712\u9109"},{"id":339,"zipCode":"940","name":"\u678b\u5bee\u9109"},{"id":340,"zipCode":"941","name":"\u678b\u5c71\u9109"},{"id":341,"zipCode":"942","name":"\u6625\u65e5\u9109"},{"id":342,"zipCode":"943","name":"\u7345\u5b50\u9109"},{"id":343,"zipCode":"944","name":"\u8eca\u57ce\u9109"},{"id":344,"zipCode":"945","name":"\u7261\u4e39\u9109"},{"id":345,"zipCode":"946","name":"\u6046\u6625\u93ae"},{"id":346,"zipCode":"947","name":"\u6eff\u5dde\u9109"}]},{"id":"25","name":"\u53f0\u6771\u7e23","districts":[{"id":347,"zipCode":"950","name":"\u53f0\u6771\u5e02"},{"id":348,"zipCode":"951","name":"\u7da0\u5cf6\u9109"},{"id":349,"zipCode":"952","name":"\u862d\u5dbc\u9109"},{"id":350,"zipCode":"953","name":"\u5ef6\u5e73\u9109"},{"id":351,"zipCode":"954","name":"\u5351\u5357\u9109"},{"id":352,"zipCode":"955","name":"\u9e7f\u91ce\u9109"},{"id":353,"zipCode":"956","name":"\u95dc\u5c71\u93ae"},{"id":354,"zipCode":"957","name":"\u6d77\u7aef\u9109"},{"id":355,"zipCode":"958","name":"\u6c60\u4e0a\u9109"},{"id":356,"zipCode":"959","name":"\u6771\u6cb3\u9109"},{"id":357,"zipCode":"961","name":"\u6210\u529f\u93ae"},{"id":358,"zipCode":"962","name":"\u9577\u6ff1\u9109"},{"id":359,"zipCode":"963","name":"\u592a\u9ebb\u91cc\u9109"},{"id":360,"zipCode":"964","name":"\u91d1\u5cf0\u9109"},{"id":361,"zipCode":"965","name":"\u5927\u6b66\u9109"},{"id":362,"zipCode":"966","name":"\u9054\u4ec1\u9109"}]},{"id":"26","name":"\u82b1\u84ee\u7e23","districts":[{"id":363,"zipCode":"970","name":"\u82b1\u84ee\u5e02"},{"id":364,"zipCode":"971","name":"\u65b0\u57ce\u9109"},{"id":365,"zipCode":"972","name":"\u79c0\u6797\u9109"},{"id":366,"zipCode":"973","name":"\u5409\u5b89\u9109"},{"id":367,"zipCode":"974","name":"\u58fd\u8c50\u9109"},{"id":368,"zipCode":"975","name":"\u9cf3\u6797\u93ae"},{"id":369,"zipCode":"976","name":"\u5149\u5fa9\u9109"},{"id":370,"zipCode":"977","name":"\u8c50\u6ff1\u9109"},{"id":371,"zipCode":"978","name":"\u745e\u7a57\u9109"},{"id":372,"zipCode":"979","name":"\u842c\u69ae\u9109"},{"id":373,"zipCode":"981","name":"\u7389\u91cc\u93ae"},{"id":374,"zipCode":"982","name":"\u5353\u6eaa\u9109"},{"id":375,"zipCode":"983","name":"\u5bcc\u91cc\u9109"}]}]')}},[[168,1,2]]]);
//# sourceMappingURL=main.69d563d6.chunk.js.map