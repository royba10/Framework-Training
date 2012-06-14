/**
 * Handles all logic related to the application initialization
 */
Ext.define('ApplicationInitializer', {

    extend: 'Object',

    /**
     * Initializes the ApplicationInitializer listeners
     */
    init: function(){
        EventBus.fireEvent(FrameworkEvents.APP_INIT_COMPLETE);
//    	EventBus.addListener(FrameworkEvents.LOCALES_LOADED,this.onLocalesLoaded,this);
//    	LocalizationManager.init();
    },

    /**
     * Called when the locales where loaded successfully
     */
    onLocalesLoaded: function(){
        EventBus.fireEvent(FrameworkEvents.APP_INIT_COMPLETE);
    }

});