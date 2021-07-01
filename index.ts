import { Program } from "turtlejs-client/src/program";

export default class HelloWorld extends Program {
    constructor() {
        super({
            name: "Hello-World",
            version: "1.0.0",
        });

        console.log("Hello World!")
    }
}