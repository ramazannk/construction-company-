const changeModalForm =(state)=>{
    const modalform = document.querySelectorAll('.balcon_icons_img'),
          modalWidth = document.querySelectorAll('#width'),
          modalHeight = document.querySelectorAll('#height'),
          modalSelect = document.querySelectorAll('#view_type'),
          modalChexbox = document.querySelectorAll('.checkbox');
        
    function allModal(event, elem, prop){
        elem.forEach((item, i)=>{
            item.addEventListener(event, ()=>{
                switch(item.nodeName){
                    case 'SPAN':
                        state[prop] = i;
                        break;
                    case 'INPUT':
                        if(item.getAttribute('type') === 'checkbox'){
                            i === 0 ? state[prop] = 'теплые' : state[prop] = 'холодные';
                            elem.forEach((box, j)=>{
                                box.checked = false;
                                if (i == j){
                                    box.checked = true;
                                }
                            });
                        }else{
                            state[prop] = item.value;
                        }
                        break;
                    case 'SELECT':
                        state[prop] = item.value;
                        break;
                }
                console.log(state);
            });
        });
    }   
    allModal('click', modalform, 'form');
    allModal('input', modalWidth, 'width');
    allModal('input', modalHeight, 'height');
    allModal('change', modalSelect, 'select');
    allModal('change', modalChexbox, 'checkbox');
};
export default changeModalForm;