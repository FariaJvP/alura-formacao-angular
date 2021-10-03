import { Transferencia } from './../../models/transferencia.model';
import { TransferenciaService } from './../services/transferencia.service';
import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss']
})
export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();

  valor!: number;
  destino!: number | string;

  constructor(private service: TransferenciaService, private router: Router){

  }

  transferir(){
    const aoSubmeterOFormulario = { valor: this.valor, destino: this.destino };

    //this.aoTransferir.emit(aoSubmeterOFormulario)
    this.service.adicionarTransferencia(aoSubmeterOFormulario).subscribe((resultado) => {
      console.log(resultado);
      this.limparCamposDoFormulario();
      this.router.navigateByUrl('extrato');
    },
    error =>  console.error(error));
  }

  limparCamposDoFormulario(){
    this.valor = 0;
    this.destino = 0;
  }

}
