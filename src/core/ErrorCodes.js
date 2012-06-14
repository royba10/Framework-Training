/**
 * Contains the collection of errorCodes used in the application
 */
Ext.define('ErrorCodes', {
	
	statics: {
		
		//FRAMEWORK ERROR CODES CONSTANTS: FROM 1 TO 100 - START
		
		APP_SUPPORTED_LANGUAGES_NOT_FOUND: 1,
		APP_LOCALIZATION_FILE_NOT_FOUND: 2,
		APP_LOADING_MODULES_STORE: 3,
		APP_MODULE_NOT_FOUND: 4,
		APP_CREATING_VIEW: 5,
		
		//FRAMEWORK ERROR CODES CONSTANTS: FROM 1 TO 100 - END
		
		//ERROR MESSAGES: Here we map every code to a user friendly message. - START
		
		1: "An error has occurred loading supported languages. \nPlease contact System Administrator",
		2: "An error has occurred loading localization file: ",
		3: "An error has occurred loading application modules items.",
		4: "An error has occurred loading module file: ",
		5: "An error has occurred creating page: "
		
		//ERROR MESSAGES: Here we map every code to a user friendly message. - END
		
	}
    
});
