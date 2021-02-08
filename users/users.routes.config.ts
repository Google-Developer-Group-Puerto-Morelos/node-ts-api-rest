import { CommonRoutesConfig } from '../common/common.routes.config';
import express from 'express';

export class UsersRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoute')
    }


    configureRoutes() {
        let users: Object = [{
            name: "Rafa",
            last: "Lagunas",
            age: 25
        }]
        this.app.route('/Users').get((req: express.Request, res: express.Response) => {
            res.status(200).send(users)
        })
            .post((req: express.Request, res: express.Response) => {
                res.status(200).send("Post to users")
            })
        this.app.route("/users/:userID").all((req: express.Request, res: express.Response, next: express.NextFunction) => {
            //Code to execute before call any different query
            next();
        })
            .get((req: express.Request, res: express.Response) => {
                res.status(200).send(`GET requested for ID ${req.params.userID}`)
            })
            .put((req: express.Request, res: express.Response) => {
                res.status(200).send(`PUT requested for ID ${req.params.userID}`)
            })
            .patch((req: express.Request, res: express.Response) => {
                res.status(200).send(`PATCH requested for ID ${req.params.userID}`)
            })
            .delete((req: express.Request, res: express.Response) => {
                res.status(200).send(`DELETE requested for ID ${req.params.userID}`)
            })
        return this.app;
    }
}