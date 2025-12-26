export { };

class NumberBox {
    content: number;
    constructor(content: number) {
        this.content = content;
    }
}
class StringBox {
    content: string;
    constructor(content: string) {
        this.content = content;
    }
}

class MagicBox<T> {
    content: T;

    constructor(content: T) {
        this.content = content;
    }
}

const a = new MagicBox<number>(123);
const b = new MagicBox<string>("abc");