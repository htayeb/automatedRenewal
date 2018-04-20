
var b=JSON.stringify({"requests":[{  "image":{    "source":{"imageUri":"https://lh3.googleusercontent.com/sjXDn7IDspiD-_gKBV50MJcZ-bDU7Xshct0r2s_MRy0pvAOafiZNrSaKuiPElUilxaQfsrSNeTZl3G7hnTePnTCw0nuF8FJ7dJD4OYcLNEPfvCdoXx-JyWEht1xQLwuRQx956EFOf6ldnKzwbQ2AQIH_a8qzmEFVuyUdJEauuHyA8bMilLxn_c9LVo_v2Z7LQOZ_BNFW9mH-_gFzhfleOT4SjgXnZUftaJR5qPQwTncG6AT-ckQAWzY-Z-cgFxdvUWL6NlLggs61GW0MBuhZ-VQZD2ebrpPkMtWCRxR36WwLCdxLIdu9GTp6JO07nZ90MdZ2ZB_YofpR14zwlwSfNiI5Je5iCZAMMzGkBxBCSI5Pm7-bY9xv2ZtiiEMFKs4bysjHQlCsxARNnTb6C29MqzElMykTpswgW51ZnTP5JyNdWMtPLKEAdb8gI_UaMJk3sSDcWFq9Wj7mQm1J1B46zttP2kP6quG4qGrgxKSz3P3068l6v_p026ph2aIlJmdwtmkanLgTWO75iJedZLzXqZjt_5hDKCWCdfLmSvjPZEyVEVW_9bBxT95NBEHN7Ly2MJf5xaTLvH4tkNOKEaJxOwUXN3STW0qgC-y_uzSMCpX2by-vlUSqFZDe4RTFPxJoe749A5eZaRHOnKhpryEOezaDhWfOJa3UsA=w1166-h1554-no"}}  ,  "features": [{"type":"TEXT_DETECTION","maxResults":10}]    } ]});
var e=new XMLHttpRequest;

e.onload=function(){var text = e.responseText;
    var obj = JSON.parse(text);
    var parsedText = obj.responses[0].fullTextAnnotation.text;

    console.log(parsedText.replace(/[^a-zA-Z0-9-\n ]/gm, ""));
    console.log(parsedText);
    var name = /[A-Z]+[,]*\n[A-Z]+[\s*[A-Z]*]*\s+DL/
    var myTest = name.exec(parsedText);
    var nameText = myTest[0];
    console.log(nameText);
    var lastName = nameText.split("\n")[0].replace(/[^a-zA-Z0-9-\n ]/gm, "");
    var firstName = nameText.split("\n")[1].trim().replace(/[^a-zA-Z0-9-\n ]/gm, "");
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
    var hair = /Hair[:]*.\s*[A-Z]{3}/
    var myHair = hair.exec(parsedText);
    var myHairText = myHair[0].split(" ")[1].trim();
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
