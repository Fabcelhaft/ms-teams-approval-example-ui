import {Component, OnInit} from '@angular/core';
import {MessageService} from "primeng/api";

@Component({
  selector: 'dskb-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'ms-teams-approval-ui';

  ngOnInit(): void {
    // @ts-ignore
    particlesJS.load('particles-js', 'assets/particles.json', function() {
      console.log('callback - particles.js config loaded');
    });
  }

}
