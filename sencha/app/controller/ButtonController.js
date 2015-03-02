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
     var store = Ext.getStore('Request');
     var request = Ext.ComponentQuery.query('Dozer')[0].getValues();
     if (request){
         if (store.getCount() > 9){
          store.removeAt(0);
          store.add(request);
          Ext.ComponentQuery.query('Dozer')[0].reset();
         }else{
          store.add(request);
          Ext.ComponentQuery.query('Dozer')[0].reset();
         }
      }else{
      Ext.Msg.alert('dummy', 'You are a dummy head.');
     }
     Ext.ComponentQuery.query('Main')[0].setActiveItem(3);
    }

    // onEvent: function() {

    // }
});

