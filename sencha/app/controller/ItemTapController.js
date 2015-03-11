Ext.define('FriezaApp.controller.ItemTapController', {
    extend: 'Ext.app.Controller',

    config: {
        refs: {
         zoom: 'dataview[action=zoom]',
         detail: 'list[action=requestdetails]'
        },
        control: {
         zoom: {
          itemtap: 'imageZoom'
         },
         detail: {
          itemtap: 'requestDetails'
         }
        }
    },

    imageZoom: function(dataview, index, target, record) {
     Ext.ComponentQuery.query('Main')[0].setTabBar({hidden: true})
     Ext.ComponentQuery.query('PokemonPictures')[0].push({
      html: '<img src="' + record.data.url + '">',
      scrollable: true,
      listeners: {
       tap: {
        fn: function(){
         Ext.ComponentQuery.query('PokemonPictures')[0].pop();
        },
        element: 'element'
       }
      }
     });
    },

    requestDetails: function(list, index, target, record) {
     Ext.ComponentQuery.query('Main')[0].setTabBar({hidden: true})
     Ext.ComponentQuery.query('DozerTasks')[0].push({
      html: '<h3 class="center detailsHeader">' + record.data.title + '</h3></br><p class="detailsDescription">' + record.data.request + '</p>',
      cls: 'apptheme1'
     });
    }

    // onEvent: function() {

    // }
});