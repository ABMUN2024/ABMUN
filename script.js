let dropdowns = document.querySelectorAll('.dropdown');
let dropDisappearTimer;

for(let i of dropdowns){
    let dItems = document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]');
    
    i.addEventListener('mouseover', function(){
        dItems.style.display = "block";
        dItems.children[0].style.display = "flex";
    })
    
    // speghetti code moment :sklown:
    i.addEventListener('mouseout', function(){
        if(document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]:hover') == null){
            dItems.style.display = "none";
        }
    })
    dItems.addEventListener('mouseout', function(){
        if(document.querySelector('.dropdown[d-val="'+i.getAttribute('d-val')+'"]:hover') == null && document.querySelector('.dropdown-items[d-val="'+i.getAttribute('d-val')+'"]:hover') == null){
            dItems.style.display = "none";
        }
    })
}

let mobileDropdownOpen = false
const mobileNavBtn = document.getElementById('mobileNavBtn')
const mobileNavCloseBtn = document.getElementById('mobileNavClose')

mobileNavBtn.onclick = function(){
    mobileDropdownOpen = true;
    showDropdown()
}
mobileNavCloseBtn.onclick = function(){
    mobileDropdownOpen = false;
    showDropdown()
}

function showDropdown(){
    let mobileNavPopup = document.getElementById('mobileNavDropdown')
    if(mobileNavBtn.style.display =='none'){
        mobileNavBtn.style.display="block";
    }else{
        mobileNavBtn.style.display="none";
    }
    
    if(mobileNavPopup.style.display =='flex'){
        mobileNavPopup.style.display="none";
    }else{
        mobileNavPopup.style.display="flex";
    }
}

const popupHeader = 'Website Launched';
const popupPara = "Join Alberta Model UN in <a href='registration.html'>Registration</a> or check out our <a href='committees.html'>Committees</a>.";
const popup = document.getElementById('popup')
const banner = document.getElementById('banner')

popup.querySelector('h3').innerHTML = popupHeader
popup.querySelector('p').innerHTML = popupPara
banner.querySelector('h3').innerHTML = popupHeader
banner.querySelector('p').innerHTML = popupPara

popup.querySelector('.banner-close').onclick = function(){
    popup.setAttribute('style', 'display:none;')
}
banner.querySelector('.banner-close').onclick = function(){
    banner.setAttribute('style', 'display:none;')
}
