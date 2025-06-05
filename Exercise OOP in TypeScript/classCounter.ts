class Counter {
    private static count = 0;
    
    static increment(): void {
        this.count += 1;
    }

    static getCount(): number {
        return this.count;
    }
}

Counter.increment();

Counter.increment();

console.log(Counter.getCount());