const RegisterEventService = {
    getColorSelectObj: () => document.querySelectorAll(".product-inputs")[0],
    getSizeSelectObj: () => document.querySelectorAll(".product-inputs")[1],


    init: function() {
        this.getColorSelectObj().disabled = true;
        this.getSizeSelectObj().disabled = true;
    },

    addColorSelectObjEvent: function() {
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
    registerEventService: RegisterEventService
}

window.onload = () => {
    ProductRegistration.registerEventService.init();
    ProductRegistration.registerEventService.addColorSelectObjEvent();
}