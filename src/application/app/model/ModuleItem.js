Ext.define('App.model.ModuleItem', {
	
    extend: 'App.model.BaseItem',
    
    fields: [
    	{
    		name: "moduleFolder",
    		defaultValue: undefined,
    		convert: function(argValue,argRecord){
    			if(argValue === undefined && argRecord.get('name')){
    				argValue = argRecord.get('name').toLowerCase();
    			}
    			return argValue;
    		}
    	},
    	{name: "cssFile"},
    	{name: "unloadCssFile",type:"boolean",defaultValue:false},
    	{name: "localeFile"}
    ],
    
	associations: [
        {type: 'hasMany', model: 'App.model.ViewItem', name: 'views'}
	],

	proxy: {
        type: 'ajax',
        url: 'application/data/sitemap.json',
        reader: {
            type: 'json',
            root: 'result',
            successProperty: 'success'
        }
    }
    
});