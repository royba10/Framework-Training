/**
 * Utilitary class with helper methods for gui components
 */
Ext.define('GuiUtil', {
	
	extend: 'Object',
    singleton: true,
    
    /**
	 * Creates a toolbar item that will be rendered as a button
	 * @param {String} argItemName The name will be used as the item text
	 * @param {boolean} argPressed Indicates if the button should be pressed or not
	 * @param {object} argScope Scope in which handler will be executed
	 * @param {Function} argHandler Handler to be called in toggle events
     * @return {String} The toolbar item instance
	 */
    createToolbarButtonItem: function(argItemName,argPressed,argScope,argHandler) {
    	var tmpToolbarItem = {
			text: argItemName,
			pressed: argPressed,
			listeners: {
				scope: argScope,
				toggle: argHandler
			}
		};
    	return tmpToolbarItem;
    },
    
    /**
     * Creates a container
     */
    createContainer: function(argTitle){
    	var tmpContainerItem = {
    		xtype: 'container',
    		title: argTitle
    	};
    	return tmpContainerItem;
    }
    
});
