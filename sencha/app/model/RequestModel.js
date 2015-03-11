Ext.define('FriezaApp.model.RequestModel', {
 extend: 'Ext.data.Model',
 config: {
  fields: [
   {
    name: 'requester'
   },
   {
    name: 'title'
   },
   {
    name: 'request'
   }
  ],
  validations: [
   {
    field: 'requester',
    type: 'presence'
   },
   {
    field: 'title',
    type: 'presence'
   },
   {
    field: 'request',
    type: 'presence'
   }
  ]
 }
})