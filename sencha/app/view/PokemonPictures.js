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
  cls: 'apptheme1',
  items: [{
      title: "Poke Pics",
      cls: 'titletheme1',
      xtype: "dataview",
      store: "PokemonPics",
      itemTpl: '<img class="pokepicgrid" src="{url}">',
      action: "zoom"
  }]
 }
});
