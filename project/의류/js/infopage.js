const RegisterEventService = {
    getColorSelectObj: () => document.querySelectorAll(".product-inputs")[0],
    getSizeSelectObj: () => document.querySelectorAll(".product-inputs")[1],

    init: function() {
        this.getSizeSelectObj().disabled = true;
    },

    addColorSelectEvent: function() {
        this.getColorSelectObj().onchange = () => {
            if(this.getColorSelectObj().value != "none"){
                this.getSizeSelectObj().disabled = false;
            }else{
                this.getSizeSelectObj().disabled = true;
            }
        }
    }
}

const ProductRegistration = {
    initRegisterEvent: () => {
        RegisterEventService.init();
        RegisterEventService.addColorSelectEvent();
    }
}

window.onload = () => {
    ProductRegistration.initRegisterEvent();
}