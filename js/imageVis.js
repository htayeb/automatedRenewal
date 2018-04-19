
var b=JSON.stringify({"requests":[{  "image":{    "source":{"imageUri":"https://lh3.googleusercontent.com/pqCd29JyM7aju5dR5R28XbrausWm1TbfXQSwi7tidmX8EB73CZ5Q0WAXrc0Ed9q71WEofAHMxKEYVGWE7kKomAcH_I7z575tWIAwJ6r5ZZajmiYX2NMNyCnxegji7m4C1dvtjEPjsNhP0w1a3oMqVM1UuKvCXKTI5IkmkBF7fOiqDzSwZJeCGY-cRMHXW0vPpC_BxqL7oZPoAeHYnSI9If3CwVUqB-1UuSzUBW7Pq02z5zSzv-cxClp0lUdAS0ieMrZPIvSmT8B6YoXvKJjJeyRTmuIbSU8-epA-JXu0W8xGqzyVC1nwg9vn2sd4Z7tVQoj3qVIoO5OIqPpwzwiH4CnYB-wJcSC3SIf5IWVpfez9wkxGhKHFXCmIZZnBDQ-gcvWEVg5_2uurwIdPC2vU02vwgl9JEYclWx7wZkodBO-ZYAps3e3El--B8F1v-dvzoaokzFmRGHT2oxgO6mUTsmCFGr1B2LE0C1BTgrDTSlboefte2e-s-Q1mVk4naPtMVjgSUgKWinz5GQ499XOhDS018X_TqFhwD0dMiFEFNAmorifjydmNyppU7cMnWeunOHXBKuOnbxW9SkUAYAAIqu9SYv6fy1EeFQ12imMenW67vZOSu9OBAxGuoKdpSrY5RoFeDRepOfUR1mdOneH-7FhC-LlY7sj38Q=w954-h1272-no"}}  ,  "features": [{"type":"TEXT_DETECTION","maxResults":10}]    } ]});
var e=new XMLHttpRequest;

e.onload=function(){var text = e.responseText;
    var obj = JSON.parse(text);
    var parsedText = obj.responses[0].fullTextAnnotation.text;

    console.log(parsedText.replace(/[^a-zA-Z0-9-\n ]/gm, ""));
    console.log(parsedText);
    var name = /[A-Z]+[,]*\n[A-Z]+\s/
    var myTest = name.exec(parsedText);
    var nameText = myTest[0];
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
    document.getElementById('firstName').value=firstName;
    document.getElementById('lastName').value=lastName;
    document.getElementById('dlNumber').value=dlNumText;
    document.getElementById('dob').value=myDobText;
    document.getElementById('weight').value=myWtText;
    document.getElementById('height').value=myHtText;
    document.getElementById('sex').value=mySexText;
    document.getElementById('eyes').value=myEyesText;
    document.getElementById('hair').value=myHairText;












}

e.open("POST","https://vision.googleapis.com/v1/images:annotate?key=AIzaSyCOFg9sYr5dxMvk_C4cjkdhrllnBFvNRps",!0);
e.send(b)
