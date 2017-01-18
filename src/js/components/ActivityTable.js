import React from 'react';

export default class ActivityTable extends React.Component {
constructor(){
  super();
  this.activities = [
    {date: "2016-01-01", distance: 15.12, duration: "15:15"},
    {date: "2016-01-01", distance: 25.12, duration: "15:15"},
    {date: "2016-01-01", distance: 15.12, duration: "15:15"},
    {date: "2016-01-01", distance: 45.12, duration: "15:15"},
    {date: "2016-01-01", distance: 15.12, duration: "15:15"},
    {date: "2016-01-01", distance: 55.12, duration: "15:15"},
    {date: "2016-01-01", distance: 65.12, duration: "15:15"},
  ];
}


  render () {
    return (
  <table class="table table-bordered table-responsive">
    <thead>
      <tr>
        <th>Date</th>
        <th>Distance</th>
        <th>Duration</th>
      </tr>
    </thead>
    <tbody>
      {
        this.activities.map(function(activity) {
                    return (
                      <tr>
                      <td key={activity.date}>{activity.date}</td>
                      <td key={activity.distance}>{activity.distance}</td>
                      <td key={activity.duration}>{activity.duration}</td>
                    </tr>
                    )
                })
      }
    </tbody>
  </table>
    );
  }

}
