import { Component } from '@angular/core';
import { Router, ActivatedRoute, ParamMap, NavigationEnd } from '@angular/router';
import { filter, map } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'football-coach';
  name = 'Football Coach';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
  ) {}

  ngOnInit() {
    // idk how tf does this work but it does, so don't touch it
    // https://stackoverflow.com/questions/47900447/how-to-change-page-title-with-routing-in-angular-application
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
          let child = this.route.firstChild;
          while (child) {
              if (child.firstChild) {
                  child = child.firstChild;
              } else if (child.snapshot.data && child.snapshot.data['title']) {
                  return child.snapshot.data['title'];
              } else {
                  return null;
              }
          }
          return null;
      })
  ).subscribe( (data: any) => {
      if (data) {
        this.name = data;
      }
  });
  }
}
