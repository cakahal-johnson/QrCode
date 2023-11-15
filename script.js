(function(_0x2bb0d7,_0x3a1c70){const _0x1ac4aa=_0x148c,_0x1c1a2f=_0x2bb0d7();while(!![]){try{const _0xde6c17=-parseInt(_0x1ac4aa(0x134))/0x1+-parseInt(_0x1ac4aa(0x137))/0x2+-parseInt(_0x1ac4aa(0x138))/0x3+parseInt(_0x1ac4aa(0x13b))/0x4+-parseInt(_0x1ac4aa(0x136))/0x5+parseInt(_0x1ac4aa(0x13d))/0x6+parseInt(_0x1ac4aa(0x135))/0x7;if(_0xde6c17===_0x3a1c70)break;else _0x1c1a2f['push'](_0x1c1a2f['shift']());}catch(_0x267846){_0x1c1a2f['push'](_0x1c1a2f['shift']());}}}(_0x2a0f,0xab3f7));function _0x148c(_0x264e20,_0x3178fa){const _0x2a0f75=_0x2a0f();return _0x148c=function(_0x148c3e,_0x82daa0){_0x148c3e=_0x148c3e-0x134;let _0x592aa5=_0x2a0f75[_0x148c3e];return _0x592aa5;},_0x148c(_0x264e20,_0x3178fa);}function generateQRCode(){const _0x1cb308=_0x148c,_0x497c24=document[_0x1cb308(0x13e)]('studentName')['value'],_0x3af0ee=document[_0x1cb308(0x13e)]('studentClass')[_0x1cb308(0x139)],_0x557362=document[_0x1cb308(0x13e)](_0x1cb308(0x13a))[_0x1cb308(0x139)],_0x4b395a=document[_0x1cb308(0x13e)]('laptopTag')['value'],_0x587c37=_0x497c24+_0x1cb308(0x13c)+_0x3af0ee+'\x20'+_0x557362+_0x1cb308(0x13c)+_0x4b395a,_0x543c37=new QRCode(document[_0x1cb308(0x13e)]('qrcode'),{'text':_0x587c37,'width':0xc8,'height':0xc8});}function _0x2a0f(){const _0x166dd6=['1980792jNbHCz','\x20-\x20','4061568lxOEba','getElementById','1265987EhyyxE','17755388xIFDiJ','2254035WeubdD','180408hvVgoV','3600543vFijgE','value','studentSet'];_0x2a0f=function(){return _0x166dd6;};return _0x2a0f();}







































// function generateQRCode() {
//     // Get student name and laptop tag from input fields
//     const studentName = document.getElementById('studentName').value;
//     const studentClass = document.getElementById('studentClass').value;
//     const studentSet = document.getElementById('studentSet').value;
//     const laptopTag = document.getElementById('laptopTag').value;

//     // Combine student name and laptop tag to create a unique identifier
//     const data = `${studentName} - ${studentClass} ${studentSet} - ${laptopTag}`;

//     // Create QR Code
//     const qrcode = new QRCode(document.getElementById('qrcode'), {
//         text: data,
//         width: 200,
//         height: 200
//     });
// }
