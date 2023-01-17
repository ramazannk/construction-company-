const modalFunction = (btnSelector, modalSelector, closeSelector, overlay = true) =>{
    const btn = document.querySelectorAll(btnSelector),
          close = document.querySelector(closeSelector),
          modal = document.querySelector(modalSelector),
          windows = document.querySelectorAll('[data-modal]');

    function showModal(){
        modal.classList.add('show');
        modal.classList.remove('hide');
        
        document.body.style.overflow = "hidden";
        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = 'block';
    }
    function closeModal(){
        modal.classList.add('hide');
        modal.classList.remove('show');
        
        document.body.style.overflow = "";
        windows.forEach(item => {
            item.style.display = 'none';
        });
        modal.style.display = 'none';
    }
    close.addEventListener('click', ()=>{
        closeModal(); 
    });
    
    modal.addEventListener('click',(e)=>{
        if(e.target == modal && overlay){
            closeModal();
        }
    });

    btn.forEach(item=>{
        item.addEventListener('click', (e)=>{
            if(e.target){
                e.preventDefault();
            }
            showModal();
        });
    });

};
export default modalFunction;