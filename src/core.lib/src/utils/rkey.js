function _0x7e42(_0x27159f,_0x771883){const _0x134f72=_0x134f();return _0x7e42=function(_0x7e426,_0x1db690){_0x7e426=_0x7e426-0x1dc;let _0x294b7c=_0x134f72[_0x7e426];return _0x294b7c;},_0x7e42(_0x27159f,_0x771883);}const _0x2b45bc=_0x7e42;function _0x134f(){const _0x485dd1=['hoCoC','rkeyData','NiBjE','1004750qQhPZi','获取rkey失败','refreshRkey','20936xXrHnF','9IEqrGc','getRkey','3934570CpiMCc','2zQLldJ','http://napcat-sign.wumiao.wang:2082/rkey','serverUrl','511UtfsSN','183432FTQmmN','396743lNDSvc','isExpired','HttpGetJson','666420voTxnK','321yKxcZZ','expired_time','13644mOcccC','1265zwxVMS','getTime'];_0x134f=function(){return _0x485dd1;};return _0x134f();}(function(_0x4b9229,_0x168892){const _0xeb3d7d=_0x7e42,_0x3ec80e=_0x4b9229();while(!![]){try{const _0x412e7a=parseInt(_0xeb3d7d(0x1f0))/0x1*(-parseInt(_0xeb3d7d(0x1eb))/0x2)+parseInt(_0xeb3d7d(0x1dc))/0x3*(-parseInt(_0xeb3d7d(0x1de))/0x4)+-parseInt(_0xeb3d7d(0x1e4))/0x5+-parseInt(_0xeb3d7d(0x1f3))/0x6+parseInt(_0xeb3d7d(0x1ee))/0x7*(parseInt(_0xeb3d7d(0x1e7))/0x8)+-parseInt(_0xeb3d7d(0x1e8))/0x9*(parseInt(_0xeb3d7d(0x1ea))/0xa)+parseInt(_0xeb3d7d(0x1df))/0xb*(parseInt(_0xeb3d7d(0x1ef))/0xc);if(_0x412e7a===_0x168892)break;else _0x3ec80e['push'](_0x3ec80e['shift']());}catch(_0x26f873){_0x3ec80e['push'](_0x3ec80e['shift']());}}}(_0x134f,0x759c6));import{logError}from'@/common/utils/log';import{RequestUtil}from'@/common/utils/request';class RkeyManager{[_0x2b45bc(0x1ed)]='';[_0x2b45bc(0x1e2)]={'group_rkey':'','private_rkey':'','expired_time':0x0};constructor(_0x30b7aa){const _0x1591c5=_0x2b45bc;this[_0x1591c5(0x1ed)]=_0x30b7aa;}async[_0x2b45bc(0x1e9)](){const _0x5f1ea4=_0x2b45bc;if(this[_0x5f1ea4(0x1f1)]())try{await this['refreshRkey']();}catch(_0x1f8937){logError(_0x5f1ea4(0x1e5),_0x1f8937);}return this[_0x5f1ea4(0x1e2)];}['isExpired'](){const _0x3cbc03=_0x2b45bc,_0x54f8cd={'hoCoC':function(_0x12a600,_0x4bf8c2){return _0x12a600/_0x4bf8c2;},'NiBjE':function(_0x552a61,_0x34a18a){return _0x552a61>_0x34a18a;}},_0x267394=_0x54f8cd[_0x3cbc03(0x1e1)](new Date()[_0x3cbc03(0x1e0)](),0x3e8);return _0x54f8cd[_0x3cbc03(0x1e3)](_0x267394,this[_0x3cbc03(0x1e2)][_0x3cbc03(0x1dd)]);}async[_0x2b45bc(0x1e6)](){const _0x1534f5=_0x2b45bc;this['rkeyData']=await RequestUtil[_0x1534f5(0x1f2)](this[_0x1534f5(0x1ed)],'GET');}}export const rkeyManager=new RkeyManager(_0x2b45bc(0x1ec));