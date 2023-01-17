const postForm =(state)=>{
    const forms = document.querySelectorAll('form'),
          inputsPhone = document.querySelectorAll('input[name="user_phone"]'),
          inputs = document.querySelectorAll('input');

    const message = {
        loading: 'loading',
        succes: 'succes sending',
        failure: 'failure'
    };

    inputsPhone.forEach(item =>{
        item.addEventListener('input', ()=>{
            item.value = item.value.replace(/\D/, "");
        });
    });

    const postData = async(url, data)=>{
        document.querySelector('.status').textContent = message.loading;
        let res = await fetch(url, {
            method: 'POST',
            body: data
        });
        return await res.text();
    };
    function creatInput(){
        inputs.forEach(item=>{
            item.value = "";
        });
    }

    forms.forEach(item=>{
        item.addEventListener('submit', (e)=>{
            e.preventDefault();

            const statusMessage = document.createElement('div');
                statusMessage.classList.add('status');
                statusMessage.style.cssText = "font-size: 2.4rem; text-transform: uppercase;";
                item.appendChild(statusMessage);

            const formData = new FormData(item);
            if(item.getAttribute('data-calc') === "end"){
                for (let key in state){
                    formData.append(key, state[key]);
                }
            }



            postData('assets/server.php', formData)
                .then(res=>{
                    console.log(res);
                    statusMessage.textContent = message.succes;
                })
                .catch(()=>{
                    statusMessage.textContent = message.failure;
                })
                .finally(()=>{
                    creatInput();
                    setTimeout(()=>{
                        statusMessage.remove();
                    }, 4000);
                });
        });
    });
    
};
export default postForm;
