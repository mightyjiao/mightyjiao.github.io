(self.webpackChunk=self.webpackChunk||[]).push([[727,430,426],{2374:(i,r,e)=>{var t=e(8081),n=e(3645),l=n(t);l.push([i.id,".empty[data-v-2950a167]{color:#909096;height:100%;justify-content:center;position:absolute;width:100%}.content[data-v-2950a167],.empty[data-v-2950a167]{align-items:center;display:flex}.content[data-v-2950a167]{flex-direction:column;margin-bottom:200px}.content[data-v-2950a167]:hover{color:#1c7dff;cursor:pointer}.empty.active[data-v-2950a167]{color:#1c7dff}.tip[data-v-2950a167]{font-size:24px;margin-top:20px}",""]),i.exports=l},2750:(i,r,e)=>{var t=e(8081),n=e(3645),l=n(t);l.push([i.id,".page[data-v-31014ce8]{display:flex;flex-direction:column;height:100%}.editor-body[data-v-31014ce8]{display:flex;flex:1;height:0}.canvas-container[data-v-31014ce8]{flex:1;position:relative;width:0}h1[data-v-31014ce8]{font-family:sans-serif;font-size:16px;margin-right:12px}.flex-auto[data-v-31014ce8]{flex:1;width:0}",""]),i.exports=l},6848:(i,r,e)=>{var t=e(2374);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[i.id,t,""]]),t.locals&&(i.exports=t.locals);var n=e(5346).Z,l=n("6ece9e97",t,!0,{sourceMap:!1})},9583:(i,r,e)=>{var t=e(2750);t.__esModule&&(t=t.default),typeof t=="string"&&(t=[[i.id,t,""]]),t.locals&&(i.exports=t.locals);var n=e(5346).Z,l=n("0971590d",t,!0,{sourceMap:!1})},6716:(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>L});var t=e(6252),n=e(3577),l=e(2262);const o=["viewBox","width","height"],_=["xlink:href"];function P(g,F,p,D,m,j){return(0,t.wg)(),(0,t.iD)("svg",{class:"icon-comp",viewBox:m.symbol.viewBox,width:m.width,height:m.height},[(0,t._)("use",{"xlink:href":"#"+m.symbol.id},null,8,_)],8,o)}var y=e(7854),h=e.n(y),x=e(5348),C=e.n(x),d=new(h())({id:"drop-here--vue-type-script-lang-js",use:"drop-here--vue-type-script-lang-js-usage",viewBox:"0 0 205 205",content:'<symbol viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="drop-here--vue-type-script-lang-js"><rect x="2.9753" y="2.97438" width="200" height="200" rx="16" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="4" stroke-dasharray="16 16" /><path fill-rule="evenodd" clip-rule="evenodd" d="M125.481 44.4607C125.481 43.9084 125.033 43.4607 124.481 43.4607H81.6915C81.1392 43.4607 80.6915 43.9084 80.6915 44.4607V110.039C80.6915 110.591 80.2438 111.039 79.6915 111.039H57.9061C57.0373 111.039 56.5818 112.07 57.167 112.712L102.236 162.162C102.633 162.597 103.318 162.597 103.714 162.162L148.784 112.712C149.369 112.07 148.913 111.039 148.045 111.039H126.481C125.928 111.039 125.481 110.591 125.481 110.039V44.4607Z" fill="currentColor" /></symbol>'}),f=C().add(d);const[u,S,O,E]=d.viewBox.split(" "),R={data(){return{symbol:d,width:O,height:E}}};var I=e(3744);const w=(0,I.Z)(R,[["render",P]]);var s=e(1288);const M=(g=>((0,t.dD)("data-v-2950a167"),g=g(),(0,t.Cn)(),g))(()=>(0,t._)("p",{class:"tip"},"Drop Sketch Files Here",-1)),H=(0,t.aZ)({emits:["pick"],setup(g,{emit:F}){let p=(0,l.iH)(!1);const{pick:D}=(0,s.Y)(c=>F("pick",c));function m(c){var v;return Array.from(((v=c.dataTransfer)==null?void 0:v.items)||[]).some(A=>A.kind==="file")}function j(){p.value=!1}function $(c){c.preventDefault(),m(c)&&(p.value=!0)}function U(c){c.preventDefault(),m(c)&&(p.value=!0)}function b(c){var v;c.preventDefault(),p.value=!1;const k=Array.from(((v=c.dataTransfer)==null?void 0:v.files)||[]).find(A=>A.name.toLowerCase().endsWith(".sketch"));k?F("pick",k):alert("It it not a sketch file!")}return(c,v)=>((0,t.wg)(),(0,t.iD)("div",{class:(0,n.C_)(["empty",{active:(0,l.SU)(p)}]),onDragenter:U,onDragover:$,onDragleave:j,onDrop:b},[(0,t._)("div",{class:"content",onClick:v[0]||(v[0]=(...k)=>(0,l.SU)(D)&&(0,l.SU)(D)(...k))},[(0,t.Wm)((0,l.SU)(w),{class:"drop-icon"}),M])],34))}});var Z=e(6848);const L=(0,I.Z)(H,[["__scopeId","data-v-2950a167"]])},9430:(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>_});var t=e(6252),n=e(2262);const _=(0,t.aZ)({emits:["pick"],setup(P,{emit:y}){const h=(0,n.iH)();function x(){var d;(d=h.value)==null||d.click()}function C(){var d;const f=(d=h.value)==null?void 0:d.files;f&&f.length>0&&y("pick",f[0])}return(d,f)=>((0,t.wg)(),(0,t.iD)(t.HY,null,[(0,t._)("input",{ref:(u,S)=>{S.input=u,h.value=u},onChange:C,type:"file",accept:".sketch",style:{display:"none"}},null,544),(0,t._)("button",{onClick:x},"Open File")],64))}})},1426:(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>w});var t=e(9871),n=e(4488),l=e(6716),o=e(6252),_=e(3577),P=e(9963);const y=s=>(_pushScopeId("data-v-31014ce8"),s=s(),_popScopeId(),s),h={class:"page"},x={class:"editor-body"},C={class:"canvas-container",ref:"canvasContainer"};function d(s,a,M,H,Z,T){const L=t.default,g=n.default,F=l.default;return(0,o.wg)(),(0,o.iD)("section",h,[(0,o.Wm)(L,{onPick:s.onPickFile},{default:(0,o.w5)(()=>[s.list&&s.list.length?(0,o.wy)(((0,o.wg)(),(0,o.iD)("select",{key:0,"onUpdate:modelValue":a[0]||(a[0]=p=>s.selectedFile=p),onChange:a[1]||(a[1]=(...p)=>s.onFileChange&&s.onFileChange(...p))},[((0,o.wg)(!0),(0,o.iD)(o.HY,null,(0,o.Ko)(s.list,(p,D)=>((0,o.wg)(),(0,o.iD)("option",{key:D},(0,_.zw)(p),1))),128))],544)),[[P.bM,s.selectedFile]]):(0,o.kq)("",!0)]),_:1},8,["onPick"]),(0,o._)("div",x,[(0,o.Wm)(g),(0,o._)("div",C,[s.isEmpty?((0,o.wg)(),(0,o.j4)(F,{key:0,onPick:s.onPickFile},null,8,["onPick"])):(0,o.kq)("",!0)],512)])])}var f=e(9430),u=e(5519);const S="http://localhost:3031/docs",O="http://localhost:3031/docs/",E=(0,o.aZ)({components:{FileButton:f.default,Outline:n.default,EmptyPlaceholder:l.default,Nav:t.default},data(){return{isEmpty:!0,list:[],pages:[],selectedFile:localStorage.getItem("lastChooseFile")||"",selectedPage:localStorage.getItem("lastChosePage")||""}},mounted(){this.fetchLocalSketchFileList(),(0,o.YP)(u.y.shared.selectedPageIndex,s=>{localStorage.setItem("lastChosePage",this.pages[s]+"")})},methods:{fetchLocalSketchFileList(){return fetch(S).then(s=>s.json()).then(s=>{this.list=s,this.selectedFile||(this.selectedFile=s[0]),this.loadFile()}).catch(()=>{console.log("Cant find local files, please select or drop a file on this web app.")})},loadSketchFile(s){return fetch(s).then(a=>a.status!==200?Promise.reject(new Error("Load sketch file error: "+a.status+":"+a.statusText)):a.arrayBuffer())},loadFile(){this.loadSketchFile(O+this.selectedFile).then(s=>this.openSketch(this.selectedFile,s)).catch(s=>{console.error(s),console.log("Cant load local files. Please check local development env.")})},async openSketch(s,a){await u.y.shared.openSketchArrayBuffer(this.removeExt(s),a,this.$refs.canvasContainer),this.isEmpty=!1,this.pages=u.y.shared.pages,this.selectedPage||(this.selectedPage=this.pages[0]),this.renderPage()},onFileChange(){localStorage.setItem("lastChooseFile",this.selectedFile+""),this.loadFile()},renderPage(){let s=this.pages.indexOf(this.selectedPage);s===-1&&(s=0,this.selectedPage=this.pages[0]),u.y.shared.selectPage(s)},removeExt(s){const a=s.toLowerCase().lastIndexOf(".sketch");return s.slice(0,a)},onPickFile(s){s.arrayBuffer().then(a=>this.openSketch(s.name,a))}}});var R=e(9583),I=e(3744);const w=(0,I.Z)(E,[["render",d],["__scopeId","data-v-31014ce8"]])},2727:(i,r,e)=>{"use strict";e.r(r),e.d(r,{default:()=>y});var t=e(1426),n=e(6252);function l(h,x,C,d,f,u){const S=t.default;return(0,n.wg)(),(0,n.j4)(S)}const o={components:{SkyEditor:t.default}};var _=e(3744);const y=(0,_.Z)(o,[["render",l]])}}]);
