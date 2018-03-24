import { Injectable } from '@angular/core';

import { Item } from '../../models/item';

@Injectable()
export class Items {
  items: Item[] = [];

  defaultItem: any = {
    "name": "Lasagne",
    "profilePic": "assets/img/speakers/lasagne.jpg",
    "about": "Lasagne.",
  };


  constructor() {
    let items = [
      {
          "name": "Lasagne",
          "profilePic": "assets/img/speakers/lasagne.jpg",
          "about": "Lasagne.",
      },
      {
          "name": "Poulet aux carottes",
          "profilePic": "assets/img/speakers/poulet.jpg",
          "about": "Poulet.",
      },
      {
          "name": "Agneau aux pommes de terre",
          "profilePic": "assets/img/speakers/agneau.jpg",
          "about": "Agneau.",
      },
      {
          "name": "Cabillaud",
          "profilePic": "assets/img/speakers/cabillau.jpg",
          "about": "cabillaud.",
      },
      {
          "name": "Crevette",
          "profilePic": "assets/img/speakers/crevette.jpg",
          "about": "crevette.",
      },
      {
          "name": "Salade",
          "profilePic": "assets/img/speakers/salade.jpg",
          "about": "Salade.",
      },
      {
          "name": "Saumon",
          "profilePic": "assets/img/speakers/saumon.jpg",
          "about": "saumon.",
      }
    ];

    for (let item of items) {
      this.items.push(new Item(item));
    }
  }

  query(params?: any) {
    if (!params) {
      return this.items;
    }

    return this.items.filter((item) => {
      for (let key in params) {
        let field = item[key];
        if (typeof field == 'string' && field.toLowerCase().indexOf(params[key].toLowerCase()) >= 0) {
          return item;
        } else if (field == params[key]) {
          return item;
        }
      }
      return null;
    });
  }

  add(item: Item) {
    this.items.push(item);
  }

  delete(item: Item) {
    this.items.splice(this.items.indexOf(item), 1);
  }
}
