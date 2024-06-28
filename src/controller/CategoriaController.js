import CategoriaModel from "../Models/CategoriaModel.js";

class CategoriaController{
    constructor(){

    }

    create(req,res){
        const nome_categoria = req.body.nome_categoria
        CategoriaModel.create(nome_categoria).then(
            resposta =>{
                console.debug("Cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        ).catch(
            resposta =>{
                console.debug(resposta)
                console.debug("Erro cadastrando uma categoria")
                res.status(resposta[0]).json(resposta[1])
            }
        )
    }
}

export default new CategoriaController()