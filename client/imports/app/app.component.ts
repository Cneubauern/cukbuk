import {Component} from "@angular/core";
import template from './app.component.html';
import {Observable} from "rxjs";
import {Parties} from "../../../both/collections/parties.collection";
import {Party} from "../../../both/models/party.model";

@Component({
    selector: 'app',
    template
})

export class AppComponent {
    parties: Observable <Party[]>;

    constructor() {
        this.parties = Parties.find({}).zone();
    }
}