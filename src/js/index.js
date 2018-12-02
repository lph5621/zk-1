

$.ajax({
    url:"/api/list",
    dataType:"json",
    success:function(res){
        console.log(res)
        if(res.code == 1){
            renderData(res.data)
        }
    }
})
function renderData(data){
    var str = '';
    data.forEach((i) => {
        str += ` <div class="swiper-slide">`
            i.list.forEach((item)=>{
                str += `<p><img src="${item.img}" alt=""><span>${item.title}</span></p>`
            })              
        str +=  `</div>`
    });

    $(".swiper-wrapper").html(str);

    var swiper = new Swiper("#container",{
        autoplay:true
    })
}

