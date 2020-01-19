function values(file) {
  var config = require(file);
  const timeline = config.timelineObjects;

  var sum = timeline
    .filter(obj => {
      return obj.activitySegment;
    })
    .map(obj => {
      return {
        distance: obj.activitySegment.distance,
        startTime: obj.activitySegment.duration.startTimestampMs,
        endTime: obj.activitySegment.duration.endTimestampMs
      };
    });

  function totalDays() {
    //The array that stores the last 30 days
    var distArry = [];
    var marker = sum[sum.length - 1].startTime - 2592000000;
    for (var i = 0; i < sum.length - 1; i++) {
      if (sum[i].startTime > marker) {
        var d = new Date(sum[i].startTime / 1);
        sum[i]["day"] = d.getDate();
        distArry.push(sum[i]);
      }
    }
    return distArry;
  }

  var array = totalDays();

  //Prints the array that gives 'distance' and 'day'
  function totalDistance() {
    var newArr = [];
    var dayscompleted = [];
    var dist = 0;
    for (var i = 0; i < array.length; i++) {
      if (dayscompleted.includes(array[i].day)) {
        continue;
      }

      dayscompleted.push(array[i].day);
      dist = 0;

      for (var j = i; j < array.length; j++) {
        if (array[i].day == array[j].day) {
          dist += array[j].distance;
        }
      }
      newArr.push({ distance: dist, day: array[i].day });
    }
    return newArr;
  }
}
export default values;
