/*
This is a variation of the "Fashion Inventory" problem.

Please DO NOT paste code from before, however. Tackle each problem on its own.

It's the same inventory data structure:

var inventory = [
  {
    name: 'Brunello Cucinelli',
    shoes: [
      {name: 'tasselled black low-top lace-up', price: 1000},
      {name: 'tasselled green low-top lace-up', price: 1100},
      {name: 'plain beige suede moccasin', price: 950},
      {name: 'plain olive suede moccasin', price: 1050}
    ]
  },
  {
    name: 'Gucci',
    shoes: [
      {name: 'red leather laced sneakers', price: 800},
      {name: 'black leather laced sneakers', price: 900}
    ]
  }
];

The task now is to find all the laced shoes.
Output shoe names that contain "lace" in them, and indicate which word contains "lace".

The output format should be structured like this:

[
  {
    "nameWords": [
      "tasselled",
      "black",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "tasselled",
      "green",
      "low-top",
      "lace-up"
    ],
    "targetWordIndex": 3
  },
  {
    "nameWords": [
      "red",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  },
  {
    "nameWords": [
      "black",
      "leather",
      "laced",
      "sneakers"
    ],
    "targetWordIndex": 2
  }
]

Assert the validity of the values and structure of your output.

*/

var inventory = [
    {
        name: 'Brunello Cucinelli',
        shoes: [
            {name: 'tasselled black low-top lace-up', price: 1000},
            {name: 'tasselled green low-top lace-up', price: 1100},
            {name: 'plain beige suede moccasin', price: 950},
            {name: 'plain olive suede moccasin', price: 1050}
        ]
    },
    {
        name: 'Gucci',
        shoes: [
            {name: 'red leather laced sneakers', price: 800},
            {name: 'black leather laced sneakers', price: 900}
        ]
    }
];


function checkLace(shoe) {
    return shoe.name.indexOf("lace") !== -1;
}

function renderDesignerGoods(designerName, designerShoes) {
  designerShoes = designerShoes.filter(checkLace);
  var object = {};
  var nameWords = [];
  designerShoes.map(function(shoe){
    nameWords.push(shoe.name);
  });
  object["nameWords"] = nameWords;
  object["targetWordIndex"] = designerShoes.length;
  return object;
}

function renderInventory(inventory) {
    return inventory.map(function(designer){
        return renderDesignerGoods(designer.name, designer.shoes);
    });
}

var output = renderInventory(inventory);
console.log(output);
