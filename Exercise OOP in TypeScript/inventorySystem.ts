class Product {
    protected static productCount: number = 1;
    readonly id: number = Product.productCount;
    _name!: string;
    _price!: number;
    
    constructor(nameN: string, priceP: number) {
        Product.productCount += 1;
        this.name = nameN;
        this.price = priceP;
    }

    getDetails(): string {
        return `ID: ${this.id}, Name: ${this._name}, Price: $${this._price}`
    }

    set name(newName: string) {
        if(newName.length < 1) {
            throw new Error('The name should be more than 1 character')
        }
        
        this._name = newName;
    }

    set price(newPrice: number) {
        if(newPrice < 0) {
            throw new Error('The price should be positive');
        }
        
        this._price = newPrice;
    }
}

class Inventory {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    listProducts(): string {
       this.products.forEach(pr => console.log(`ID: ${pr.id}, Name: ${pr._name}, Price: $${pr._price}`));
       const finalLine: string = `Total products created: ${this.products.length}`

       return finalLine;
    }
}


const inventory = new Inventory();

const product1 = new Product("Laptop", 1200);

const product2 = new Product("Phone", 800);


inventory.addProduct(product1);

inventory.addProduct(product2);
console.log(inventory.listProducts());