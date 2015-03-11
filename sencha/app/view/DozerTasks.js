Ext.define('FriezaApp.view.DozerTasks', {
    extend: 'Ext.navigation.View',
    xtype: 'DozerTasks',
    config: {
     listeners: {
        pop: {
         fn: function(){
          Ext.ComponentQuery.query('Main')[0].setTabBar({hidden: false})
         }
        }
     },
     cls: 'apptheme1',
     items: [{
      title: 'Dozer Tasks',
      cls: 'titletheme1',
      xtype: 'list',
      selectedCls: 'none',
      itemTpl: '<h3 class="center dozertask dozertasktitle">{title}</h3></br><h4 class="center dozertask dozertaskrequester">{requester}</h4>',
      store: 'Request',
      scrollable: true,
      action: 'requestdetails',
      emptyText: '<h2 class="norequests">There are no requests for the Dozer at this time.</h2>'
     }]
    }
});