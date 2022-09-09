
const triggerBrianTab = (el)=>{
    const target = el.currentTarget ? el.currentTarget : el;
    const byATag = $(target).attr("id");
    const byRadio = $(target).attr('for');
    let id = "";
    if(byATag){
        id = '#' + byATag;
    }
    if(byRadio){
        id = '#' + byRadio.replace('-input',"");

    }
    if(id){
        $('.tabbuttonwrapper .tab-button').removeClass('w--current');
        $('.w-tab-pane').removeClass('w--tab-active');
    
        $(id).addClass('w--current');
        $(id+"-content").addClass('w--tab-active');
        if(byATag){
            $('.accord-input').prop('checked', false)
            $(id+"-input").prop("checked", true);
        }
        replaceUrl(id);
    }
}

function replaceUrl(id=""){
    let newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + id;
    window.history.pushState({ path: newurl }, '', newurl);
}

const triggerBrianOnLoad = ()=>{
let allTabBtns = document.querySelectorAll('.tabbuttonwrapper .tab-button');
let url = window.location.toString();
let hash2 = window.location.hash.substring(1);
if (hash2) {
$('.tabbuttonwrapper .tab-button').removeClass('w--current');
allTabBtns.forEach(function (el) {
    let sqpl_link = '#' + el.getAttribute('id');
    if (sqpl_link === window.location.hash) {
        el.classList.add('w--current');
        triggerBrianTab(el);
    }
})
}
}

(function(){
    function activateBrianTab(){
        triggerBrianOnLoad()
        $('.tabbuttonwrapper .tab-button').click(triggerBrianTab);
        $('.w-tab-content .tab-label').click(triggerBrianTab);
    }
    window.addEventListener('load', activateBrianTab);
})()
