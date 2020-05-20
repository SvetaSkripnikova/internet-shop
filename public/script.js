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

