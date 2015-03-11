Ext.define('FriezaApp.view.Dozer', {
    extend: 'Ext.form.Panel',
    xtype: 'Dozer',
    config: {

     layout: {
      type: 'vbox',
      align: 'middle',
      pack: 'center',
      cls: 'apptheme1'
     },
     items: [
         {
          xtype: 'titlebar',
          docked: 'top',
          title: 'Requesting the Dozer',
          cls: 'titletheme1'
         },
         {
          xtype: 'container',
          items: [
             {
              xtype: 'image',
              src: 'resources/images/bulldozer.jpg',
              width: '100%',
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
          cls: 'button-theme-a',
          text: 'Summon Dozer',
          ui: 'confirm',
          action: 'callforhelp'
         }
     ]
    }
});