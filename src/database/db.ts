export class Database {
    private mongoose: any

    constructor() {
        this.mongoose = require('mongoose');
    }

    public async connect(): Promise<void> {
        try {
            await this.mongoose.connect("mongodb://127.0.0.1:27017/crudmernstack");
            console.log("Connected to database");
        } catch (error) {
            console.error(error);
        }
    }
}
