webpackJsonp([6,10],{217:function(e,t,o){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(1),a=o(2),n=r(a);t.default={components:{XTextarea:s.XTextarea,XButton:s.XButton,Group:s.Group,Toast:s.Toast,Checker:s.Checker,CheckerItem:s.CheckerItem,Alert:s.Alert},data:function(){return{hangUpReason:"",show:!1,reason:[],tipsText:"",alertShow:!1}},methods:{hangUp:function(){if(this.hangUpReason=this.hangUpReason.replace(/(^\s*)|(\s*$)/g,""),!this.reason.length&&!this.hangUpReason.length)return this.alertShow=!0,void(this.tipsText="请选择挂起原因");if(this.reason.indexOf("其他原因")==-1&&this.hangUpReason.length)return this.alertShow=!0,void(this.tipsText="请勾选其他原因选项");if(this.reason.indexOf("其他原因")>-1&&!this.hangUpReason.length)return this.alertShow=!0,void(this.tipsText="请填写其他原因的描述");for(var e="",t=0;t<this.reason.length;t++)e+=this.reason[t].indexOf("其他原因")>-1?this.reason[t]+":"+this.hangUpReason+",":this.reason[t]+",";e=e.substring(0,e.length-1);var o={orderId:this.$route.params.Id,hangUpReason:e};this.$http.post(n.default.url+"WXOrderApi/hangUp.do",o).then(function(e){"ok"==e.data.msg&&(this.show=!0,this.reason=[],this.hangUpReason="")})},onHide:function(){this.$router.go("/myOrder/1")}}}},274:function(e,t,o){t=e.exports=o(6)(),t.push([e.id,".demo5-item{padding:.16rem .08rem;border-radius:3px;border:1px solid #ccc;margin:0 .2rem .2rem 0;color:#a4a4a4}.demo5-item-selected{background:url("+o(21)+") no-repeat 100% 100%/.22rem;border-color:#519cf9}.checker{margin-top:.16rem;padding-left:.12rem}",""])},325:function(e,t,o){var r=o(274);"string"==typeof r&&(r=[[e.id,r,""]]);o(7)(r,{});r.locals&&(e.exports=r.locals)},458:function(e,t){e.exports=' <div> <checker :value.sync=reason default-item-class=demo5-item selected-item-class=demo5-item-selected class=checker type=checkbox> <checker-item value=锁单>锁单</checker-item> <checker-item value=资料不齐>资料不齐</checker-item> <checker-item value=资料错误修改>资料错误修改</checker-item> <checker-item value=修改图形>修改图形</checker-item> <checker-item value=修改台帐属性>修改台帐属性</checker-item> <checker-item value=其他原因>其他原因</checker-item> </checker> <group class=padding8 style=margin-top:-16px> <x-textarea :max=200 placeholder=此处填写其他原因... :show-counter=false :height=160 :rows=8 :cols=30 :value.sync=hangUpReason></x-textarea> </group> <group class=padding8 style=margin-top:-16px> <x-button class=btn_blue @click=hangUp()>确定</x-button> </group> <toast :show.sync=show :time=1000 @on-hide=onHide()>操作成功</toast> <alert :style="{ color: yellow }" :show.sync=alertShow :title="\'操作提示\'" button-text=确认>{{tipsText}}</alert> </div> '},534:function(e,t,o){var r,s,a={};o(325),r=o(217),s=o(458),e.exports=r||{},e.exports.__esModule&&(e.exports=e.exports.default);var n="function"==typeof e.exports?e.exports.options||(e.exports.options={}):e.exports;s&&(n.template=s),n.computed||(n.computed={}),Object.keys(a).forEach(function(e){var t=a[e];n.computed[e]=function(){return t}})}});