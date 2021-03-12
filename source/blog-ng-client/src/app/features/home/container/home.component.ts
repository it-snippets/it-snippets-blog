import { Component, OnInit } from '@angular/core';
import { Observable, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
import { BlogEntry } from 'src/app/shared/models/blog-entry.model';
import { HomeHttpService } from '../services/home-http.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  entries$: Observable<BlogEntry[]> | undefined;

  constructor(private homeHttpService: HomeHttpService) { }

  ngOnInit() {
    this.entries$ = this.homeHttpService.getBlogEnties().pipe(
      tap(data => console.log(data)),

    );
  }

}
