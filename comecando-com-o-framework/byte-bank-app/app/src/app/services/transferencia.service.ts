import { Transferencia } from './../../models/transferencia.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TransferenciaService {
  private listaDeTransferencias: any[];
  private url = 'http://localhost:3000/transferencias';

  constructor(private httpClient: HttpClient) {
    this.listaDeTransferencias = [];
  }

  get transferencias(){
    return this.listaDeTransferencias;
  }

  mostrarTodasAsTransferencias(): Observable<Transferencia[]>{
    return this.httpClient.get<Transferencia[]>(this.url);
  }

  adicionarTransferencia(transferencia: any): Observable<Transferencia>{
    this.defineData(transferencia);
    //this.listaDeTransferencias.push(transferencia);
    return this.httpClient.post<Transferencia>(this.url, transferencia)
  }

  defineData(transfencia: any){
    transfencia.data = new Date();
  }


}
