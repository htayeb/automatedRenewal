
var b=JSON.stringify({"requests":[{  "image":{    "source":{"imageUri":"https://lh3.googleusercontent.com/yUSeWJ7djUeQFC9TNtqw5GKs1TgCG3qfROuehmd01NTymX3HK7yRpicJ47HeAapKGJV-oEmo5SzAT8zYdbJZiV2gDFwJ52OV9Mw_BGQxRuxIvUAkxHhujM0MpNvMZSbvSmBkm_iWY2fF6NrOEmFVQ4KblCK_e1M-lGp9E-h7w5sGsdCDWI-1pzNVuxpHCryfHx_xa4PPjxkAagpBdCmbVX1-NwsiBKrZ7QV9tV56Vf7BoNzvkJAO64pRfDMQFo7fpxjdlRIBtxXUbWeyJ_Aunt-b-csV0yqKfkkV4rmvqsbUUwAnnYBj8rHtC1b9WgMoxOizDuCPwH40du3o7ACJfZmjplRYLk2_q5eK2weeAgHl_JM7T7rq-0a9eDThJB7daEBo9xuI30OGRTMcdzh4PbhGQItgTljusTzvl5jdeiMF1Ar0xXSAemvT8ay1itWx7u6WMCEohHCiguXFbIwVE_VkluTxSPnxvDbOxmSd48tvPmH-EoIOLb3yMISPRNr-CtBgon_5szAphvS-EoQnTUioTKHMzmcmp57TQsbtO5zBSAbAEJnZ3CxO9hEkfElP3Qs2NgEAOnyy25KWFr_EZzjNKy2wDLNRWQaND42vvTsNRixd1Itig89ci4WlvVLBq_PxeaeCxSviLvu8qPhnK6HHKaIGrLStqw=w954-h1272-no"}}  ,  "features": [{"type":"TEXT_DETECTION","maxResults":10}]    } ]});
var e=new XMLHttpRequest;

e.onload=function(){var text = e.responseText;
    var obj = JSON.parse(text);
    var parsedText = obj.responses[0].fullTextAnnotation.text;

    console.log(parsedText.replace(/[^a-zA-Z0-9-\n ]/gm, ""));
    console.log(parsedText);
    var name = /[A-Z]+[,]*\n[A-Z]+\s+DL/
    var myTest = name.exec(parsedText);
    var nameText = myTest[0];
    console.log(nameText);
    var lastName = nameText.split("\n")[0];
    var firstName = nameText.split("\n")[1].trim();
    console.log(lastName);
    console.log(firstName);
    var dlNum = /DL:\s*[0-9]+/
    var myDlNum = dlNum.exec(parsedText);
    var dlNumText = myDlNum[0].split(":")[1].trim();
    console.log(dlNumText);
    var dob = /DOB:\s[0-9]+-[A-Z a-z]{3}-[0-9]{2}/
    var myDob = dob.exec(parsedText);
    var myDobText = myDob[0].split(":")[1].trim();
    console.log(myDobText);
    var wt = /[W w]t:.*kg/
    var myWt = wt.exec(parsedText);
    var myWtText = myWt[0].split(":")[1].trim();
    console.log(myWtText);
    var ht = /[H h]t:.*cm/
    var myHt = ht.exec(parsedText);
    var myHtText = myHt[0].split(":")[1].trim();
    console.log(myHtText);
    var sex = /Sex[:]*.[A-Z]{1}/
    var mySex = sex.exec(parsedText);
    var mySexText = mySex[0].split(":")[1].trim();
    console.log(mySexText);
    var eyes = /Eyes:.[A-Z]{3}/
    var myEyes = eyes.exec(parsedText);
    var myEyesText = myEyes[0].split(":")[1].trim();
    console.log(myEyesText);
    var hair = /Hair[:]*.[A-Z]{3}/
    var myHair = hair.exec(parsedText);
    var myHairText = myHair[0].split(":")[1].trim();
    console.log(myHairText);
    document.getElementById('firstName').innerHTML=firstName;
    document.getElementById('lastName').innerHTML=lastName;
    document.getElementById('dlNumber').innerHTML=dlNumText;
    document.getElementById('dob').innerHTML=myDobText;
    document.getElementById('weight').value=myWtText;
    document.getElementById('height').value=myHtText;
    document.getElementById('sex').value=mySexText;
    document.getElementById('eyes').value=myEyesText;
    document.getElementById('hair').value=myHairText;












}

e.open("POST","https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCOFg9sYr5dxMvk_C4cjkdhrllnBFvNRps",!0);
e.send(b)
