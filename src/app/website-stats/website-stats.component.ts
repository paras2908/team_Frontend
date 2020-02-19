import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import * as CanvasJS from '../../assets/canvasjs.min.js';

@Component({
  selector: 'app-website-stats',
  templateUrl: './website-stats.component.html',
  styleUrls: ['./website-stats.component.css']
})
export class WebsiteStatsComponent implements OnInit {
  dataPoints;
  constructor(private userservice: UserService) { }

  ngOnInit() {
  }

  drawchart() {
  var chart = new CanvasJS.Chart ('chartContainer', {
  	animationEnabled: true,
	theme: "light2",
	title: {
		text: "Daily Sales Data"
	},
	axisY: {
		title: "Units",
		titleFontSize: 24
	},
	data: [{
		type: "column",
		yValueFormatString: "#,### Units",
		dataPoints: this.dataPoints
	}]
});
chart.render();
  }


}
