import { ApiServiceService } from './api-service.service';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pessoa } from '../Models/models';

@Injectable({
  providedIn: 'root'
})
export class DataServiceService {


  private pessoasSubject: BehaviorSubject<Pessoa[]> = new BehaviorSubject<Pessoa[]>([]);
  pessoas$: Observable<any[]> = this.pessoasSubject.asObservable();

  constructor(private apiService: ApiServiceService) {
    this.loadPessoas();
   }

  loadPessoas() {
    this.apiService.getPessoas().subscribe(
      (data) => {
        this.pessoasSubject.next(data);
      },
      (error) => console.error('Error:', error)
    );
  }
}
