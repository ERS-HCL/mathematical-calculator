import { Component, OnInit, Output, EventEmitter, ViewEncapsulation }
  from '@angular/core';



@Component({

  selector: 'app-calculator',

  templateUrl: './calculator.component.html',

  styleUrls: ['./calculator.component.css'],
  encapsulation: ViewEncapsulation.Emulated,

})

export class CalculatorComponent
  implements OnInit {

  @Output() click = new EventEmitter();

  constructor() {

  }



  ngOnInit() {
    this.click.emit(this.output);
  }

  public btn;


  public newNumber: boolean = true;

  public pastTotalOperation = null;

  public pastTotal = 0;

  public presentTotal = null;

  public lastOperation = null;

  public symbol = "";

  public ADD =
  "adding";

  public SUBTRACT =
  "subtracting";

  public MULTIPLY = "multiply";

  public addSymbol =
  "+";

  public subtractSymbol =
  "-";

  public multiplySymbol = "*";

  public DIVIDE = 'divide';

  public divisionSymbol = "/";

  public MODULO = 'modulo';

  public moduloSymbol = "%";
  public POW = 'pow';

  public powSymbol = "^";
  public ROOT = 'root';

  public rootSymbol = "root";
  public SQUARE = 'square';

  public sqrSymbol = "square";
  public CUBE = 'cube';

  public cubeSymbol = "cube";
  public output = '0';

  public token;
  public toSqrt;
  clicked(btn) {
    this.click.emit(this.output);
    this.btn = btn;


    if (this.newNumber) {

      this.output = btn;
      this.newNumber = false;
    } else {
      this.output = String(this.output) + String(btn);

    }

    this.presentTotal = this.toNumber(this.output);

  }
  calculation(operation) {
    this.click.emit(this.output);
    this.token = operation;
    this.operations();
  }

  operations() {
    this.click.emit(this.output);
    switch (this.pastTotalOperation) {

      case "adding": {
        this.pastTotal += this.presentTotal;
        break;

      } case "subtracting": {
        this.pastTotal -= this.presentTotal;
        break;
      }

      case "multiply": {

        this.pastTotal *= this.presentTotal;
        break;
      }

      case "divide": {

        this.pastTotal /= this.presentTotal;
        break;
      }

      case "modulo": {

        this.pastTotal %= this.presentTotal;
        break;

      }
      case "root": {

        this.pastTotal = Math.sqrt(this.pastTotal);
        break;
      }
      case "pow": {

        this.pastTotal = Math.pow(this.pastTotal, this.presentTotal);
        break;
      }
      case "square": {

        this.pastTotal = Math.pow(this.pastTotal, 2);
        break;
      }
      case "cube": {

        this.pastTotal = Math.pow(this.pastTotal, 3);
        break;
      }
      default: {
        this.pastTotal = this.presentTotal;

      }

    }

    this.setsymbol(this.token);

    this.setOutput(String(this.pastTotal));

    this.pastTotalOperation = this.token;

    this.newNumber = true;

    this.presentTotal = null;

  }

  setsymbol(operation) {
    this.click.emit(this.output);
    switch (operation) {
      case "adding": {

        this.symbol = this.addSymbol;
        break;

      } case "subtracting": {

        this.symbol = this.subtractSymbol;
        break;

      } case "multiply": {

        this.symbol = this.multiplySymbol;
        break;
      }

      case "divide": {

        this.symbol = this.divisionSymbol;
        break;
      }

      case "modulo": {

        this.symbol = this.moduloSymbol;
        break;

      }
      case "pow": {

        this.symbol = this.powSymbol;
        break;
      }
      case "root": {

        this.symbol = this.rootSymbol;
        break;
      }
      case "square": {

          this.symbol = this.sqrSymbol;
          break;
        }
      case "cube": {

        this.symbol = this.cubeSymbol;
        break;
      }

      default: {

        this.symbol = "";
        break;

      }
    }
  }

  calculate() {
    this.click.emit(this.output);

    if (!this.newNumber) {
      this.presentTotal = this.toNumber(this.output);

    }
    switch (this.pastTotalOperation) {
      case "adding": {

        this.pastTotal += this.presentTotal;

        this.lastOperation = this.ADD;
        break;

      } case "subtracting": {

        this.pastTotal -= this.presentTotal;

        break;

      }

      case "multiply": {

        this.pastTotal *= this.presentTotal;

        break;

      }

      case "divide": {

        this.pastTotal /= this.presentTotal;
        break;


      }

      case "modulo": {

        this.pastTotal %= this.presentTotal;

        break;

      }
      case "pow": {

        this.pastTotal = Math.pow(this.pastTotal, this.presentTotal);

        break;


      }
      case "root": {
        this.pastTotal = Math.sqrt(this.pastTotal);
        break;
      }
      case "square": {

        this.pastTotal = Math.pow(this.pastTotal, 2);

        break;


      }
      case "cube": {

        this.pastTotal = Math.pow(this.pastTotal, 3);
        break;



      }
    }
    this.setOutput(this.pastTotal);

    this.setsymbol("");

    this.pastTotalOperation = 0;

    this.presentTotal = this.pastTotal;

  }
  Allclear() {
    this.click.emit(this.output);
    this.pastTotal = null;

    this.presentTotal = null;

    this.pastTotalOperation = null;
    this.symbol = "";
    this.setOutput("0");

  }

  clear() {

    this.click.emit(this.output);
    if (this.symbol) {
      this.symbol = "";

    } else if (!this.symbol) {
      var str = this.output;
      this.output = str.slice(0, -1);



      this.presentTotal = this.toNumber(this.output);
    }

  }

  setOutput(outputString) {
    this.click.emit(this.output);
    this.output = outputString;

    this.newNumber =
      true;


  }

  toNumber(numberString) {
    this.click.emit(this.output);
    var result = 0;

    if (numberString) {

      result = numberString * 1;

    }

    return result;

  }

}
