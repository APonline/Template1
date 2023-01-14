import { Component } from '@angular/core';
import { trigger, transition, style, animate, query, group } from '@angular/animations';
import { Router, NavigationStart } from '@angular/router';

@Component({
  selector: 'app-root',
  animations: [
    trigger('routerAnimation', [
      transition('* <=> *', [
        query(':enter, :leave', style({ position: 'absolute', left: 0, width: '100%', minHeight: '100%'}), { optional: true }),
        group([
          query(':enter', [
            style({ transform: 'translateX(-100%)', opacity: 0 }),
            animate('0.8s ease-in-out', style({ transform: 'translateX(0%)', opacity: 1 }))
          ], { optional: true }),
          query(':leave', [
            style({ transform: 'translateX(0%)', opacity: 1 }),
            animate('0.3s ease-in-out', style({ transform: 'translateX(-100%)', opacity: 0 }))
          ], { optional: true }),
        ])
      ])
    ])
  ],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showFiller = false;
  title = 'OvaLord';

  constructor(
    private router: Router
  ) {}

  getRouteAnimation(outlet) {
    return outlet.activatedRouteData.animation;
  }
}
