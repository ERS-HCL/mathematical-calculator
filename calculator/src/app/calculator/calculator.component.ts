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

public pastOperation=null;

public presentTotal=0;

public pastTotal=null;

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

public rootSymbol="sqrt";
public SQUARE='square';

public sqrSymbol="sqrt";
public CUBE='cube';

public cubeSymbol="cube";
public output='0';

public lastValue=null;

public token;
public toSqrt;
clicked(btn){
this.click.emit(this.output);
this.btn=btn;


if(this.newNumber) {

this.output=btn;


this.newNumber = 
false;


} else {


this.output=String(this.output)+String(btn);

}

this.pastTotal = 
this.toNumber(this.output);

}


add(){
  this.click.emit(this.output);

this.token=this.ADD;

this.operations();


}

subtract(){
this.click.emit(this.output);
this.token=this.SUBTRACT;

this.operations();


}

multiply(){
this.click.emit(this.output);
this.token=this.MULTIPLY;

this.operations();


}

divide(){
this.click.emit(this.output);
this.token=this.DIVIDE;

this.operations();


}

modulo(){
this.click.emit(this.output);
this.token=this.MODULO;

this.operations();


}
pow(){
this.click.emit(this.output);
this.token=this.POW;

this.operations();


}
root(){
  this.click.emit(this.output);
this.token=this.ROOT;

this.operations();
}
square(){
 this.click.emit(this.output);
this.token=this.SQUARE;

this.operations();
}
cube(){
 this.click.emit(this.output);
this.token=this.CUBE;

this.operations();
}

operations(){
this.click.emit(this.output);
if(this.pastTotal) {

if(this.presentTotal &&
this.pastOperation == 
this.ADD ) {

this.presentTotal += 
this.pastTotal;

} else if(this.presentTotal &&
this.pastOperation == 
this.SUBTRACT) {

this.presentTotal -= 
this.pastTotal;

}

else if(this.presentTotal &&
this.pastOperation == 
this.MULTIPLY) {

this.presentTotal *= 
this.pastTotal;

}

else if(this.presentTotal &&
this.pastOperation == 
this.DIVIDE) {

this.presentTotal /= 
this.pastTotal;

}

else if(this.presentTotal &&
this.pastOperation == 
this.MODULO) {

this.presentTotal %= 
this.pastTotal;

}
else if(this.presentTotal &&
this.pastOperation == 
this.ROOT) {

this.presentTotal=Math.sqrt(this.presentTotal);

}
else if(this.presentTotal &&
this.pastOperation == 
this.POW) {

this.presentTotal = Math.pow(this.presentTotal,this.pastTotal);

}
else if(this.presentTotal &&
this.pastOperation == 
this.SQUARE) {

this.presentTotal = Math.pow(this.presentTotal,2);

}
else if(this.presentTotal &&
this.pastOperation == 
this.CUBE) {

this.presentTotal = Math.pow(this.presentTotal,3);

}
else {

this.presentTotal = 
this.pastTotal;

}

} 

this.setsymbol(this.token);

this.setOutput(String(this.presentTotal));

this.pastOperation = 
this.token;

this.newNumber = 
true;

this.pastTotal = 
null;

}

setsymbol(operation) {
this.click.emit(this.output);
if(operation == 
this.ADD) {

this.symbol = 
this.addSymbol;

} else if (operation ==
this.SUBTRACT) {

this.symbol = 
this.subtractSymbol;

} else if (operation ==
this.MULTIPLY) {

this.symbol = 
this.multiplySymbol;

} 

else if (operation ==
this.DIVIDE) {

this.symbol = 
this.divisionSymbol;

} 

else if (operation ==
this.MODULO) {

this.symbol = 
this.moduloSymbol;

} 
else if (operation ==
this.POW) {

this.symbol = 
this.powSymbol;

} 
else if (operation ==
this.ROOT) {

this.symbol = 
this.rootSymbol;

} 
else if (operation ==
this.SQUARE) {

this.symbol = 
this.sqrSymbol;

} 
else if (operation ==
this.CUBE) {

this.symbol = 
this.cubeSymbol;

} 

else {

this.symbol = 
"";

}

}

calculate() {
this.click.emit(this.output);

if(!this.newNumber) {

this.pastTotal =this.toNumber(this.output);

this.lastValue = 
this.pastTotal;

} 

if(this.pastOperation ==this.ADD) {

this.presentTotal += 
this.pastTotal;

this.lastOperation = 
this.ADD;

} else if(this.pastOperation ==this.SUBTRACT) {

this.presentTotal -= 
this.pastTotal;

this.lastOperation = 
this.SUBTRACT;

}

else if(this.pastOperation ==this.MULTIPLY) {

this.presentTotal *= 
this.pastTotal;

this.lastOperation = 
this.MULTIPLY;

} 

else if(this.pastOperation ==this.DIVIDE) {

this.presentTotal /= 
this.pastTotal;

this.lastOperation = 
this.DIVIDE;

}

else if(this.pastOperation ==this.MODULO) {

this.presentTotal %= 
this.pastTotal;

this.lastOperation = 
this.MODULO;

}
else if(this.pastOperation ==this.POW) {

this.presentTotal = Math.pow(this.presentTotal,this.pastTotal);


this.lastOperation = 
this.POW;

}
else if(this.pastOperation ==this.ROOT) {
this.presentTotal=Math.sqrt(this.presentTotal);
this.lastOperation = 
this.ROOT;

}
else if(this.pastOperation ==this.SQUARE) {

this.presentTotal = Math.pow(this.presentTotal,2);


this.lastOperation = 
this.SQUARE;

}
else if(this.pastOperation ==this.CUBE) {

this.presentTotal = Math.pow(this.presentTotal,3);


this.lastOperation = 
this.CUBE;

}
else {

if(this.lastOperation) {

if(this.lastOperation ==this.ADD) {

if(this.presentTotal) {

this.presentTotal+=this.lastValue;

} else {

this.presentTotal = 
0;

}

} else if(this.lastOperation ==
this.SUBTRACT) {

if(this.presentTotal) {

this.presentTotal-=this.lastValue;

} else {

this.presentTotal = 
0;

}

}

else if(this.lastOperation ==
this.MULTIPLY) {

if(this.presentTotal) {

this.presentTotal*=this.lastValue;

} else {

this.presentTotal =0;

}

}

else if(this.lastOperation ==
this.DIVIDE) {

if(this.presentTotal) {

this.presentTotal/=this.lastValue;

} else {

this.presentTotal = 0;

}

}

else if(this.lastOperation ==
this.MODULO) {

if(this.presentTotal) {
  this.presentTotal%=this.lastValue;

} else {

this.presentTotal = 0;

}


}
else if(this.lastOperation ==
this.POW) {

if(this.presentTotal) {
  this.presentTotal = Math.pow(this.presentTotal,this.lastValue);

} else {

this.presentTotal = 0;

}


}
else if(this.lastOperation ==
this.ROOT) {

if(this.presentTotal) {
  this.presentTotal = Math.sqrt(this.lastValue);

} else {

this.presentTotal = 0;

}


}
else if(this.lastOperation ==
this.SQUARE) {

if(this.presentTotal) {
  this.presentTotal = Math.pow(this.presentTotal,2);

} else {

this.presentTotal = 0;

}


}
else if(this.lastOperation ==
this.CUBE) {

if(this.presentTotal) {
 this.presentTotal = Math.pow(this.presentTotal,3);

} else {

this.presentTotal = 0;

}


}
} else {

this.presentTotal = 0;

}

}

this.setOutput(this.presentTotal);

this.setsymbol("");

this.pastOperation = 
null;

this.pastTotal = 
null;

}


Allclear(){
this.click.emit(this.output);
this.presentTotal = 
null;

this.pastTotal = 
null;

this.pastOperation = 
null;
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



this.pastTotal=this.toNumber(this.output);
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
