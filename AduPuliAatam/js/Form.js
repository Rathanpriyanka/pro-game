class Form {

    constructor() {
      this.input = createInput("Name");
      this.button = createButton('Play');
      this.greeting = createElement('h2');
      this.title = createElement('h2');
      this.reset = createButton("RESET");
    }
    hide(){ 
      this.greeting.hide(); 
      this.button.hide(); 
      this.input.hide(); 
      this.title.hide();
     }
  
    display(){
      this.title.html("Aadu puli aatam");
      this.title.position(200,0);
  
      this.input.position(250,500);
      this.button.position(400,600);
      this.reset.position(100,100);
      console.log(reset)
      this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
        
      });
  
      
  
    }
  }
  