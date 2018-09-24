import * as express from "express";
import { interfaces, controller, httpGet, httpPost } from "inversify-express-utils";

@controller("/awesome")
export class AwesomeController implements interfaces.Controller {

    @httpGet("/")
    public async index(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any|void> {
        res.contentType("text/html");
        res.status(200);
        return res.render("awesome/index");
    }
    @httpPost("/")
    public async save(req: express.Request, res: express.Response, next: express.NextFunction): Promise<any> {

        res.redirect(301, "/awesome/");
    }
}
