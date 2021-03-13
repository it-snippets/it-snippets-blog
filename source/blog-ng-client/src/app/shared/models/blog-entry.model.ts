import { Guid } from 'guid-typescript';

export interface BlogEntry {
  id: Guid;
  published: Date;
  shortDescription: string;
}
