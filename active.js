function init(){

}

function ocidSearch(){
    var charName = document.getElementById("charName").value;
    console.log(charName);

    //var key = "test_ac9f8b60c27b9c294a27601a075f62f0f4204a5c6f3f61466b4dd05a67f47e1eacc6b465d4323df8e37dd4887a66c1a2";
    var key = document.getElementById("apiKey").value;
    var apiUrl = "https://open.api.nexon.com/maplestory/v1/id?character_name=" + charName;

    ajaxCaller(key,apiUrl,function(result){
        document.getElementById("consoleDiv").innerHTML = null;

        document.getElementById("consoleDiv").innerHTML += "<P>" + JSON.stringify(result,null,4);

        document.getElementById("ocidResult").value = result.ocid;
    });
}


function changeSelect(){
    var selectData = document.getElementById("selectBox");

    var selectValue = selectData.options[selectData.selectedIndex].value;

    document.getElementById("carDiv").style.display = 'none';
    document.getElementById("unionDiv").style.display = 'none';
    document.getElementById("guildDiv").style.display = 'none';
    document.getElementById("gachaDiv").style.display = 'none';
    document.getElementById("rankDiv").style.display = 'none';

    if(selectValue == "0"){ 
        document.getElementById("carDiv").style.display = 'block';
    }else if(selectValue == "1"){
        document.getElementById("unionDiv").style.display = 'block';
    }else if(selectValue == "2"){
        document.getElementById("guildDiv").style.display = 'block'
    }else if(selectValue == "3"){
        document.getElementById("gachaDiv").style.display = 'block'
    }else if(selectValue == "4"){
        document.getElementById("rankDiv").style.display = 'block'
    }
}

function carSearch(){
    var selectCarData = document.getElementById("selectCar");

    var selectCarValue = selectCarData.options[selectCarData.selectedIndex].value;

    var apiCarUrl;

    if(selectCarValue == "0"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/basic?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "1"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/popularity?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "2"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/stat?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "3"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/hyper-stat?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "4"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/propensity?ocid=" + document.getElementById("ocidResult").value;
    }
    else if(selectCarValue == "5"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/ability?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "6"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/item-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "7"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/cashitem-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "8"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/symbol-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "9"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/set-effect?ocid=" + document.getElementById("ocidResult").value;
    }
    else if(selectCarValue == "10"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/beauty-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "11"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/android-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "12"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/pet-equipment?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "13"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/skill?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "14"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/link-skill?ocid=" + document.getElementById("ocidResult").value;
    }
    else if(selectCarValue == "15"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/vmatrix?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "16"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/hexamatrix?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "17"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/hexamatrix-stat?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectCarValue == "18"){
        apiCarUrl = "https://open.api.nexon.com/maplestory/v1/character/dojang?ocid=" + document.getElementById("ocidResult").value;
    }

    var apiCarkey = document.getElementById("apiKey").value;

    ajaxCaller(apiCarkey,apiCarUrl,function(result){
        document.getElementById("consoleDiv").innerHTML = null;

        document.getElementById("consoleDiv").innerHTML += "<P><PRE>" + JSON.stringify(result,null,4) + "</PRE>";
    });
}

function unionSearch(){
    var selectUnionData = document.getElementById("selectUnion");

    var selectUnionValue = selectUnionData.options[selectUnionData.selectedIndex].value;

    var apiUnionUrl;

    if(selectUnionValue == "0"){
        apiUnionUrl = "https://open.api.nexon.com/maplestory/v1/user/union?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectUnionValue == "1"){
        apiUnionUrl = "https://open.api.nexon.com/maplestory/v1/user/union-raider?ocid=" + document.getElementById("ocidResult").value;
    }else if(selectUnionValue == "2"){
        apiUnionUrl = "https://open.api.nexon.com/maplestory/v1/user/union-artifact?ocid=" + document.getElementById("ocidResult").value;
    }

    var apiUnionkey = document.getElementById("apiKey").value;

    ajaxCaller(apiUnionkey,apiUnionUrl,function(result){
        document.getElementById("consoleDiv").innerHTML = null;

        document.getElementById("consoleDiv").innerHTML += "<P><PRE>" + JSON.stringify(result,null,4) + "</PRE>";
    });
}

function oguildSearch(){
    var selectServerData = document.getElementById("selectServer");

    var selectServerValue = selectServerData.options[selectServerData.selectedIndex].innerHTML;

    var guildName = document.getElementById("guildName").value;

    var apioguildUrl = "https://open.api.nexon.com/maplestory/v1/guild/id?guild_name=" + guildName + 
                       "&world_name=" + selectServerValue;

    var apiGuildkey = document.getElementById("apiKey").value;

    ajaxCaller(apiGuildkey,apioguildUrl,function(result){
        document.getElementById("oguildResult").value = result.oguild_id;

        apioguildUrl = "https://open.api.nexon.com/maplestory/v1/guild/basic?oguild_id=" + result.oguild_id; 

        ajaxCaller(apiGuildkey,apioguildUrl,function(result){
            document.getElementById("consoleDiv").innerHTML = null;
    
            document.getElementById("consoleDiv").innerHTML += "<P><PRE>" + JSON.stringify(result,null,4) + "</PRE>";
        });
    });

}

function gachaSearch(){
    var selectGachaData = document.getElementById("selectGacha");

    var selectGachaValue = selectGachaData.options[selectGachaData.selectedIndex].value;

    var apiGachaUrl;

    if(selectGachaValue == "0"){
        apiGachaUrl = "https://open.api.nexon.com/maplestory/v1/history/starforce?count=" + document.getElementById("gachaCount").value +
                      "&date=" + document.getElementById("gachaDate").value;
    }else if(selectGachaValue == "1"){
        apiGachaUrl = "https://open.api.nexon.com/maplestory/v1/history/potential?count=" + document.getElementById("gachaCount").value +
                      "&date=" + document.getElementById("gachaDate").value;
    }else if(selectGachaValue == "2"){
        apiGachaUrl = "https://open.api.nexon.com/maplestory/v1/history/cube?count=" + document.getElementById("gachaCount").value +
                      "&date=" + document.getElementById("gachaDate").value;
    }
    
    var apiGachakey = document.getElementById("apiKey").value;

    ajaxCaller(apiGachakey,apiGachaUrl,function(result){
        document.getElementById("consoleDiv").innerHTML = null;

        document.getElementById("consoleDiv").innerHTML += "<P><PRE>" + JSON.stringify(result,null,4) + "</PRE>";
    });
}

function rankSearch(){
    var selectRankData = document.getElementById("selectRank");

    var selectRankValue = selectRankData.options[selectRankData.selectedIndex].value;

    var apiRankUrl;

    if(selectRankValue == "0"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/overall?date=" + document.getElementById("rankDate").value;
    }else if(selectRankValue == "1"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/union?date=" + document.getElementById("rankDate").value;
    }else if(selectRankValue == "2"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/guild?date=" + document.getElementById("rankDate").value + "&ranking_type=0";
    }else if(selectRankValue == "3"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/dojang?date=" + document.getElementById("rankDate").value + "&difficulty=0";
    }else if(selectRankValue == "4"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/theseed?date=" + document.getElementById("rankDate").value;
    }else if(selectRankValue == "5"){
        apiRankUrl = "https://open.api.nexon.com/maplestory/v1/ranking/achievement?date=" + document.getElementById("rankDate").value;
    }

    var apiRankkey = document.getElementById("apiKey").value;

    ajaxCaller(apiRankkey,apiRankUrl,function(result){
        document.getElementById("consoleDiv").innerHTML = null;

        document.getElementById("consoleDiv").innerHTML += "<P><PRE>" + JSON.stringify(result,null,4) + "</PRE>";
    });
}