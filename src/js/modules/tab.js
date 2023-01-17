const tabs =(tabSelector, contentSelector, tabParentSelector, active, display = 'block')=>{
    const tabsLink = document.querySelectorAll(tabSelector),
          tabContet = document.querySelectorAll(contentSelector),
          parentSelector = document.querySelector(tabParentSelector);


    function hideTab(){
        tabsLink.forEach(item=>item.classList.remove(active));
        tabContet.forEach(item => item.style.display = 'none');
    }
    hideTab();
    function showTab(i = 0){
        tabsLink[i].classList.add(active);
        tabContet[i].style.display = display;
    }
    showTab();

    parentSelector.addEventListener('click', (e)=>{
        if(e.target && (e.target.classList.contains(tabSelector.replace(/\./, "")) || 
        e.target.parentNode.classList.contains(tabSelector.replace(/\./, "")))){
            tabsLink.forEach((item, i)=>{
                if(e.target == item || e.target.parentNode == item){
                    console.log(e.target);
                    hideTab();
                    showTab(i);
                }
            });
        }
    });




};
export default tabs;