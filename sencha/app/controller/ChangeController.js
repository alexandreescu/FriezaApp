Ext.define('FriezaApp.controller.ChangeController', {
 extend: 'Ext.app.Controller',

 config: {
  refs: {
   requestValidate: 'textfield[action=requestValidate]',
   requestValidate: 'textareafield[action=requestValidate]'
  },
  control: {
   requestValidate: {
    keyup: 'requestValidation'
   }
  }
 },

 requestValidation: function() {
  var name = Ext.ComponentQuery.query('textfield[name=requester]')[0].getValue(),
      title = Ext.ComponentQuery.query('textfield[name=title]')[0].getValue(),
      request = Ext.ComponentQuery.query('textareafield[name=request]')[0].getValue();
  if(name != "" && title != "" && request != ""){
   Ext.ComponentQuery.query('button[name=cryforhelp]')[0].setDisabled(false);
  }
 }

})