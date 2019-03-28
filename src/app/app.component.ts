import { Component, ViewChild, ElementRef} from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TopComponent } from './top/top.component';
import { MovieComponent } from './movie/movie.component';
import { Movie} from './movie'
import { trigger, transition, animate, style } from '@angular/animations'
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs'
import { NgScrollbar} from 'ngx-scrollbar';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('slider') slider: ElementRef
  title = 'digitouch';
  movieData : Movie[]
  showItem = [];

  @ViewChild(NgScrollbar) scrollRef: NgScrollbar;



  constructor(private http: HttpClient, public breakpointObserver: BreakpointObserver) {

  }




  ngAfterViewInit() {
    this.scrollRef.scrollable.elementScrolled().subscribe(e => {
      this.xPosition = e.srcElement.scrollLeft;
    })
  }

  smallScreen: boolean;
  ngOnInit() {
    this.breakpointObserver
      .observe(['(min-width: 360px)'])
      .subscribe((state: BreakpointState) => {
        if (state.matches) {
          this.smallScreen = false;
        } else {
          this.smallScreen = true;
        }
      });
    
    this.fetchFromJson().then(movieData => {
      this.movieData = movieData
      this.showItem.fill(false, 0,  this.movieData.length);
      this.startAnimation();
    })

  }
  xPosition = 0;
  scrollObservable: Subscription;
  startAnimation() {
    this.scrollObservable = interval(5000).subscribe(() => {
      this.scrollRef.scrollXTo(this.xPosition + 640)
    })
  }

  stopAnimation() {
    this.scrollObservable.unsubscribe();
  }


  fetchFromJson(): Promise<Movie[]> {
    return this.http.get<Movie[]>('assets/movies.json').toPromise();
  }

}
