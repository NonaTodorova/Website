google.charts.load('current', {
  packages:['corechart']
}).then(function () {
  var data = google.visualization.arrayToDataTable([
    //inputing data for chart
    ['Nutrition', 'Amount (g)'],
    ['Fat',     7.8],
    ['Saturates',      4.9],
    ['Carbohydrate',  20.2],
    ['Sugars', 15.2],
    ['Fibre',    0.4],
    ['Protein', 1.9],
    ['Salt', 0.13]
  ]);

  var options = {
    //chart title
    title: 'Mini Colin the Caterpillar Cakes',
    //size of hole in middle of chart best between 0.4 and 0.6
    pieHole: 0.45,
  };

  var container = document.getElementById('piechart');
  var chart = new google.visualization.PieChart(container);

  google.visualization.events.addListener(chart, 'ready', function () {
    var chartLayout = chart.getChartLayoutInterface();
    var chartArea = chartLayout.getBoundingBox('chart');
    var pieLabels = container.getElementsByTagName('text');
    var pieHoleWidth;

    var sliceBounds = {
      bottom: null,
      top: null,
      left: null,
      right: null,
      height: null,
      width: null
    };

    //dealing with resizing of chart for responsiveness
    for (i = 0; i < data.getNumberOfRows(); i++) {
      var slice = chartLayout.getBoundingBox('slice#' + i);
      var sliceBottom = slice.top + slice.height;
      var sliceRight = slice.left + slice.width;
      sliceBounds.bottom = Math.max(sliceBottom, (sliceBounds.bottom || sliceBottom));
      sliceBounds.right = Math.max(sliceRight, (sliceBounds.right || sliceRight));
      sliceBounds.top = Math.min(slice.top, (sliceBounds.top || slice.top));
      sliceBounds.left = Math.min(slice.left, (sliceBounds.left || slice.left));
    }
    sliceBounds.height = sliceBounds.bottom - sliceBounds.top;
    sliceBounds.width = sliceBounds.right - sliceBounds.left;
  });

//chart redraws evrytime the window is resized
  chart.draw(data, options);
  window.addEventListener('resize', function () {
    chart.draw(data, options);
  }, false);
});
