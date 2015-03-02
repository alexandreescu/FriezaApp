Ext.define('FriezaApp.store.Request', {
 extend: 'Ext.data.Store',

 config: {
  autoLoad: true,
  fields: [
   'title',
   'request',
   'requester'
  ],
  listeners: {
   refresh: {
    fn: function(store) {
     console.log('oop');
    }
   }
  }

  // data: [
  //  {
  //   title: 'Story of the Champion',
  //   request: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis tincidunt orci nibh, eget gravida metus iaculis sed. Duis faucibus mi congue semper blandit. Nulla dapibus magna sed sodales accumsan. Nullam vel tincidunt augue. Ut efficitur augue in lacus molestie varius. Cras tempus, arcu at hendrerit blandit, est orci ultricies arcu, et vestibulum elit elit vel nunc. Proin hendrerit ullamcorper lobortis. Aliquam erat volutpat.',
  //   requester: 'The Champion Miek'
  //  }
  // ]
 }
});
