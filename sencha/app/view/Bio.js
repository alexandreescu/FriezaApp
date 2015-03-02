Ext.define('FriezaApp.view.Bio', {
 extend: 'Ext.Container',
 xtype: 'Bio',

 config: {
  layout: {
      type: "vbox",
      align: "middle",
      pack: "center",
  },
  style: 'background-color: #4296e6;',
  items: [
  {
      xtype: "titlebar",
      docked: "top",
      title: "Biography"
  },
  {
      xtype: "container",
      name: 'risetitle',
      html: 'The Rise to Glory',
      style: 'font-size: 1.8em; font-family: Impact; letter-spacing: 0.05em; text-shadow: 0.1em 0.1em 0.1em gray; margin: 1.5em 1.5em 2.5em 1.5em;'
  },
  {
      xtype: "container",
      name: "spooky",
      html: '<p>Lord Supreme Architect, also known in mobile mythology as The Dozer, is a master or the coding arts. Having studied under his heroes Tyler Benton and the ColdFusion Demigod, he boasts a wide skillset. Most notable of his skills is his "Are you fucking serious face?"</p><br>(Showcased below)<br><br><img class="wtf" src="http://i3.kym-cdn.com/entries/icons/original/000/005/545/OpoQQ.jpg">',
      style: "font-size: 1em; font-family: Verdana; padding: 1em; box-shadow: 0em 0em 0.2em black; background-color: whitesmoke;",
  }]
 }
});
