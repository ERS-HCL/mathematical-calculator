# Mathematical Calculator in Angular.
This is a simple component for performing arithmetic calculations using angular.
<p align="center">
    <img  alt="calci" src="images/allclear.png" class="img-responsive">
</p>

To preview demo of to do list project, [Click here](https://stackblitz.com/edit/angular-x4kzo1-x5xs9e?embed=1&file=src/index.html&hideNavigation=1&view=preview)

* we can do addition,subtraction,multiplication,division operations.
<p><img src="\images\multi.png"></p>

* we can do modulo Division and we can find Square root.
<p><img src="\images\modulo.png"><img src="\images\sqrt.png"></p>

* we can know square and cube of a number.
<p><img src="\images\cube.png"></p>

* we can erase everything at a time by clicking AC(All Clear) and we can erase one by one which works as back space by clicking C(clear).
<p><img src="\images\allclear.png"></p>

# OutputDecorator
 @output is used to give required output to user.
EventEmitter is used so that whenever some event will be called user will get result. 
```
show(number){
console.log(number);
}
```
This method gives you the result.
#### <app-calculator (click)="show($event)"></app-calculator>
Here click is the output event name.

### Installing

```
> npm install
```

### Run server

```
> ng serve
```
