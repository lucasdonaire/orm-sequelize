const database = require('../models/index.js')

class PessoaController{

    static async pegaTodasAsPessoas(req, res){
        try{
            const todasAsPessoas = await database.Pessoas.findAll()
            return res.status(200).json(todasAsPessoas) 
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async pegaUmaPessoa(req, res){
        const { id } = req.params
        try{
            const umaPessoa = await database.Pessoas.findOne({ where:{id:Number(id)} })
            return res.status(200).json(umaPessoa)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async criaPessoa(req, res){
        const novaPessoa = req.body
        try{
            const novaPessoaCriada = await database.Pessoas.create(novaPessoa)
            return res.status(200).json(novaPessoaCriada)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async atualizaPessoa(req, res){
        const { id } = req.params
        const novasInfos = req.body
        try{
            await database.Pessoas.update(novasInfos, {where:{id:Number(id)}})
            const novaPessoaAtualizada = await database.Pessoas.findOne({ where:{id:Number(id)} })
            return res.status(200).json(novaPessoaAtualizada)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async deletaPessoa(req, res){
        const { id } = req.params
        try{
            await database.Pessoas.destroy({where:{id:Number(id)}})
            return res.status(200).json({ message:`id ${id} deletado`})
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async pegaUmaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        try{
            const umaPessoa = await database.Matriculas.findOne({ where:{id:Number(matriculaId), estudante_id:Number(estudanteId)} })
            return res.status(200).json(umaPessoa)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async criaMatricula(req, res){
        const { estudanteId } = req.params
        const novaMatricula ={ ...req.body, estudante_id:Number(estudanteId) }
        try{
            const novaMatriculaCriada = await database.Matriculas.create(novaMatricula)
            return res.status(200).json(novaMatriculaCriada)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async atualizaMatricula(req, res){
        const { estudanteId, matriculaId } = req.params
        const novasInfos = req.body
        try{
            await database.Matriculas.update(novasInfos, {where:{id:Number(id), estudante_id:Number(estudanteId)}})
            const novaMatriculaAtualizada = await database.Matriculas.findOne( {where:{id:Number(id), estudante_id:Number(estudanteId)}})
            return res.status(200).json(novaMatriculaAtualizada)
        }catch(e){
            return res.status(500).json(e.message)
        }
    }

    static async deletaMatricula(req, res){
        const { matriculaId } = req.params
        try{
            await database.Matriculas.destroy({where:{id:Number(matriculaId)}})
            return res.status(200).json({ message:`id ${matriculaId} deletado`})
        }catch(e){
            return res.status(500).json(e.message)
        }
    }
}

module.exports = PessoaController