# Mystore

<img
  src="shoppingCartFlow.gif"
  alt="gif"
  title="Optional title"
  style="display: inline-block; margin: 0 auto; max-width: 600px;">
  

## Table of Contents

- [Summary](#summary)

- [Technologies](#technologies)

- [Features](#features)

- [Usage and Installation](#usage-and-installation)

- [Structure](#structure)

## Summary

This is a frontend code for a steorefont Angular application. It allows users to add prodcuts to a cart and checkout the order.

This project was generated with Angular CLI version 15.2.6.


## Technologies

- Angular as the frontend framework
- Bootstrap library for the UI
- Forms
- Event Handling
- Components
- Observables/BehaviorSubject
- Services
- Dependency Injection
- Navigation
- HTTP Client
- Toastr with a Notification service wrapper: https://www.npmjs.com/package/ngx-toastr


## Features

- Browse a list of products
- Show more details when a product is clicked
- Select a quantity
- Add products to the cart
- Remove products from the cart
- Update the quantity of items in the cart
- Checkout the cart and getting a confirmation



## Usage and Installation

You can get the project up and running in two simple steps.

Install the required packages using the following command.

```
npm install
```


You can then use the following command to run the project

```
ng serve --port: 3000
```

Load this page in a browser:
```
http://localhost:3000
```


## Structure

```
|---src
    |   favicon.ico
    |   index.html
    |   main.ts
    |   styles.css
    |
    |---app
    |   |   app-routing.module.ts
    |   |   app.component.css
    |   |   app.component.html
    |   |   app.component.spec.ts
    |   |   app.component.ts
    |   |   app.module.ts
    |   |
    |   |---components
    |   |   |---cart
    |   |   |       cart.component.css
    |   |   |       cart.component.html
    |   |   |       cart.component.spec.ts
    |   |   |       cart.component.ts
    |   |   |
    |   |   |---confirmation
    |   |   |       confirmation.component.css
    |   |   |       confirmation.component.html
    |   |   |       confirmation.component.spec.ts
    |   |   |       confirmation.component.ts
    |   |   |
    |   |   |---nabvar
    |   |   |       nabvar.component.css
    |   |   |       nabvar.component.html
    |   |   |       nabvar.component.spec.ts
    |   |   |       nabvar.component.ts
    |   |   |
    |   |   |---product-item
    |   |   |       product-item.component.css
    |   |   |       product-item.component.html
    |   |   |       product-item.component.spec.ts
    |   |   |       product-item.component.ts
    |   |   |
    |   |   |---product-item-detail
    |   |   |       product-item-detail.component.css
    |   |   |       product-item-detail.component.html
    |   |   |       product-item-detail.component.spec.ts
    |   |   |       product-item-detail.component.ts
    |   |   |
    |   |   |---product-list
    |   |           product-list.component.css
    |   |           product-list.component.html
    |   |           product-list.component.spec.ts
    |   |           product-list.component.ts
    |   |
    |   |---models
    |   |       cartitem.ts
    |   |       order.ts
    |   |       product.ts
    |   |
    |   |---services
    |           cart.service.spec.ts
    |           cart.service.ts
    |           notification.service.spec.ts
    |           carnotificationt.service.ts
    |           product.service.spec.ts
    |           product.service.ts
    |
    |---assets
    |       data.json
    |
```
