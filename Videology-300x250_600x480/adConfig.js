var adConfig = {
    "contraido_width": "300",
    "contraido_height": "250",
    "panel_usuario_width": "600",
    "panel_usuario_height": "480",
    "delay_expansion": "300",// milisegundos
    "auto_cierre": "8000",    // milisegundos

};



////////Funciones comunes, NO ELIMINAR!!!!!!!!////////////////////

function initEB(){
	if (!EB.isInitialized()) {
		EB.addEventListener(EBG.EventName.EB_INITIALIZED, startAd);
	}else {
		startAd();
	}
}

function is_touch_device() {
	return (('ontouchstart' in window) || (navigator.MaxTouchPoints > 0) || (navigator.msMaxTouchPoints > 0));
}

window.addEventListener("load", initEB);
///////////////////////////////////////////////////////////////////