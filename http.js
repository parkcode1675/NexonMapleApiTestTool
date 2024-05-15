function ajaxCaller(key,apiUrl,func){
    console.log("apiUrl : " + apiUrl);
    $(document).ready(function(){
        $.ajax({
            type : 'GET',
            url : apiUrl,
            dataType : 'json', 
            beforeSend : function(xhr){
                xhr.setRequestHeader("x-nxopen-api-key",key);
            },
            success : function(result){
                func(result);
            },
            error : function(result){  
                func(result);
            }
        })
});
}