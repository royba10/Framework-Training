Ext.define('App.controller.ModuleItemsController', {
	
    extend: 'Ext.app.Controller',
    
    views: [
    	'application.ApplicationView'
    ],

    model: [
        'ModuleItem'
    ],

    stores: [
        'ModuleItems'
    ],

    refs:[
        {
            ref: 'applicationViewInstance',
            selector: 'applicationview'
        },
        {
            ref: 'mainToolbarInstance',
            selector: 'toolbar[name=mainToolbar]'
        }
    ],

    onApplicationViewAfterRender: function(){
        this.moduleItemsStore = Ext.data.StoreManager.lookup('ModuleItems');
        this.moduleItemsStore.load({
            scope: this,
            callback: this.onModuleItemsLoaded
        });
    },

    onModuleItemsLoaded: function(argRecords, argOperation, argSuccess){
        if(!argSuccess){
            ErrorManager.handleFatalError(ErrorCodes.APP_LOADING_MODULES_STORE);
            return;
        }
        this.loadModuleOptions();
    },

    loadModuleOptions: function(){
        var tmpContModules = 0;
        var tmpModuleItem = null;
        var i = 0;
        for(i=0; i <= this.moduleItemsStore.count()-1; i++){
            tmpModuleItem = this.moduleItemsStore.getAt(i);
            if(tmpModuleItem.get('hidden') === false){
                tmpContModules++;
            }
        }
        if(tmpContModules === 0){
            ErrorManager.handleFatalError(ErrorCodes.APP_LOADING_MODULES_STORE);
            return;
        }
        if(tmpContModules === 1){
            var tmpToolbar = this.getMainToolbarInstance();
            tmpToolbar.setVisible(false);
            return;
        }
        this.createToolbarOptions();
    },

    createToolbarOptions: function(){
        var tmpToolbar = this.getMainToolbarInstance();
        var tmpModuleItem = null;
        var tmpToolbarItem;
        var i = 0;
        tmpToolbar.suspendLayout = true;
        for(i=0; i <= this.moduleItemsStore.count()-1; i++){
            tmpModuleItem = this.moduleItemsStore.getAt(i);
            if(tmpModuleItem === null){
                continue;
            }
            if(tmpModuleItem.get('hidden') === false){
                tmpToolbarItem = GuiUtil.createToolbarButtonItem(tmpModuleItem.get('name'),false, this, this.onMainToolbarHandler);
                if(tmpToolbarItem === null){
                    continue;
                }
                tmpToolbar.add(tmpToolbarItem);
            }
        }
        tmpToolbar.suspendLayout = false;
        tmpToolbar.doLayout();
    },

    onMainToolbarHandler: function(){
        alert('llega');
    },
    
    init: function() {
    	this.control(
            {
                'applicationview':{
                    afterrender: this.onApplicationViewAfterRender
                }
            }
        );
    }
    
});
