Ext.define('FriezaApp.view.DozerTasks', {
    extend: 'Ext.navigation.View',
    xtype: 'DozerTasks',
    config: {
     //store: 'Request',
     //allowDeselect: true,
     listeners: {
        pop: {
         fn: function(){
          Ext.ComponentQuery.query('Main')[0].setTabBar({hidden: false})
         }
        }
     },
     items: [{
      title: 'Dozer Tasks',
      xtype: 'list',
      selectedCls: 'none',
      itemTpl: '<h3 class="center dozertask dozertasktitle">{title}</h3></br><h4 class="center dozertask dozertaskrequester">{requester}</h4>',
      store: 'Request',
      scrollable: true,
      action: 'requestdetails'
     }]
    }
});