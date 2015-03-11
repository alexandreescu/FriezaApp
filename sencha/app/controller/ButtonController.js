Ext.define('FriezaApp.controller.ButtonController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
         help: 'button[action=callforhelp]' //attach name to what FIRES the event
        },
        control: {
         help: {
          tap: 'requestDozer'
         }
        }
    },

    requestDozer: function() {
     var store = Ext.getStore('Request'),
         request = Ext.ComponentQuery.query('Dozer')[0].getValues(),
         model = Ext.create('FriezaApp.model.RequestModel', request),
         errorValidate = model.validate();
     if(errorValidate.isValid()){
      if (request){
          if (store.getCount() > 9){
           store.removeAt(0);
           store.add(request);
           Ext.ComponentQuery.query('Dozer')[0].reset();
          }else{
           store.add(request);
           Ext.ComponentQuery.query('Dozer')[0].reset();
          }
       }
       Ext.ComponentQuery.query('Main')[0].setActiveItem(3);
      }
      else{
       Ext.Msg.alert('Aye', 'You need to actually fill out this whole form completely to submit.');
      }
    }

    // onEvent: function() {

    // }
});

