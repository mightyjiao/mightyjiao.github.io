(self.webpackChunk=self.webpackChunk||[]).push([[895,430],{2374:(l,d,t)=>{var e=t(8081),n=t(3645),o=n(e);o.push([l.id,".empty[data-v-2950a167]{color:#909096;height:100%;justify-content:center;position:absolute;width:100%}.content[data-v-2950a167],.empty[data-v-2950a167]{align-items:center;display:flex}.content[data-v-2950a167]{flex-direction:column;margin-bottom:200px}.content[data-v-2950a167]:hover{color:#1c7dff;cursor:pointer}.empty.active[data-v-2950a167]{color:#1c7dff}.tip[data-v-2950a167]{font-size:24px;margin-top:20px}",""]),l.exports=o},8373:(l,d,t)=>{var e=t(8081),n=t(3645),o=n(e);o.push([l.id,".page[data-v-01773029]{display:flex;flex-direction:column;height:100%}.editor-body[data-v-01773029]{display:flex;flex:1;height:0}.canvas-container[data-v-01773029]{flex:1;position:relative;width:0}h1[data-v-01773029]{font-family:sans-serif;font-size:16px;margin-right:12px}.flex-auto[data-v-01773029]{flex:1;width:0}",""]),l.exports=o},6848:(l,d,t)=>{var e=t(2374);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[l.id,e,""]]),e.locals&&(l.exports=e.locals);var n=t(5346).Z,o=n("6ece9e97",e,!0,{sourceMap:!1})},4747:(l,d,t)=>{var e=t(8373);e.__esModule&&(e=e.default),typeof e=="string"&&(e=[[l.id,e,""]]),e.locals&&(l.exports=e.locals);var n=t(5346).Z,o=n("177f92c9",e,!0,{sourceMap:!1})},6716:(l,d,t)=>{"use strict";t.r(d),t.d(d,{default:()=>D});var e=t(6252),n=t(3577),o=t(2262);const i=["viewBox","width","height"],P=["xlink:href"];function S(x,O,v,E,f,Z){return(0,e.wg)(),(0,e.iD)("svg",{class:"icon-comp",viewBox:f.symbol.viewBox,width:f.width,height:f.height},[(0,e._)("use",{"xlink:href":"#"+f.symbol.id},null,8,P)],8,i)}var _=t(7854),h=t.n(_),g=t(5348),y=t.n(g),a=new(h())({id:"drop-here--vue-type-script-lang-js",use:"drop-here--vue-type-script-lang-js-usage",viewBox:"0 0 205 205",content:'<symbol viewBox="0 0 205 205" fill="none" xmlns="http://www.w3.org/2000/svg" id="drop-here--vue-type-script-lang-js"><rect x="2.9753" y="2.97438" width="200" height="200" rx="16" fill="currentColor" fill-opacity="0.06" stroke="currentColor" stroke-width="4" stroke-dasharray="16 16" /><path fill-rule="evenodd" clip-rule="evenodd" d="M125.481 44.4607C125.481 43.9084 125.033 43.4607 124.481 43.4607H81.6915C81.1392 43.4607 80.6915 43.9084 80.6915 44.4607V110.039C80.6915 110.591 80.2438 111.039 79.6915 111.039H57.9061C57.0373 111.039 56.5818 112.07 57.167 112.712L102.236 162.162C102.633 162.597 103.318 162.597 103.714 162.162L148.784 112.712C149.369 112.07 148.913 111.039 148.045 111.039H126.481C125.928 111.039 125.481 110.591 125.481 110.039V44.4607Z" fill="currentColor" /></symbol>'}),u=y().add(a);const[m,k,w,F]=a.viewBox.split(" "),A={data(){return{symbol:a,width:w,height:F}}};var I=t(3744);const r=(0,I.Z)(A,[["render",S]]);var R=t(1288);const M=(x=>((0,e.dD)("data-v-2950a167"),x=x(),(0,e.Cn)(),x))(()=>(0,e._)("p",{class:"tip"},"Drop Sketch Files Here",-1)),B=(0,e.aZ)({emits:["pick"],setup(x,{emit:O}){let v=(0,o.iH)(!1);const{pick:E}=(0,R.Y)(c=>O("pick",c));function f(c){var p;return Array.from(((p=c.dataTransfer)==null?void 0:p.items)||[]).some(L=>L.kind==="file")}function Z(){v.value=!1}function j(c){c.preventDefault(),f(c)&&(v.value=!0)}function U(c){c.preventDefault(),f(c)&&(v.value=!0)}function $(c){var p;c.preventDefault(),v.value=!1;const C=Array.from(((p=c.dataTransfer)==null?void 0:p.files)||[]).find(L=>L.name.toLowerCase().endsWith(".sketch"));C?O("pick",C):alert("It it not a sketch file!")}return(c,p)=>((0,e.wg)(),(0,e.iD)("div",{class:(0,n.C_)(["empty",{active:(0,o.SU)(v)}]),onDragenter:U,onDragover:j,onDragleave:Z,onDrop:$},[(0,e._)("div",{class:"content",onClick:p[0]||(p[0]=(...C)=>(0,o.SU)(E)&&(0,o.SU)(E)(...C))},[(0,e.Wm)((0,o.SU)(r),{class:"drop-icon"}),M])],34))}});var H=t(6848);const D=(0,I.Z)(B,[["__scopeId","data-v-2950a167"]])},9430:(l,d,t)=>{"use strict";t.r(d),t.d(d,{default:()=>P});var e=t(6252),n=t(2262);const P=(0,e.aZ)({emits:["pick"],setup(S,{emit:_}){const h=(0,n.iH)();function g(){var a;(a=h.value)==null||a.click()}function y(){var a;const u=(a=h.value)==null?void 0:a.files;u&&u.length>0&&_("pick",u[0])}return(a,u)=>((0,e.wg)(),(0,e.iD)(e.HY,null,[(0,e._)("input",{ref:(m,k)=>{k.input=m,h.value=m},onChange:y,type:"file",accept:".sketch",style:{display:"none"}},null,544),(0,e._)("button",{onClick:g},"Open File")],64))}})},1895:(l,d,t)=>{"use strict";t.r(d),t.d(d,{default:()=>I});var e=t(9744),n=t(4488),o=t(6716),i=t(6252);const P=s=>(_pushScopeId("data-v-01773029"),s=s(),_popScopeId(),s),S={class:"page"},_={class:"editor-body"},h={class:"canvas-container",ref:"canvasContainer"};function g(s,r,R,b,M,B){const H=e.default,T=n.default,D=o.default;return(0,i.wg)(),(0,i.iD)("section",S,[(0,i.Wm)(H,{onPick:s.onPickFile},null,8,["onPick"]),(0,i._)("div",_,[(0,i.Wm)(T),(0,i._)("div",h,[s.isEmpty?((0,i.wg)(),(0,i.j4)(D,{key:0,onPick:s.onPickFile},null,8,["onPick"])):(0,i.kq)("",!0)],512)])])}var y=t(9430),a=t(5519);const u="http://localhost:3031/docs",m="http://localhost:3031/docs/",k=(0,i.aZ)({components:{FileButton:y.default,Outline:n.default,EmptyPlaceholder:o.default,Nav:e.default},data(){return{isEmpty:!0,list:[],pages:[],selectedFile:localStorage.getItem("lastChooseFile")||"",selectedPage:localStorage.getItem("lastChosePage")||""}},mounted(){this.fetchLocalSketchFileList(),(0,i.YP)(a.y.shared.selectedPageIndex,s=>{localStorage.setItem("lastChosePage",this.pages[s]+"")})},methods:{fetchLocalSketchFileList(){return fetch(u).then(s=>s.json()).then(s=>{this.list=s,this.selectedFile||(this.selectedFile=s[0]),this.loadFile()}).catch(()=>{console.log("Cant find local files, please select or drop a file on this web app.")})},loadSketchFile(s){return fetch(s).then(r=>r.status!==200?Promise.reject(new Error("Load sketch file error: "+r.status+":"+r.statusText)):r.arrayBuffer())},loadFile(){this.loadSketchFile(m+this.selectedFile).then(s=>this.openSketch(this.selectedFile,s)).catch(s=>{console.error(s),console.log("Cant load local files. Please check local development env.")})},async openSketch(s,r){await a.y.shared.openSketchArrayBuffer(this.removeExt(s),r,this.$refs.canvasContainer),this.isEmpty=!1,this.pages=a.y.shared.pages,this.selectedPage||(this.selectedPage=this.pages[0]),this.renderPage()},onFileChange(){localStorage.setItem("lastChooseFile",this.selectedFile+""),this.loadFile()},renderPage(){let s=this.pages.indexOf(this.selectedPage);s===-1&&(s=0,this.selectedPage=this.pages[0]),a.y.shared.selectPage(s)},removeExt(s){const r=s.toLowerCase().lastIndexOf(".sketch");return s.slice(0,r)},onPickFile(s){s.arrayBuffer().then(r=>this.openSketch(s.name,r))}}});var w=t(4747),F=t(3744);const I=(0,F.Z)(k,[["render",g],["__scopeId","data-v-01773029"]])}}]);