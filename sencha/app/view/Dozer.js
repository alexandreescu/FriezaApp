Ext.define('FriezaApp.view.Dozer', {
    extend: 'Ext.form.Panel',
    xtype: 'Dozer',
    config: {

     layout: {
      type: 'vbox',
      align: 'middle',
      pack: 'center',
      cls: 'dozin' //need to add css for the dozin class
     },
     items: [
         {
          xtype: 'titlebar',
          docked: 'top',
          title: 'Requesting the Dozer'
         },
         {
          xtype: 'container',
          items: [
             {
              xtype: 'image',
              name: 'aaron',
              src: 'resources/images/aaron.png',
              width: 200,
              height: 200,
              margin: 'auto'
             },
             {
              xtype: 'fieldset',
              name: 'dozerRequest',
              items: [
                  {
                   xtype: 'textfield',
                   name: 'requester',
                   label: 'Name'
                  },
                  {
                   xtype: 'textfield',
                   name: 'title',
                   label: 'Title'
                  },
                  {
                   xtype: 'textareafield',
                   cls: 'noresize',
                   name: 'request',
                   label: 'Request'
                  }
              ]
             }
          ]
         },
         {
          xtype: 'button',
          name: 'cryforhelp',
          text: 'Summon Dozer',
          ui: 'confirm',
          action: 'callforhelp'
         }
     ]
    }
});