(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{BTho:function(t,s,a){"use strict";var i=a("2oRo"),n=a("4zBA"),e=a("We1y"),r=a("hh1v"),o=a("Gi26"),c=a("82ph"),l=a("QNWe"),u=i.Function,h=n([].concat),k=n([].join),p={},d=function(t,s,a){if(!o(p,s)){for(var i=[],n=0;n<s;n++)i[n]="a["+n+"]";p[s]=u("C,a","return new C("+k(i,",")+")")}return p[s](t,a)};t.exports=l?u.bind:function(t){var s=e(this),a=s.prototype,i=c(arguments,1),n=function(){var a=h(i,c(arguments));return this instanceof n?d(s,a.length,a):s.apply(t,a)};return r(a)&&(n.prototype=a),n}},Rus8:function(t,s,a){},V2Jj:function(t,s,a){"use strict";a("Rus8")},odGf:function(t,s,a){"use strict";a.r(s);var i=a("VTBJ"),n=(a("R5XZ"),a("wLYn"),a("oVuX"),a("rB9j"),a("EnZy"),a("sMBO"),{props:["user","api_key","refresh_rate"],data:function(){return{track:"Ominous Cloud",album:"Haha Sound",artist:"Broadcast",nowplaying:null,err:"nojs",fave_track_i:0,fave_tracks:[{artist:"Broadcast",album:"Haha Sound",track:"Ominous Cloud"},{artist:"Tennis",album:"Young & Old",track:"My Better Self"},{artist:"Cults",album:"Cults",track:"Oh My God"},{artist:"Wild Nothing",album:"Gemini",track:"Live in Dreams"},{artist:"Crystal Castles",album:"(II)",track:"Not In Love - Radio Version"}]}},mounted:function(){this.getMostRecentTrack(),setInterval(function(){this.getMostRecentTrack()}.bind(this),this.refresh_rate)},computed:{artist_link:function(){return"https://www.last.fm/music/"+this.artist.split(" ").join("+").split("/").join("%2F")},track_link:function(){return("https://www.last.fm/music/"+this.artist.split("/").join("%2F")+"/"+this.album.split("/").join("%2F")+"/"+this.track.split("/").join("%2F")).split(" ").join("+")}},methods:{getMostRecentTrack:function(){this.axios.get("https://ws.audioscrobbler.com/2.0/?format=json",{params:{method:"user.getrecenttracks",user:this.user,limit:1,api_key:this.api_key}}).then(function(t){this.artist=t.data.recenttracks.track[0].artist["#text"],this.album=t.data.recenttracks.track[0].album["#text"],this.track=t.data.recenttracks.track[0].name,this.nowplaying=!!t.data.recenttracks.track[0]["@attr"]&&t.data.recenttracks.track[0]["@attr"].nowplaying,this.err=null}.bind(this)).catch(function(t){console.log("Listening-to widged went wrong :(\n",t),this.err=t,this.artist=this.fave_tracks[this.fave_track_i].artist,this.album=this.fave_tracks[this.fave_track_i].album,this.track=this.fave_tracks[this.fave_track_i].track,this.nowplaying=!1,this.fave_track_i=(this.fave_track_i+1)%fave_tracks.length}.bind(this))}}}),e=(a("zMDf"),a("KHd+")),r=Object(e.a)(n,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"listening-to"},[a("svg",{class:{"headphones-icon":!0,live:t.nowplaying},attrs:{xmlns:"http://www.w3.org/2000/svg",width:"15px",height:"15px"}},[a("line",{attrs:{x1:"16.6%",y1:"83.3%",x2:"16.6%",y2:"40%","stroke-width":"2px"}}),a("line",{attrs:{x1:"16.6%",y1:"40%",x2:"16.6%",y2:"16.6%","stroke-width":"0.5px"}}),a("line",{attrs:{x1:"16.6%",y1:"16.6%",x2:"83.3%",y2:"16.6%","stroke-width":"0.5px"}}),a("line",{attrs:{x1:"83.3%",y1:"16.6%",x2:"83.3%",y2:"40%","stroke-width":"0.5px"}}),a("line",{attrs:{x1:"83.3%",y1:"40%",x2:"83.3%",y2:"83.3%","stroke-width":"2px"}}),a("circle",{attrs:{id:"circle",cx:"50%",cy:"61.65%",r:"15%",stroke:"rgba(0,0,0,0)",fill:"rgba(0,0,0,0)"}})]),null==t.err?a("span",{staticClass:"title"},[t._v("\n    "+t._s(t.nowplaying?"Currently Listening To:":"Last Listened To:")+" \n  ")]):a("span",{staticClass:"title"},[t._v("\n    A Favourite Song:\n  ")]),null!=t.track?a("span",{staticClass:"track"},[a("g-link",{staticClass:"link",attrs:{to:t.artist_link}},[t._v(t._s(t.artist))]),a("span",{staticClass:"sep"},[t._v(" - ")]),a("g-link",{staticClass:"link",attrs:{to:t.track_link}},[t._v(t._s(t.track))])],1):t._e()])}),[],!1,null,"c47cf24c",null).exports,o=a("iSP7"),c={metaInfo:function(){return Object(i.a)({},this.$ogp({title:"About",description:this.$page.allAbout.edges[0].node.bio,image:"https://joshuarainbow.co.uk"+this.$page.allAbout.edges[0].node.cover_image.src}))},components:{ListeningTo:r,Logo:a.n(o).a}},l=(a("V2Jj"),null),u=Object(e.a)(c,(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("Layout",[a("main",{staticClass:"main"},[a("Logo",{staticClass:"logo-bg"}),a("div",{staticClass:"about-cont"},[a("div",{staticClass:"cover-image-cont"},[a("g-image",{staticClass:"cover-image",attrs:{alt:"A photograph of Josh",src:t.$page.allAbout.edges[0].node.cover_image}})],1),a("div",{staticClass:"info-cont"},[a("h1",{staticClass:"title"},[t._v(t._s(t.$page.allAbout.edges[0].node.name))]),a("p",{staticClass:"bio"},[t._v(t._s(t.$page.allAbout.edges[0].node.bio))]),a("ul",{staticClass:"social-links"},t._l(t.$page.allAbout.edges[0].node.social_links,(function(s){return a("li",{key:s.link,staticClass:"social-li"},[a("g-link",{staticClass:"social-link link",attrs:{to:s.link}},[t._v(t._s(s.platform))])],1)})),0),a("listening-to",{staticClass:"listening-to",attrs:{api_key:"c49513b422b272720a73dc8c4c4d398d",user:"theteacat",refresh_rate:"30000"}})],1)])],1)])}),[],!1,null,"879c2258",null);"function"==typeof l&&l(u);s.default=u.exports},wLYn:function(t,s,a){var i=a("I+eb"),n=a("BTho");i({target:"Function",proto:!0,forced:Function.bind!==n},{bind:n})},wcFd:function(t,s,a){},zMDf:function(t,s,a){"use strict";a("wcFd")}}]);