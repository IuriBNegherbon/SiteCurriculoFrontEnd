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
  
  resultProfit: number = 0;
  resultSpendingCalculate: number = 0;
  ResultEarning: number = 0;
  resultTransferedMiles: number = 0;
  resultProfitPercent: number = 0;
  resultFinalMiles: number = 0;

  spendingCalculate(){
    this.resultSpendingCalculate = parseFloat((this.valorMilheiro * this.qtdMilheiro).toFixed(2));
    this.transferedMiles();
  }

  transferedMiles(){
    this.resultTransferedMiles = parseFloat((this.qtdMilheiro * ((this.bonusTransferencia / 100)+1)).toFixed(2));
    this.earningsCalculate();
  }

  earningsCalculate(){
    this.ResultEarning = parseFloat((this.resultTransferedMiles * this.valorVendaMilheiro).toFixed(2));
    this.resultProfit = parseFloat((this.ResultEarning - this.resultSpendingCalculate).toFixed(2));
    this.earningsPercent();
  }

  earningsPercent(){
    if (this.resultSpendingCalculate != 0){
      this.resultProfitPercent = parseFloat((this.resultProfit / this.resultSpendingCalculate * 100).toFixed(2));
    }
    else {
      this.resultProfitPercent = 0; 
    }
    this.finalMilesPerThousand();
  }

  finalMilesPerThousand(){
    if (this.resultSpendingCalculate != 0){
      this.resultFinalMiles = parseFloat((((this.resultSpendingCalculate / this.qtdMilheiro) / ((this.bonusTransferencia / 100)+1))).toFixed(2));
    }
    else{
      this.resultFinalMiles = 0;
    }
  }
}
