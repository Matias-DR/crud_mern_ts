import { Database } from './database/db';

export class Server {
    private app: any;
    private port: any;
    private db: any;
    private bp: any;

    constructor() {
        this.app = require("express")();
        this.port = process.env.PORT || 5000;
        this.db = new Database()
        this.bp = require('body-parser');
        this.app.use(this.bp.urlencoded({ extended: true }))
        this.app.use(this.bp.json({ limit: 5242880 }))
        this.app.use('/api/user', require('./routes/index'))
    }

    public async start(): Promise<void> {
        await this.db.connect();
        this.app.get("/", (req: any, res: any) => {
            res.send("Hello, world!", req, res);
        });
        this.app.listen(this.port, () => {
            console.log(`Server listening on port ${this.port}`);
        });
    }
}

const server = new Server();
server.start();