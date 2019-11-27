import { uuid } from '../util/uuid';

export class businessCard {
    name: string;
    email: string;
    position: string;
    company: string;
    phone: string;
    id: string;

    constructor(id?: string, name?: string, email?: string, position?: string, company?: string, phone?: string) {
        this.name = name;
        this.email = email || '';
        this.position = position || '';
        this.company = company || '';
        this.phone = phone || '';
        this.id = uuid();
    }
}
