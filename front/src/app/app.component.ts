import { Component } from '@angular/core';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  stringArray: string[] = [];
  title = 'angularfront';
  constructor(private cs:ConfigService) {
    
  }

  ngOnInit(): void {
    this.cs.getStringArray().subscribe(data => {
      this.stringArray = data;
      console.log(this.stringArray.length);
    });
  }
}
