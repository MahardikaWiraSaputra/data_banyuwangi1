class Icons{get options(){return{csLineContainerId:"csLineIconsContainer",csLineInputId:"csLineIconsSearch",csLineInterfaceContainerId:"csLineInterfaceIconsContainer",csLineInterfaceInputId:"csLineInterfaceIconsSearch",bootstrapContainerId:"bootstrapIconsContainer",bootstrapInputId:"bootstrapIconsSearch",datapath:Helpers.UrlFix("json/icons.json")}}constructor(t={}){this.settings=Object.assign(this.options,t),this._init()}_init(){Helpers.FetchJSON(this.settings.datapath,(t=>{this._data=t,this._initAfterLoad()}))}_initAfterLoad(){document.getElementById(this.settings.csLineContainerId)&&(new IconLibrary({containerId:this.settings.csLineContainerId,inputId:this.settings.csLineInputId,data:this._data.csLine,isSvg:!0}),csicons.replace()),document.getElementById(this.settings.csLineInterfaceContainerId)&&(new IconLibrary({containerId:this.settings.csLineInterfaceContainerId,inputId:this.settings.csLineInterfaceInputId,data:this._data.csLineInterface,isSvg:!1}),csicons.replace()),document.getElementById(this.settings.bootstrapContainerId)&&new IconLibrary({containerId:this.settings.bootstrapContainerId,inputId:this.settings.bootstrapInputId,data:this._data.bootstrap,isSvg:!1})}}class IconLibrary{get options(){return{containerId:"",inputId:"",data:null}}constructor(t={}){this.settings=Object.assign(this.options,t),this._init()}_init(){this.fuse=new Fuse(this.settings.data,{includeScore:!0,keys:["t","c"],threshold:.2}),this.foundNothing='<div class="col-12 small-gutter-col flex-grow-1 mw-100"> <div class="card h-100"> <div class="card-body text-center"><i class="mb-3 d-inline-block text-primary cs-warning-hexagon"></i><p class="mb-0">Nothing found!</p></div></div></div>',this._addIcons(this.settings.data),this._addListeners()}_addIcons(t){const s=document.getElementById(this.settings.containerId);if(s)if(s.innerHTML="",0!==t.length){for(var e="",n=0;n<t.length;n++){let s=t[n].c||t[n].item.c;this.settings.isSvg?e+='<div class="col small-gutter-col"> <div class="card h-100"> <div class="card-body text-center"><i class="mb-3 d-inline-block text-primary" data-cs-icon="'+s+'" data-cs-size="20"></i><p class="text-small text-muted mb-0">'+s+"</p></div></div></div>":e+='<div class="col small-gutter-col"> <div class="card h-100"> <div class="card-body text-center"><i class="mb-3 d-inline-block text-primary icon-20 '+s+'"></i><p class="text-small text-muted mb-0">'+s+"</p></div></div></div>"}s.insertAdjacentHTML("beforeend",e),"undefined"!=typeof csicons&&csicons.replace()}else s.insertAdjacentHTML("beforeend",this.foundNothing)}_addListeners(){const t=document.getElementById(this.settings.inputId);t&&t.addEventListener("keyup",Helpers.Debounce(this._search.bind(this),500).bind(this))}_search(){const t=document.getElementById(this.settings.inputId).value;if(""===t)return void this._addIcons(this.settings.data);const s=this.fuse.search(t);this._addIcons(s)}}