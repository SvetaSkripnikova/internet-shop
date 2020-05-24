$(function(){
    let filter = $("[data-filter]");

    filter.on("click", function(){
        

        let cat = $(this).data('filter')

        if(cat == '0'){
            $("[data-cat]").removeClass("hide");
        } else {
            $("[data-cat]").each(function(){
                let workCat=$(this).data('cat');
            
                if(workCat != cat){
                    $(this).addClass('hide');
                } else{
                    $(this).removeClass('hide');
                }
            });
        }
    });
});

function change(objName, min, max, step) {
    var obj = document.getElementById(objName);
    var tmp = +obj.value + step;
    if (tmp<min) tmp=min;
    if (tmp>max) tmp=max;
    obj.value = tmp;
}

