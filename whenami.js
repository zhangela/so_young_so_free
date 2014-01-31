if (Meteor.isClient) {
  Session.set("timeStart", 8);
  Session.set("timeEnd", 19);
  Session.set("workWeek", false);

  var weekdayRange = function () {
    if (Session.get("workWeek")) {
        return _.range(1, 6);
    }

    return _.range(7);
  };

  var indexToWeekdayName = function (index) {
    return [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
      "Sunday"
    ][index];
  };

  var indexToHourName = function (index) {
    if (index === 0) {
      return "12 am";
    } else if (index === 12) {
      return "12 pm";
    } else if (index < 12) {
      return index + " am";
    } else {
      return (index - 12) + " pm";
    }
  };

  Template.calendar.helpers({
    hours: function () {
      var timeRange = _.range(Session.get("timeStart"),
        Session.get("timeEnd"));
      return _.map(timeRange, indexToHourName);
    },
    weekdayNames: function () {
      return _.map(weekdayRange(), indexToWeekdayName);
    }
  });
}