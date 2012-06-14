/**
 * Handles all logic related to the application modules
 */
Ext.define('ModulesManager', {
	
	extend: 'Object',
    singleton: true,
    
    /**
     * Contains the modules that have been already loaded so we dont loaded them again
     */
    loadedModules: {},
    
    selectedModuleItem: undefined,
    selectedModuleInstance: undefined,
    oldSelectedModuleItem: undefined,
    oldSelectedModuleInstance: undefined,
    
    /**
     * Initializes the ModulesManager listeners
     */
    init: function(){
    },
    
    /**
     * Sets the selectedModuleItem in the session and fires the moduleItemSelected event
     */
    setSelectedModuleItem: function(argModuleItem){
    	debugger;
    	this.oldSelectedModuleItem = this.selectedModuleItem;
    	this.oldSelectedModuleInstance = this.selectedModuleInstance;
    	this.selectedModuleItem = argModuleItem;
    	if( !argModuleItem || !argModuleItem.get('moduleFolder') ){
    		return;
    	}
    	this.loadModule();
    },
    
    /**
     * Loads the module associated to the moduleItem passed as parameter
     */
    loadModule: function(){
    	debugger;
    	if(!this.selectedModuleItem){
    		return;
    	}
    	this.unloadOldModule();
    	this.loadingMask = new Ext.LoadMask(Ext.getBody(), {msg:"Loading Module"});
		this.loadingMask.show();
    	if(this.loadedModules[this.selectedModuleItem.get('name')]){
    		this.onModuleLoaded();
    		return;
    	}
    	this.loadModuleAppFile();
    },
    
    /**
     * Loads the module app javascript file
     */
    loadModuleAppFile: function(){
    	debugger;
    	var tmpModuleFolderName = this.selectedModuleItem.get('moduleFolder');
    	var tmpModuleAppFile = "modules/" + tmpModuleFolderName + "/app.js";
    	
    	Ext.Ajax.request({
            url: tmpModuleAppFile,
            success: function(argResponse,argRequest){
            	debugger;
            	eval(argResponse.responseText);
            	this.onModuleLoaded();
            },
            failure: this.onModuleFailure,
            scope: this 
        });
    	
    },
    
    /**
     * Called when the module was loaded, here we try to create the module instance,
     * in case that is not possible an error is shown to the user
     */
    onModuleLoaded: function(){
    	if( !this.loadedModules[this.selectedModuleItem.get('name')] ){
//    		this.loadModuleCssFile();
//    		this.loadModuleLocaleFile();
    		this.createModuleInstance();
    		return;
    	}
    	if(this.selectedModuleItem.get('unloadCssFile')){
    		this.loadModuleCssFile();
    		this.createModuleInstance();
    		return;
    	}
    	this.createModuleInstance();
    },
    
    /**
     * Here we load the css file associated with the just loaded module
     */
    loadModuleCssFile: function(){
    	return;
    	var tmpModuleFolderName = this.selectedModuleItem.get('moduleFolder');
    	var tmpModuleCssFile = "";
    	if( !this.selectedModuleItem.get('cssFile') || this.selectedModuleItem.get('cssFile') === "" ){
    		tmpModuleCssFile = "modules/" + tmpModuleFolderName + "/resources/css/" + tmpModuleFolderName + ".css";
    	}else{
    		tmpModuleCssFile = this.selectedModuleItem.get('cssFile');
    	}
    	JsAndCssLoader.loadCss(tmpModuleCssFile);
    },
    
    /**
     * Unloads old module, unloads if needed the css file and 
     *  calls the clearModelLocator function
     */
    unloadOldModule: function(){
    	if(!this.oldSelectedModuleItem){
    		return;
    	}
    	this.oldSelectedModuleInstance.clear();
    },
    
    /**
     * Here we load the locale file associated with the just loaded module
     */
    loadModuleLocaleFile: function(){
    	return;
    	var tmpModuleFolderName = this.selectedModuleItem.get('moduleFolder');
    	var tmpModuleLocaleFile = "";
    	if( !this.selectedModuleItem.get('localeFile') || this.selectedModuleItem.get('localeFile') === "" ){
    		tmpModuleLocaleFile = "modules/" + tmpModuleFolderName + "/resources/locale/" + tmpModuleFolderName + "-lang-" + LocalizationManager.currentLanguage + ".js";
    	}else{
    		tmpModuleLocaleFile = this.selectedModuleItem.get('localeFile');
    	}
    	Ext.Ajax.request({
            url: tmpModuleLocaleFile,
            success: this.onModuleLocaleSuccess,
            failure: this.onModuleLocaleFailure,
            scope: this 
        });
    },
    
    onModuleLocaleSuccess: function(argResponse,argRequest){
    	eval(argResponse.responseText);
    	this.createModuleInstance();
    },
    
    onModuleLocaleFailure: function(argResponse,argRequest){
    	console.log("An error occurred trying to load module locale file = " + argRequest.url);
    	this.createModuleInstance();
    },
    
    /**
     * Here we create the module instance and we add it to the loadedModules map
     */
    createModuleInstance: function(){
    	debugger;
    	var tmpModuleInstance = Ext.create(this.selectedModuleItem.get('name'),{
			moduleItem: this.selectedModuleItem,
			afterLaunchFunction: this.initializeModule,
			afterLaunchFunctionScope: this
		});
		this.loadedModules[this.selectedModuleItem.get('name')] = true;
    },
    
    /**
     * Called if an error occurred loading a specific module
     */
    onModuleFailure: function(argResponse,argRequest){
    	ErrorsManager.handleFatalError(ErrorCodes.APP_MODULE_NOT_FOUND,"\n" + argRequest.url);
    },
    
    /**
     * Here we execute the module initialization process
     */
    initializeModule: function(argModuleInstance){
    	this.selectedModuleInstance = argModuleInstance;
    	this.selectedModuleInstance.init();
//    	ViewsManager.clearLoadedViews();
    	this.loadingMask.hide();
    	EventBus.fireEvent(FrameworkEvents.MODULE_LOADED,argModuleInstance);
    }
    
},
	/**
	 * This is called by extjs framework after the ModulesManager was instantiated,
	 * here we call the init method in order to initializes the class
	 */
	function(){
		ModulesManager.init();
	}
);
