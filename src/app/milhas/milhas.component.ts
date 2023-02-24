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
    this.resultSpendingCalculate = parseFloat((this.valorMilheiro * this.qtdMilheiro).toFixed(2));
    this.transferedMiles();
  }

  transferedMiles(){
    this.resultTransferedMiles = parseFloat((this.qtdMilheiro * ((this.bonusTransferencia / 100)+1)).toFixed(2));
    this.earningsCalculate();
  }

  earningsCalculate(){
    this.result = parseFloat((this.resultTransferedMiles * this.valorVendaMilheiro).toFixed(2));
    this.lucros = parseFloat((this.result - this.resultSpendingCalculate).toFixed(2));
  }
}
