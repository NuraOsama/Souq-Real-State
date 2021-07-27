 
 (function ($) {
 //chart
 Morris.Area({
    element: 'graph',
    data: [
      {x: '2019 Q1', y: 3, z: 3},
      {x: '2019 Q2', y: 2, z: 0},
      {x: '2019 Q3', y: 2, z: 5},
      {x: '2019 Q4', y: 4, z: 4}
    ],
    xkey: 'x',
    ykeys: ['y', 'z'],
    labels: ['Y', 'Z']
  }).on('click', function(i, row){
    console.log(i, row);
  })


  
})(jQuery);


