Ext.define('FriezaApp.view.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'Main',
    requires: [
        'Ext.TitleBar',
        'Ext.Img',
        'Ext.Audio',
        'Ext.Panel',
        'Ext.Label'
    ],
    config: {
        tabBarPosition: 'bottom',
        zIndex: 1,
        items: [
            {
             xtype: 'LSA',
             iconCls: 'home',
             tabIndex: 0,
             title: 'LSA'
            },
            {
             xtype: 'Bio',
             iconCls: 'info',
             tabIndex: 1,
             title: 'Bio'
            },
            {
             xtype: 'Dozer',
             iconCls: 'compose',
             tabIndex: 2,
             title: 'Dozer'
            },
            {
             xtype: 'DozerTasks',
             iconCls: 'list',
             tabIndex: 3,
             title: 'DozerTasks'
            },
            {
             xtype: 'PokemonPictures',
             iconCls: 'bookmarks',
             tabIndex: 4,
             title: 'Poke Pics'
            }
        ]
    }
});
