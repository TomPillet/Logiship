# Logiship

An Angular app providing a little dashboard to follow shipments

## Roadmap

### Setup

- [x] Create project on v16
- [x] Install Material
- [x] Create architecture (components, models, services)
- [x] Create Typescript model Shipment

### Data and services

- [x] Create a ShipmentService with JSON mocked data
- [x] Use Angular Signals to store shipments list
- [x] Create a method simulating status updates
- [x] Add filters

### Components

- [x] Create main component DashboardComponent
- [x] Create list component ShipmentListComponent
- [x] Create shipments component ShipmentCardComponent
- [x] Create filters component FilterComponent

### Interactions

- [x] Connect Signals to templates
- [ ] Implement filters with computed Signals
- [x] Add realtime simulation (using intervals on status)

### Bonus

- [x] Use colors or icons for status
- [x] Deal with loading timers & add feedbacks
- [ ] Make the app responsive
- [ ] Write tests
- [ ] Host project on https://logiship.tompillet.com

### Final

- [ ] Migrate all to Angular v17

## What are the main differences between v16 and v17 ?

Between Angular 16 and Angular 17, we can find many differences going from major new features to developer experience evolutions, to improvements in the framework.

For example, as main new features, Angular 17 replaces `*ngIf`, `*ngFor` and `*ngSwitch` by `@if`, `@for` and `@switch`. Angular developers have also improved SSR and hydration process, implemented a new app builder based on Vite & esbuild, enchanced Signals, made components standalone by default, etc.

### Migrate Logiship from v16 to v17

In the context of Logiship, we don't have much to do if we proceed in this version migration, but still the objective remains important and instructive.

The exercise will be a good way to practice Angular, its documentation, and learn to be attentive on framework evolutions.

### Plan of migration

First, run this command : `ng update @angular/core@17 @angular/cli@17`

Then, run `npm audit` to see if some dependecies need a fix. **Attention :** don't use `npm audit fix --force`, otherwise it could destroy the whole project environment by forcing some packages to be updated, while it wouldn't be necessary...

Finally, test the application with `ng serve`. If it runs without errors, it's perfect !
All we'll have to do, is implement some new features, according to the documented framework evolutions.

In our case, I've already found that we must replace all `*ngIf` and `*ngFor` by the new control flow syntax.
We must also config the new builder logic.

**NB :** We can use this command to automatically migrate all templates :
`ng generate @angular/core:control-flow`
