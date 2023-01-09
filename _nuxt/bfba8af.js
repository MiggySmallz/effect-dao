(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{1162:function(t,e,o){"use strict";o.r(e);o(28),o(70),o(60),o(69),o(47);var n=o(3),l=o(716),r=o(183),c={components:{Proposals:l.default,ConnectWallet:r.default},head:function(){return{title:"Proposals"}},data:function(){return{filter:"ACTIVE",statuses:[{id:"ACTIVE",name:"Active"},{id:"PENDING",name:"Pending"},{id:"DRAFT",name:"Draft"},{id:"PROCESSING",name:"Processing"},{id:"CLOSED",name:"Closed"},{id:"ALL",name:"All"}],loading:!1,proposals:null,moreProposals:null,nextKey:null}},computed:{wallet:function(){return this.$wallet?this.$wallet.wallet:null},proposalsFiltered:function(){var t=this;if("ACTIVE"===this.filter)return this.proposals.filter((function(t){return"ACTIVE"===t.status||"PENDING"===t.status}));var e=this.proposals.filter((function(e){return!t.filter||"ALL"===t.filter||e.status===t.filter})),o=e.filter((function(t){return"ACTIVE"===t.status})).reverse(),n=e.filter((function(t){return"PENDING"===t.status})).reverse(),l=e.filter((function(t){return"PROCESSING"===t.status})).reverse(),r=e.filter((function(t){return"DRAFT"===t.status})).reverse(),c=e.filter((function(t){return"CLOSED"===t.status})).reverse();return[].concat(o,n,l,r,c)},currentCycle:function(){return this.$dao.proposalConfig?this.$dao.proposalConfig.current_cycle:null}},watch:{currentCycle:function(){this.getProposals()}},created:function(){this.getProposals()},methods:{getProposals:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var o,data;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t.loading=!0,!t.$dao.proposalConfig){e.next=19;break}return e.prev=2,o={code:"daoproposals",scope:"daoproposals",table:"proposal",limit:20},t.nextKey&&(o.lower_bound=t.nextKey),e.next=7,t.$eos.rpc.get_table_rows(o);case 7:data=e.sent,t.moreProposals=data.more,t.nextKey=data.next_key,t.proposals?t.proposals=t.proposals.concat(data.rows):t.proposals=data.rows,t.proposals.forEach(function(){var e=Object(n.a)(regeneratorRuntime.mark((function e(o){var n,l,r,c,d;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(o.status){e.next=12;break}if(n="CLOSED",0!==o.state){e.next=11;break}if(o.cycle){e.next=7;break}n="DRAFT",e.next=11;break;case 7:return e.next=9,t.$dao.getCycleConfig(o.cycle);case 9:l=e.sent,n=l&&o.cycle===t.$dao.proposalConfig.current_cycle&&t.$moment(l.start_time+"Z").add(t.$dao.proposalConfig.cycle_voting_duration_sec,"seconds").isAfter()?"ACTIVE":l&&t.$moment(l.start_time+"Z").add(t.$dao.proposalConfig.cycle_voting_duration_sec,"seconds").isBefore()||l&&o.cycle<t.currentCycle?"PROCESSING":"PENDING";case 11:t.$set(o,"status",n);case 12:if(o.title){e.next=23;break}return e.prev=13,e.next=16,t.$dao.getIpfsContent(o.content_hash);case 16:r=e.sent,t.$set(o,"title",r.title),e.next=23;break;case 20:e.prev=20,e.t0=e.catch(13),console.error(e.t0);case 23:if("ACTIVE"!==o.status||!t.wallet){e.next=30;break}return c=t.wallet.accountInfo.account_name,d=t.$helpers.getCompositeKey(c,o.id),e.next=28,t.$eos.rpc.get_table_rows({code:"daoproposals",scope:"daoproposals",table:"vote",key_type:"i128",index_position:2,lower_bound:d,upper_bound:d,limit:10});case 28:e.sent.rows.forEach((function(e){o.id===e.proposal_id&&t.$set(o,"vote_status",e.type)}));case 30:case"end":return e.stop()}}),e,null,[[13,20]])})));return function(t){return e.apply(this,arguments)}}()),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(2),console.log(e.t0);case 17:t.moreProposals&&t.getProposals(),t.loading=!1;case 19:case"end":return e.stop()}}),e,null,[[2,14]])})))()}}},d=o(25),component=Object(d.a)(c,(function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",[o("div",{staticClass:"has-text-centered"},[o("nuxt-link",{staticClass:"button is-primary is-wide m-2",attrs:{to:"/proposals/new"}},[t._v("\n      New Proposal\n    ")]),t._v(" "),t.wallet&&t.wallet.auth?o("nuxt-link",{staticClass:"button is-primary is-wide m-2 is-outlined",attrs:{to:"/account/"+t.wallet.auth.accountName}},[t._v("\n      Your Proposals\n    ")]):o("ConnectWallet",{attrs:{title:"Your Proposals","button-class":"is-wide is-outlined m-2"}})],1),t._v(" "),o("div",{staticClass:"box mt-5"},[o("h4",{staticClass:"subtitle box-title mb-0 is-4 has-text-weight-bold"},[t._v("\n      Proposals\n      "),o("div",{staticClass:"is-size-6 mt-2"},[o("small",[t.$dao.cycleConfig&&t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_voting_duration_sec,"seconds").isAfter()?o("span",[t.currentCycle?o("span",[t._v("Cycle "+t._s(t.currentCycle)+"\n              "),t.$dao.cycleConfig?o("span",[t._v("\n                started "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").fromNow())+" and ends "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow())+" "),o("br"),t._v("\n                Voting ends "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_voting_duration_sec,"seconds").fromNow())+"\n              ")]):t._e()]):t._e()]):t.$dao.cycleConfig&&t.currentCycle?o("span",[t._v("\n            New cycle starts "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow())+"\n          ")]):t.$dao.cycleConfig?o("span",[t._v("\n            Waiting for "),o("i",[t._v("Genesis Cycle")]),t._v(" "),t.$dao.cycleConfig?o("span",[t._v("start "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow()))]):t._e()]):t._e()])])]),t._v(" "),o("div",{staticClass:"tabs"},[o("ul",t._l(t.statuses,(function(e){return o("li",{key:e.id,class:{"is-active":t.filter===e.id}},["Pending"!=e.name?o("a",{on:{click:function(o){o.preventDefault(),t.filter=e.id}}},[t._v(t._s(e.name))]):t._e()])})),0)]),t._v(" "),t.$dao.cycleConfig?[t.currentCycle?["ACTIVE"===t.filter?o("h5"):"PENDING"===t.filter?o("h5",[t._v("\n          Proposals for cycle "+t._s(t.currentCycle+1)+" starting "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow())+"\n        ")]):t._e()]:["ACTIVE"===t.filter?o("h5",[t._v("\n          Waiting for "),o("i",[t._v("Genesis Cycle")]),t._v(" "+t._s(t.currentCycle+1)+" start "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow())+"\n        ")]):t._e(),t._v(" "),"PENDING"===t.filter?o("h5",[t._v("\n          Proposals for "),o("i",[t._v("Genesis Cycle")]),t._v(" "+t._s(t.currentCycle+1)+" starting "+t._s(t.$moment(t.$dao.cycleConfig.start_time+"Z").add(t.$dao.proposalConfig.cycle_duration_sec,"seconds").fromNow())+"\n        ")]):t._e()]]:t._e(),t._v(" "),"DRAFT"===t.filter?o("h5",[t._v("\n      Not yet assigned to a cycle\n    ")]):"CLOSED"===t.filter?o("h5",[t._v("\n      Accepted or rejected proposals\n    ")]):t._e(),t._v(" "),t.proposals&&t.proposals.length>0?o("proposals",{attrs:{proposals:t.proposalsFiltered}}):t.proposals&&0==t.proposals.length?o("div",[t._v("\n      No proposals\n    ")]):t._e(),t._v(" "),t.loading?o("h4",{staticClass:"has-text-centered"},[t._v("\n      Loading proposals..\n    ")]):t._e()],2)])}),[],!1,null,null,null);e.default=component.exports;installComponents(component,{ConnectWallet:o(183).default,Proposals:o(716).default})},709:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSI2cHgiIHZpZXdCb3g9IjAgMCAxOCA2IiB2ZXJzaW9uPSIxLjEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPgogICAgPCEtLSBHZW5lcmF0b3I6IFNrZXRjaCA1OSAoODYxMjcpIC0gaHR0cHM6Ly9za2V0Y2guY29tIC0tPgogICAgPHRpdGxlPmVwbXR5PC90aXRsZT4KICAgIDxkZXNjPkNyZWF0ZWQgd2l0aCBTa2V0Y2guPC9kZXNjPgogICAgPGcgaWQ9ImRlc2t0b3AiIHN0cm9rZT0ibm9uZSIgc3Ryb2tlLXdpZHRoPSIxIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIGZpbGwtb3BhY2l0eT0iMC40Ij4KICAgICAgICA8cmVjdCBpZD0iZXBtdHkiIHN0cm9rZT0iI0IxQjFCMSIgZmlsbD0iI0NERDRFNiIgeD0iMC41IiB5PSIwLjUiIHdpZHRoPSIxNyIgaGVpZ2h0PSI1IiByeD0iMSI+PC9yZWN0PgogICAgPC9nPgo8L3N2Zz4="},710:function(t,e,o){var content=o(735);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(59).default)("f5779490",content,!0,{sourceMap:!1})},716:function(t,e,o){"use strict";o.r(e);var n={props:["proposals"],data:function(){return{voteTypes:[{value:1,name:"Y",fullName:"Yes"},{value:0,name:"A",fullName:"Abstain"},{value:2,name:"N",fullName:"No"}],categories:{0:"Governance Proposal",1:"Marketing",2:"Design",3:"Technical",4:"Other",5:"Sentiment"}}},methods:{print:function(t){console.log(t)}}},l=(o(734),o(25)),component=Object(l.a)(n,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.proposals?n("div",{staticClass:"proposals"},[t.proposals.length>0?n("div",t._l(t.proposals,(function(e){return n("nuxt-link",{key:e.id,staticClass:"box has-shadow-outside is-narrow",attrs:{to:"/proposals/"+e.id}},[n("div",{staticClass:"columns is-desktop is-gapless"},[n("div",{staticClass:"has-text-weight-light column  is-9"},[e.title?n("b",[null!=e.vote_counts[1]&&null!=e.vote_counts[2]?n("span",{staticClass:"icon"},[e.vote_counts[1].value>e.vote_counts[2].value?n("img",{attrs:{src:o(732)}}):e.vote_counts[1].value<e.vote_counts[2].value?n("img",{attrs:{src:o(733)}}):n("img",{attrs:{src:o(709)}})]):n("span",{staticClass:"icon"},[n("img",{attrs:{src:o(709)}})]),t._v("\n            #"+t._s(e.id)+": "+t._s(t._f("truncate")(e.title,60)))]):n("b",[t._v("...")]),t._v(" "),n("div",{staticClass:"has-text-weight-light"},[Object.keys(e).includes("vote_status")?n("small",{staticClass:"vote_indicator"},[n("span",{class:{"is-dark":0===e.vote_status,"is-danger":2===e.vote_status,"is-success":1===e.vote_status},attrs:{"data-tooltip":"Your vote answer is: "+t.voteTypes.find((function(t){return t.value===e.vote_status})).fullName}},[n("font-awesome-icon",{attrs:{icon:["fas","check-square"]}})],1)]):t._e(),t._v(" "),n("small",[e.cycle?n("div",{staticClass:"tag"},[t._v("C"+t._s(e.cycle))]):n("div",{staticClass:"tag"},[t._v("N/A")])]),t._v(" "),n("small",{staticClass:"mr-1"},[t._v(" by "),n("nuxt-link",{attrs:{to:"/account/"+e.author}},[t._v(t._s(e.author))])],1),t._v(" "),n("small",t._l(e.pay,(function(e,o){return n("span",{key:o},[o>0?n("span",[t._v(",")]):t._e(),t._v(" "+t._s(t.$wallet.formatNumber(parseInt(e.field_0.quantity)))+" EFX")])})),0)]),t._v(" "),n("div",{staticClass:"has-text-weight-light"},[n("small",[t._v("Created On: "+t._s(e.pay[0].field_1.split("T")[0]))])])]),t._v(" "),n("div",{staticClass:"column is-3 has-text-right"},[n("div",{staticClass:"tag",class:{"is-success":"ACTIVE"==e.status,"is-warning":"DRAFT"==e.status,"is-link":"PENDING"==e.status,"is-dark":"CLOSED"==e.status}},[t._v("\n            "+t._s(e.status)+"\n          ")]),t._v(" "),e.msig?n("span",{staticClass:"tag is-info"},[t._v("⚡ ATP")]):t._e()])])])})),1):n("h5",{staticClass:"has-text-centered subtitle"},[t._v("\n    No Proposals\n  ")])]):t._e()}),[],!1,null,"7f86b5c9",null);e.default=component.exports},732:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTggMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+dXA8L3RpdGxlPgogICAgPGRlc2M+Q3JlYXRlZCB3aXRoIFNrZXRjaC48L2Rlc2M+CiAgICA8ZyBpZD0iZGVza3RvcCIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgZmlsbC1vcGFjaXR5PSIwLjEiPgogICAgICAgIDxwYXRoIGQ9Ik05LjM1MzU1MzM5LDEuMDYwNjYwMTcgQzkuMTU4MjkxMjQsMC44NjUzOTgwMjYgOC44NDE3MDg3NiwwLjg2NTM5ODAyNiA4LjY0NjQ0NjYxLDEuMDYwNjYwMTcgTDEuMDYwNjYwMTcsOC42NDY0NDY2MSBDMC45NjY4OTE5ODMsOC43NDAyMTQ4IDAuOTE0MjEzNTYyLDguODY3MzkxNzYgMC45MTQyMTM1NjIsOSBDMC45MTQyMTM1NjIsOS4yNzYxNDIzNyAxLjEzODA3MTE5LDkuNSAxLjQxNDIxMzU2LDkuNSBMMTYuNTg1Nzg2NCw5LjUgQzE2LjcxODM5NDcsOS41IDE2Ljg0NTU3MTYsOS40NDczMjE1OCAxNi45MzkzMzk4LDkuMzUzNTUzMzkgQzE3LjEzNDYwMiw5LjE1ODI5MTI0IDE3LjEzNDYwMiw4Ljg0MTcwODc2IDE2LjkzOTMzOTgsOC42NDY0NDY2MSBMOS4zNTM1NTMzOSwxLjA2MDY2MDE3IFoiIGlkPSJ1cCIgc3Ryb2tlPSIjNTFCNDQxIiBmaWxsPSIjNTFCNDQxIj48L3BhdGg+CiAgICA8L2c+Cjwvc3ZnPg=="},733:function(t,e){t.exports="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0iVVRGLTgiPz4KPHN2ZyB3aWR0aD0iMThweCIgaGVpZ2h0PSIxMHB4IiB2aWV3Qm94PSIwIDAgMTggMTAiIHZlcnNpb249IjEuMSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8IS0tIEdlbmVyYXRvcjogU2tldGNoIDU5ICg4NjEyNykgLSBodHRwczovL3NrZXRjaC5jb20gLS0+CiAgICA8dGl0bGU+ZG93bjwvdGl0bGU+CiAgICA8ZGVzYz5DcmVhdGVkIHdpdGggU2tldGNoLjwvZGVzYz4KICAgIDxnIGlkPSJkZXNrdG9wIiBzdHJva2U9Im5vbmUiIHN0cm9rZS13aWR0aD0iMSIgZmlsbD0ibm9uZSIgZmlsbC1ydWxlPSJldmVub2RkIiBmaWxsLW9wYWNpdHk9IjAuMSI+CiAgICAgICAgPHBhdGggZD0iTTkuMzUzNTUzMzksMS4wNjA2NjAxNyBDOS4xNTgyOTEyNCwwLjg2NTM5ODAyNiA4Ljg0MTcwODc2LDAuODY1Mzk4MDI2IDguNjQ2NDQ2NjEsMS4wNjA2NjAxNyBMMS4wNjA2NjAxNyw4LjY0NjQ0NjYxIEMwLjk2Njg5MTk4Myw4Ljc0MDIxNDggMC45MTQyMTM1NjIsOC44NjczOTE3NiAwLjkxNDIxMzU2Miw5IEMwLjkxNDIxMzU2Miw5LjI3NjE0MjM3IDEuMTM4MDcxMTksOS41IDEuNDE0MjEzNTYsOS41IEwxNi41ODU3ODY0LDkuNSBDMTYuNzE4Mzk0Nyw5LjUgMTYuODQ1NTcxNiw5LjQ0NzMyMTU4IDE2LjkzOTMzOTgsOS4zNTM1NTMzOSBDMTcuMTM0NjAyLDkuMTU4MjkxMjQgMTcuMTM0NjAyLDguODQxNzA4NzYgMTYuOTM5MzM5OCw4LjY0NjQ0NjYxIEw5LjM1MzU1MzM5LDEuMDYwNjYwMTcgWiIgaWQ9ImRvd24iIHN0cm9rZT0iI0M4MUQwMCIgZmlsbD0iI0M4MUQwMCIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoOS4wMDAwMDAsIDUuMDAwMDAwKSBzY2FsZSgxLCAtMSkgdHJhbnNsYXRlKC05LjAwMDAwMCwgLTUuMDAwMDAwKSAiPjwvcGF0aD4KICAgIDwvZz4KPC9zdmc+"},734:function(t,e,o){"use strict";o(710)},735:function(t,e,o){(e=o(58)(!1)).push([t.i,"@import url(https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap);"]),e.push([t.i,"@import url(https://use.typekit.net/kej5qyk.css);"]),e.push([t.i,'.proposals .media-left[data-v-7f86b5c9]{min-width:72px}.vote-result[data-v-7f86b5c9]:after{content:" - "}.vote-result[data-v-7f86b5c9]:last-of-type:after{content:""}.media[data-v-7f86b5c9]{flex-wrap:wrap}.icon[data-v-7f86b5c9]{height:23px;width:40px}small.vote_indicator[data-v-7f86b5c9]{margin-left:14px}',""]),t.exports=e}}]);