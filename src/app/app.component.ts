import { Component, OnInit } from '@angular/core';
import { NGXLogger } from 'ngx-logger';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-ngx-logger-demo';

  constructor(private logger: NGXLogger) {
  }

  ngOnInit() {
    this.logger.info("Info");
    this.logger.trace("Trace");
    this.logger.warn("Warning");
    this.logger.error("Error");
  }
}
