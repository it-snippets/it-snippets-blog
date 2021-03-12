import { Injectable } from '@angular/core';
import { Guid } from 'guid-typescript';
import { Observable, of } from 'rxjs';
import { BlogEntry } from 'src/app/shared/models/blog-entry.model';

@Injectable()
export class HomeHttpService {
  constructor() {}

  getBlogEnties(): Observable<BlogEntry[]> {
    return of(this.sample);
  }

  sample: BlogEntry[] = [
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum1' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum2' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum3' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum4' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum5' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum6' },
    { id: Guid.create(), published: new Date(), shortDescription: 'lorem ipsum7' },
  ]
}
