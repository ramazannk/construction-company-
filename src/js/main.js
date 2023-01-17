import modalFunction  from "./modules/modal";
import timer from "./modules/timer";
import tabs from "./modules/tab";
import postForm from "./modules/form";
import changeModalForm from "./modules/changeModalForm";
import imges from "./modules/imges";
window.addEventListener('DOMContentLoaded', ()=>{

    let modalState = {};
    changeModalForm(modalState);
    modalFunction('.popup_engineer_btn', '.popup_engineer', '.popup_engineer .popup_close');
    modalFunction('.phone_link', '.popup', '.popup .popup_close');
    modalFunction('.popup_calc_btn', '.popup_calc', '.popup_calc_close', false);
    modalFunction('.popup_calc_button', '.popup_calc_profile', '.popup_calc_profile .popup_calc_profile_close', false);
    modalFunction('.popup_calc_profile_button', '.popup_calc_end', '.popup_calc_end_close', false);
    timer('.container1', '2023-02-01');
    tabs('.tabs', '.glazing_content', '.glazing_slider', 'active');
    tabs('.no_click', '.decoration_content > div > div', '.decoration_slider', 'after_click');
    tabs('.balcon_icons_img', '.big_img > img', '.balcon_icons', 'do_image_more', 'inline-block');
    postForm(modalState);
    imges();
    
});