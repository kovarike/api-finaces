import { randomUUID } from 'node:crypto';
import {sql} from './database/sql.js'


export class DatabasePG {

    

    async list(search) {
        let transaction

        if(search){
            transaction = await sql`select * from transactions where description ilike ${'%' + search + '%'}`;
        }else{
            transaction = await sql`select * from transactions`;
        }

        return transaction;

    };

    async create(transaction) {
        const transactionID  = randomUUID();
        const {description, money, date} = transaction;

        await sql`insert into transactions (id, description, money, date) VALUES (${transactionID}, ${description}, ${money}, ${date})`
    };

    async update(id, transaction) {
        const {description, money, date} = transaction;
        await sql`update transactions set description = ${description}, money = ${money}, date = ${date}    WHERE id = ${id}`
    };

    async delete(id) {
        await sql`delete from transactions where id = ${id}`;
        
    };


};