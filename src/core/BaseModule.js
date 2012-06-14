/**
 * Base class for all application modules
 */
Ext.define('BaseModule', {
	
	extend: 'Ext.app.Application',
	
	appFolder: undefined,
	
	/**
	 * This is the moduleItem related to this module
	 */
	moduleItem: undefined,
	
	/**
	 * This function is called after the module is ready, that means
	 * after all its dependencies were loaded successfully
	 */
	afterLaunchFunction: undefined,
	
	/**
	 * Scope in which the afterLauncFunction will be called
	 */
	afterLaunchFunctionScope: undefined,
	
	constructor: function(config) {
		debugger;
		if(this.appFolder === undefined && this.name){
			this.appFolder = "modules/" + this.name.toLowerCase() + "/app";
		}
		this.callParent(arguments);
	},
	
	launch: function(){
		debugger;
		if(this.afterLaunchFunction){
			this.afterLaunchFunction.call(this.afterLaunchFunctionScope,this);
		}
	},
	
	init: function(){
	},
	
	clear: function(){
	}
    
});
