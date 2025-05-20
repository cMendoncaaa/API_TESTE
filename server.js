import e from 'express';
import { PrismaClient } from './generated/prisma/index.js'
import express from "express";

const prisma = new PrismaClient()

const app = express();
app.use(express.json());

app.get('/usuarios', async (req, res) => {

    let users = []

    if(req.query){
        users = await prisma.user.findMany({
            where: {
                name: req.query.name,
                email: req.query.email,
                age: req.query.age
            }
        })
    }else{
        users = await prisma.user.findMany()
    }


    res.status(200).json(users);
});

app.post('/usuarios', async (req, res) => {
    
    await prisma.user.create({
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }
    })

    res.status(201).json(req.body);
});

app.put('/usuarios/:id', async (req, res) => {
    
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data: {
            name: req.body.name,
            age: req.body.age,
            email: req.body.email,
        }
    })

    res.status(201).json(req.body);
});

app.delete('/usuarios/:id', async (req, res) => {
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(201).json({message: "Usuário deletado com sucesso"});
    
});

/*
    1) Tipo de rota / Método HTTP
    2) Endereço da rota
    3) Função que será executada


    ww.lojadoseuzé.com/produtos
*/
app.listen(3000, () => {
    console.log("Server is running on port 3000");
});