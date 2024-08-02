import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-controle-mensal',
  templateUrl: './controle-mensal.component.html',
  styleUrls: ['./controle-mensal.component.css']
})
export class ControleMensalComponent {
  registros: any[] = [];
  userError: any = {};
  operacao: string = '';
  descricao: string = '';
  agrupador1: string = '';
  agrupador2: string = '';
  data: string = '';
  valor: number | null = null;
  message: string = '';

  constructor(private http: HttpClient) { }

  adicionarRegistro() {
    const novoRegistro = {
      operacao: this.operacao,
      descricao: this.descricao,
      agrupador1: this.agrupador1,
      agrupador2: this.agrupador2,
      data: this.data,
      valor: this.valor
    };

    this.http.post('http://localhost:8080/fluxo', novoRegistro)
      .subscribe(response => {
        console.log('Registro adicionado com sucesso', response);
        // Limpar os campos após o sucesso
        this.operacao = '';
        this.descricao = '';
        this.agrupador1 = '';
        this.agrupador2 = '';
        this.data = '';
        this.valor = null;
      },
      (error) => {
        this.userError = error.error;
        console.error('Erro ao adicionar registro', error);
      });
    }

  getFluxoData() {
    this.http.get<any[]>('http://localhost:8080/fluxo')
      .subscribe(data => {
        this.registros = data;
      },
      (error) => {
        this.userError = error.error;
      });
  }
}
