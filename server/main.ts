import {loadParties} from "./imports/fixtures/parties.fixtures";

Meteor.startup(()=>{
    loadParties();
})