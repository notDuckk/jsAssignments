function outer(){
    let a ="hello";
    let b = {
        name: "John"
    };

    console.log(a);
    console.log(b.name);
  
    function inner(a,b) {
        console.log(a);
        console.log(b.name);

        a = "hello1";
        b = {
            name:'Jonny'
        };

        console.log(a);
        console.log(b.name);

    }
  
    inner(a,b);
    console.log(a);
    console.log(b.name);

  }
  
  outer();