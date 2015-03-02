Ext.define('FriezaApp.view.PokemonPictures', {
 extend: 'Ext.navigation.View',
 xtype: 'PokemonPictures',

 config: {
  listeners: {
      pop: {
          fn: function() {
              Ext.ComponentQuery.query("Main")[0].setTabBar({hidden: false});
          }
      }
  },
  items: [{
      title: "Poke Pics",
      xtype: "dataview",
      store: "PokemonPics",
      itemTpl: '<img class="pokepicgrid" src="{url}">',
      action: "zoom"
  }]
 }
});
