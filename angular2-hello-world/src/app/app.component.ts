import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    template: `
        <h1>Hello Angular2 App</h1>
        <br>Your name: <input type="text" [(ngModel)]="name">
        <p></p>{{greetings}}, {{name}} from Angular2! `
})
export class AppComponent {
    name="Vasya";
    greetings="Hello my dear friend ";
}