import { Component, OnInit , Output, EventEmitter,ViewEncapsulation} 
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


public newNumber:boolean=true;

public pastTotalOperation=null;

public pastTotal=0;

public presentTotal=null;

public lastOperation=null;

public symbol="";

public ADD = 
"adding";

public SUBTRACT = 
"subtracting";

public MULTIPLY="multiply";

public addSymbol= 
"+";

public subtractSymbol = 
"-";

public multiplySymbol="*";

public DIVIDE='divide';

public divisionSymbol="/";

public MODULO='modulo';

public moduloSymbol="%";
public POW='pow';

public powSymbol="^";
public ROOT='root';

public rootSymbol="root";
public SQUARE='square';

public sqrSymbol="square";
public CUBE='cube';

public cubeSymbol="cube";
public output='0';

public token;
public toSqrt;
clicked(btn){
this.click.emit(this.output);
this.btn=btn;


if(this.newNumber) {

this.output=btn;
this.newNumber = false;
} else {
this.output=String(this.output)+String(btn);

}

this.presentTotal = this.toNumber(this.output);

}
calculation(operation){
this.click.emit(this.output);
this.token=operation;
this.operations();
}

operations(){
this.click.emit(this.output);
switch(this.presentTotal!=null) {

case (this.pastTotal &&this.pastTotalOperation == this.ADD ) :{

this.pastTotal += this.presentTotal;
break;

} case (this.pastTotal &&this.pastTotalOperation == this.SUBTRACT) :{

this.pastTotal -= this.presentTotal;
break;
}

case (this.pastTotal &&this.pastTotalOperation == this.MULTIPLY) :{

this.pastTotal *= this.presentTotal;
break;
}

case (this.pastTotal &&this.pastTotalOperation == this.DIVIDE) :{

this.pastTotal /= this.presentTotal;
break;
}

case (this.pastTotal &&this.pastTotalOperation == this.MODULO) :{

this.pastTotal %= this.presentTotal;
break;

}
case (this.pastTotal &&this.pastTotalOperation == this.ROOT) :{

this.pastTotal=Math.sqrt(this.pastTotal);
break;
}
case (this.pastTotal &&this.pastTotalOperation == this.POW) :{

this.pastTotal = Math.pow(this.pastTotal,this.presentTotal);
break;
}
case (this.pastTotal &&this.pastTotalOperation == this.SQUARE) :{

this.pastTotal = Math.pow(this.pastTotal,2);
break;
}
case (this.pastTotal &&this.pastTotalOperation == this.CUBE) :{

this.pastTotal = Math.pow(this.pastTotal,3);
break;
}
default:{

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
switch(operation!=null){
case (operation == this.ADD): {

this.symbol = this.addSymbol;
break;

} case (operation ==this.SUBTRACT): {

this.symbol = this.subtractSymbol;
break;

} case(operation ==this.MULTIPLY) :{

this.symbol = this.multiplySymbol;
break;
} 

case (operation ==this.DIVIDE): {

this.symbol = this.divisionSymbol;
break;
} 

case (operation ==this.MODULO): {

this.symbol = this.moduloSymbol;
break;

} 
case (operation ==this.POW): {

this.symbol = this.powSymbol;
break;
} 
case (operation ==this.ROOT): {

this.symbol = this.rootSymbol;
break;
} 
case (operation ==
this.SQUARE): {

this.symbol = this.sqrSymbol;
break;
} 
case (operation ==this.CUBE): {

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

if(!this.newNumber) {

this.presentTotal =this.toNumber(this.output);

} 
switch(this.pastTotalOperation!=null){
case (this.pastTotalOperation ==this.ADD): {

this.pastTotal += this.presentTotal;

this.lastOperation = this.ADD;
break;

} case (this.pastTotalOperation ==this.SUBTRACT) :{

this.pastTotal -= this.presentTotal;

break;

}

case (this.pastTotalOperation ==this.MULTIPLY): {

this.pastTotal *= this.presentTotal;

break;

} 

case (this.pastTotalOperation ==this.DIVIDE) :{

this.pastTotal /= this.presentTotal;
break;


}

case (this.pastTotalOperation ==this.MODULO) :{

this.pastTotal %= this.presentTotal;

break;

}
case (this.pastTotalOperation ==this.POW) :{

this.pastTotal = Math.pow(this.pastTotal,this.presentTotal);

break;


}
case (this.pastTotalOperation ==this.ROOT): {
this.pastTotal=Math.sqrt(this.pastTotal);
break;
}
case (this.pastTotalOperation ==this.SQUARE): {

this.pastTotal = Math.pow(this.pastTotal,2);

break;


}
case (this.pastTotalOperation ==this.CUBE): {

this.pastTotal = Math.pow(this.pastTotal,3);
break;



}
}
this.setOutput(this.pastTotal);

this.setsymbol("");

this.pastTotalOperation = null;

this.presentTotal = null;

}
Allclear(){
this.click.emit(this.output);
this.pastTotal = null;

this.presentTotal = null;

this.pastTotalOperation = null;
this.symbol="";
this.setOutput("0");

}

clear(){
 
this.click.emit(this.output);
if(this.symbol){
  this.symbol="";
  
}else if(!this.symbol){
var str=this.output;
this.output=str.slice(0,-1);



this.presentTotal=this.toNumber(this.output);
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
var result =0;

if(numberString) {

result = numberString*1;

}

return result;

}

}
