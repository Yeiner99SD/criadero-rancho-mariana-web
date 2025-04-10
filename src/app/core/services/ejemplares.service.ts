import { Injectable } from '@angular/core';
import { Horse } from '../../models/caballo.model';
import { HORSES_DATA } from '../../data/horses.data';

@Injectable({
  providedIn: 'root'
})
export class EjemplaresService {

  constructor() { }

  getHorses(): Horse[] {
    return HORSES_DATA;
  }
}
