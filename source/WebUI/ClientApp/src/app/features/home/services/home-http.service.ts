import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { BlogEntry } from 'src/app/shared/models/blog-entry.model';
import { sampleData } from './service-data.mock';

@Injectable()
export class HomeHttpService {
  constructor() {}

  getBlogEnties(): Observable<BlogEntry[]> {
    return of(sampleData);
  }
}
