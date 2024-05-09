import fastify from "fastify";
import { DatabasePG } from "./db.js";

export const Routes = fastify();
Routes.use(cors())
const db = new DatabasePG();

Routes.get('/transactions', async (request, reply) =>{
  const search = request.query.search;
  const listTransaction = await db.list(search);
  return listTransaction
});

Routes.post('/transactions', async (request, reply) =>{
  const {description, money, date} =  request.body;

  await db.create({
    description,
    money,
    date
  })

  return reply.status(201).send();
});

Routes.put('/transactions/:id', async (request, reply) => {
  const transactionID = request.params.id;
  const {description, money, date} = request.body;

  await db.update(transactionID, {
    description,
    money,
    date
  })

  return reply.status(204.).send()
});

Routes.delete('/transactions/:id', async (request, reply) => {
  const transactionID = request.params.id;
  await db.delete(transactionID)
  return reply.status(204).send()
})