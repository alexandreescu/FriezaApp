Ext.define('FriezaApp.store.Request', {
 extend: 'Ext.data.Store',

 config: {
  autoLoad: true,
  fields: [
   'title',
   'request',
   'requester'
  ],
  data: []
 }
});
