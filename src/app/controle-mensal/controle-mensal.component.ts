import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-controle-mensal',
  templateUrl: './controle-mensal.component.html',
  styleUrls: ['./controle-mensal.component.css']
})
export class ControleMensalComponent {
  novoRegistro = {
    operacao: '',
    descricao: '',
    agrupador1: '',
    agrupador2: '',
    data: '',
    valor: 0
  };
  
  registros: any[] = [];
  editIndex: number | null = null;
  totalEntrada: number = 0;
  totalSaida: number = 0;
  totalDiferenca: number = 0;

  constructor(private http: HttpClient) {
    this.getFluxoDataFiltro();  // Carregar dados iniciais
  }

  adicionarRegistro() {
    this.http.post('http://localhost:8080/fluxo', this.novoRegistro).subscribe(() => {
      // Após adicionar, recarregar os dados e limpar os campos do novo registro
      this.getFluxoDataFiltro();
      this.novoRegistro = {
        operacao: '',
        descricao: '',
        agrupador1: '',
        agrupador2: '',
        data: '',
        valor: 0
      };
    });
  }

  getFluxoData(startDate: string, endDate: string) {
    this.http.get<any[]>(`http://localhost:8080/fluxo?startDate=${startDate}&endDate=${endDate}`)
      .subscribe((data: any[]) => {
        this.registros = data;
      });

    this.http.get<any>(`http://localhost:8080/fluxo/total?startDate=${startDate}&endDate=${endDate}`)
      .subscribe((totais: any) => {
        this.totalEntrada = totais.totalEntrada;
        this.totalSaida = totais.totalSaida;
        this.totalDiferenca = totais.totalDiferenca;
      });
  }

  getFluxoDataFiltro() {
    const hoje = new Date();
    const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
    const startDate = inicioMes.toISOString().split('T')[0];
    const endDate = hoje.toISOString().split('T')[0];
    this.getFluxoData(startDate, endDate);
  }

  editarRegistro(index: number) {
    this.editIndex = index;
  }

  salvarEdicao(registro: any) {
    this.http.put(`http://localhost:8080/fluxo/${registro.id}`, registro)
      .subscribe(() => {
        this.editIndex = null;
        this.getFluxoDataFiltro();
      });
  }

  cancelarEdicao() {
    this.editIndex = null;
    this.getFluxoDataFiltro();
  }

  excluirRegistro(id: number) {
    this.http.delete(`http://localhost:8080/fluxo/${id}`)
      .subscribe(() => {
        this.getFluxoDataFiltro();
      });
  }

  aplicarFiltro(tipo: string) {
    const hoje = new Date();
    let startDate: string;
    let endDate: string = hoje.toISOString().split('T')[0];

    if (tipo === 'semanal') {
      const inicioSemana = new Date(hoje.setDate(hoje.getDate() - hoje.getDay()));
      startDate = inicioSemana.toISOString().split('T')[0];
    } else {
      const inicioMes = new Date(hoje.getFullYear(), hoje.getMonth(), 1);
      startDate = inicioMes.toISOString().split('T')[0];
    }

    this.getFluxoData(startDate, endDate);
  }
}
