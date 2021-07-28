import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  numCurrent = '';

  constructor() {}
  buttonSelected(num: string) {
    this.numCurrent += num;
  }
  deleteNumber(type: string) {
    if (type === 'last') {
      this.numCurrent = this.numCurrent.substr(0, this.numCurrent.length - 1);
    } else {
      this.numCurrent = '';
    }
  }
  calcOperation() {
    let regularExp = /[/|*|\-|+]/;
    let aux: number = this.numCurrent.search(regularExp);
    let operation: string = this.numCurrent.charAt(aux);
    let numbersArr;
    // intentar usar un objeto en lugar del switch
    // if (operation) {
    numbersArr = this.numCurrent.split(operation);
    console.log(numbersArr);
    // }
    let result: number = 0;
    switch (operation) {
      case '+':
        numbersArr.forEach((element) => {
          result += parseInt(element);
        });
        this.numCurrent = result.toString();
        break;
      case '-':
        numbersArr.forEach((element, index) => {
          if (index === 0) {
            result = parseInt(element);
          } else {
            result = result - parseInt(element);
          }
        });
        this.numCurrent = result.toString();
        break;
      case '*':
        numbersArr.forEach((element, index) => {
          if (index === 0) {
            result = parseInt(element);
          } else {
            result = result * parseInt(element);
          }
        });
        this.numCurrent = result.toString();
        break;
      case '/':
        this.numCurrent = (
          parseInt(numbersArr[0]) / parseInt(numbersArr[1])
        ).toString();
        break;

      default:
        this.numCurrent = 'Error';
        break;
    }
  }
}
