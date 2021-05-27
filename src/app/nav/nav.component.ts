import { Component, OnInit, Renderer2 } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map, shareReplay, tap } from 'rxjs/operators';
import { ThemeService } from '../shared/services/theme.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {
  isLight = true;
  isLargeScreen$: Observable<boolean> = this.breakpointObserver.observe([Breakpoints.XLarge, Breakpoints.Large])
    .pipe(
      map(result => !result.matches),
      shareReplay()
    );

  constructor(
    private breakpointObserver: BreakpointObserver,
    private renderer: Renderer2,
    private themeService: ThemeService
  ) {
    this.themeService.setRenderer = renderer;
  }

  ngOnInit(): void {
    this.isLight = this.themeService.init(this.isLight);
  }

  switchTheme() {
    this.isLight = !this.isLight;
    this.themeService.updateTheme(this.isLight);
  }
}