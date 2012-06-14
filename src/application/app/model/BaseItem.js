Ext.define('App.model.BaseItem', {
	
    extend: 'Ext.data.Model',
    
    fields: [
    	{name: 'name'},
    	{
    		name: 'label',
    		convert: function(argValue,argRecord){
    			if( typeof(Locales) !== "undefined" && argRecord && argRecord.get('localeKey') ){
    				var tmpLabel = Locales[argRecord.get('localeKey')]
    				tmpLabel = Ext.util.Format.htmlDecode(tmpLabel);
    				return tmpLabel;
    			}
    			return argValue;
    		}
    	},
    	{name: 'isSelected',type:'boolean',defaultValue:false},
    	{name: 'localeKey',defaultValue:undefined},
    	{name: 'hidden', type:'boolean',defaultValue:false}
    ]
    
});