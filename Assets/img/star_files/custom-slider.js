theme.alinga=theme.alinga||{},theme.alinga.multiStepMobileBtnUpdate=()=>{if(window.innerWidth<768){let btnClass=document.querySelector(".multi-step-wrapper .section-btn .button");btnClass.classList.remove("btn--secondary"),btnClass.classList.remove("btn-medium"),btnClass.classList.add("white"),btnClass.classList.add("--bs-btn-small")}},theme.alinga.blogSlider=()=>{const blogSliderImg=new Swiper("#blogSlider",{slidesPerView:1,loop:!0,spaceBetween:20,autoplay:{delay:3e3},pagination:{el:".swiper-scrollbar",type:"progressbar"},breakpoints:{768:{slidesPerView:2.2,autoplay:{delay:3e3},loop:!0,spaceBetween:20},1024:{slidesPerView:2.2,autoplay:{delay:3e3},spaceBetween:40}}})},theme.alinga.textwithiconslider=()=>{if(window.innerWidth<768){const pdpTextIconSlider=new Swiper("#pdpTextIconSlider",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{767:{slidesPerView:1,autoplay:{delay:3e3},loop:!0}}})}},theme.alinga.thumbnailSlider=()=>{const thumbnailSlider=new Swiper("#Product-Thumbnails",{slidesPerView:1,spaceBetween:8,draggable:!0,navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{768:{slidesPerView:7},1024:{slidesPerView:7}}})},document.addEventListener("DOMContentLoaded",()=>{theme.alinga.textwithiconslider(),theme.alinga.multiStepMobileBtnUpdate(),theme.alinga.blogSlider(),theme.alinga.thumbnailSlider()});
//# sourceMappingURL=/cdn/shop/t/224/assets/custom-slider.js.map?v=10642087544572998441692614178