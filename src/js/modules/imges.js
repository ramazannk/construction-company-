const imges=()=>{
    const imgCreating = document.createElement('div'),
          imgWindow = document.createElement('img'),
          parentImg = document.querySelector('.works');
          
        imgCreating.classList.add('popup');
        parentImg.appendChild(imgCreating);
        imgCreating.style.justifyContent = 'center';
        imgCreating.style.alignItems = 'center';
        imgCreating.style.display = 'none';

        imgCreating.appendChild(imgWindow);

        parentImg.addEventListener('click', (e)=>{
            e.preventDefault();

            if(e.target && e.target.classList.contains('preview')){
                imgCreating.style.display = 'flex';
                const path = e.target.parentNode.getAttribute('href');
                imgWindow.setAttribute('src', path);
            }

            if(e.target && e.target.matches('div.popup')){
                imgCreating.style.display = 'none';
            }
        });
};
export default imges;