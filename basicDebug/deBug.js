const storeOwners = [
    {
      name: 'Chris',
      stores: 1,
      location: "AZ",
    },
    {
      name: 'Easton',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Justice',
      stores: 1,
      location: "NM",
    },
    {
      name: 'Danny Shavez',
      stores: 1,
      location: "NM",
    },
  ];
  
  const listNumberOfStores = function () {
    for (let i = 0; i < storeOwners.length; i++) {
      let totalLocations = totalLocations + storeOwners[i].stores;
    }
    return i;
  };
  
  let locations = listNumberOfStores;
  
  function tellMeMyStores() {
    console.log('Hey, can you tell me how many stores you have?');
    if (locations > 0) {
      console.log('Of course, we have ' + locations + ' stores');
    }
  }
  
  function hasStore() {
    for (let i = 0; i < storeOwners.length; i++) {
      let person = storeOwners[i].name;
      let location = storeOwners[i].location;
      console.log(`Yes, ${person} has one in ${location}`);
    }
  
  }
  
  tellMeMyStores();
  hasStore();