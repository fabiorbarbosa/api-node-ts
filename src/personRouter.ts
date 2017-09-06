import { Router, Request, Response, NextFunction } from 'express';
import Person from './Models/Person'
import Guid from './Utils/guid'

export class PersonRouter {
    router: Router
    constructor() {
        this.router = Router();
        this.init();
    }

    public get(req: Request, res: Response, next: NextFunction) {
        let persons = [];
        for (var index = 0; index < 100; index++) {
            let person = new Person();
            person.id = Guid.newGuid();
            person.nome = "Fábio Barbosa - " + index;
            person.email = 'fabiobarbosaa@gmail.com'
            persons.push(person);
        }
        res.json(persons);
    }

    public getById(req: Request, res: Response, next: NextFunction) {
        res.send('Person: ' + req.params.id);
    }

    init() {
        this.router.get('/', this.get);
        this.router.get('/:id', this.getById);
    }
}

const personRouter = new PersonRouter();
personRouter.init();
export default personRouter.router;