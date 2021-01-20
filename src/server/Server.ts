import Bundler from "parcel-bundler";
import express from "express";
import * as path from "path";

class Server {
    private _express: express.Express;

    public constructor() {
        const bundler = new Bundler(path.join(__dirname, "../client/index.html"), {
            watch: true
        });

        this._express = express();
        this._express.use(bundler.middleware());
        this._express.use(express.urlencoded({
            extended: true
        }));
        this._express.use(express.json());
    }

    public start(port: number): void {
        this.addRoutes();
        this._express.listen(port);
    }

    private addRoutes(): void {
        
    }
}

export default Server;
