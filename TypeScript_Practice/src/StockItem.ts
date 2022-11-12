interface ItemInterface {
    name: string;
    location: string;
}



class StockItem {

    name: string; 
    location: string;

    constructor(name: string, location: string) {
        this.name = name; 
        this.location = location; 
    }
    

}


const ItemOne = new StockItem("sofa", "chicago"); 


console.log(ItemOne);


