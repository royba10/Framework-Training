Ext.define('ErrorManager', {
    extend: 'Object',
    singleton: true,

    handleFatalError: function(argErrorCode, argExtraMessage){
        this.showErrorWindow(argErrorCode, argExtraMessage, 'Fatal Error !!!', false);
    },

    handleSimpleError: function(argErrorCode, argExtraMessage){
        this.showErrorWindow(argErrorCode, argExtraMessage, '', true);
    },

    showErrorWindow: function(argErrorCode, argExtraMessage, argTitle, argClosable){
        if(!argErrorCode || !ErrorCodes[argErrorCode]){
            return;
        }
        var tmpMessage = ErrorCodes[argErrorCode];
        if(argExtraMessage){
            tmpMessage += " " + argExtraMessage;
        }
        var tmpErrorWindow = Ext.create('App.ux.ErrorWindow', {
            title: argTitle,
            closable: argClosable,
            errorMessage: tmpMessage
        });
        tmpErrorWindow.show();
    }
});
