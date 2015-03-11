Ext.define('FriezaApp.view.LSA', {
    extend: 'Ext.Container',
    xtype: 'LSA',
    config: {
     layout: {
      type: 'vbox',
      align: 'middle',
      pack: 'center'
     },
     style: 'background-image: url(resources/images/bluewaves1.jpg);',
     items: [
         {
             xtype: 'titlebar',
             docked: 'top',
             title: 'Lord Supreme Architect',
             cls: 'titletheme1'
         },
         {
             xtype: 'container',
             html: '<img style="max-width:100%; max-height:100%" src="resources/images/aaron.png">',
             listeners: {
                 touchstart: {
                     fn: function() {
                         var audio = Ext.ComponentQuery.query('audio[name=fu]')[0];
                         // var activeTab = Ext.ComponentQuery.query('Main')[0].getActiveItem().tabIndex;
                         if (audio.isPlaying()) {
                             audio.stop();
                         } else {

                              if (Ext.os.is.Android) {
                                  var src = '/android_asset/www/resources/audio/fu.mp3';
                                  var media = new Media(src);
                                  media.play(); //this is Android plugin stuff so audio will play on Android
                              } else {
                                  audio.play();
                              }
                           }
                     },
                     element: 'element'
                 }
             }
         },
         {
             xtype: 'audio',
             name: 'fu',
             hidden: true,
             url: 'resources/audio/fu.mp3'
         }
     ]
    }
});