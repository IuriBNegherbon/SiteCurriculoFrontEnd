import { Component } from '@angular/core';

@Component({
  selector: 'app-milhas',
  templateUrl: './milhas.component.html',
  styleUrls: ['./milhas.component.css']
})
export class MilhasComponent {
  valorMilheiro: number = 0;
  valorVendaMilheiro: number = 0;
  qtdMilheiro: number = 0;
  bonusTransferencia: number = 0;
  lucros: number = 0;

  resultSpendingCalculate: number = 0;
  result: number = 0;
  resultTransferedMiles:number = 0;

  spendingCalculate(){
    this.resultSpendingCalculate = this.valorMilheiro * this.qtdMilheiro;
    this.transferedMiles();
  }

  transferedMiles(){
    this.resultTransferedMiles = this.qtdMilheiro * ((this.bonusTransferencia / 100)+1);
    this.earningsCalculate();
  }

  earningsCalculate(){
    this.result = this.resultTransferedMiles * this.valorVendaMilheiro;
    this.lucros = this.result - this.resultSpendingCalculate;
  }
}
