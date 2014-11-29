# ember-apijax

A small wrapper around ic-ajax for making API requests from your Ember app.

## Installation

* `npm install --save ember-apijax`

## Usage

First, be sure to set the API host in your application's `config/environment.js` file:

```javascript
ENV['ember-apijax']['host'] = 'https://api.example.com';
```

Then, from within any route, component, or controller:

```javascript
this.apijax.POST('items', params);
this.apijax.PUT('items/1', params);
this.apijax.DELETE('items/1');
this.apijax.GET('items/1');
```
