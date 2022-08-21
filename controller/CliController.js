const {Cliente} = require('../models/cliente')
const {validationResult} = require('express-validator')


const viewAll = async (req,  res) =>{
    try {
        const clientes = await Cliente.find()
        res.status(200).json(clientes)
    } catch (error) {
        res.status(404).json({
            message: error.message
        })
        
    }
}

const viewOne = async(req, res) =>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const id = req.params.id
            const cliente = await Cliente.findById({_id:id})
                res.status(200).json(cliente) 
            
        } else {
            res.status(422).json({
                message: 'no se pudo encontrar el cliente, verifica si los parametros ingresados con correctos'
            })  
            
        }
                    
    } catch (error) {
        res.status(404).json({
            message: error.message
        })

    }

}

const newCli = async(req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            await Cliente.create(req.body)
            res.status(201).json({
                message:'Cliente agregado correctamente'
            })            
        } else {
            res.status(501).json(error)        
        }
    } catch (error) {
        res.status(501).json({
            message: error.message
        })     
    }
}

const updateCli = async(req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const id = req.params.id
            await Cliente.findByIdAndUpdate({_id:id}, req.body)
            res.status(201).json({
                message: 'Cliente actualizado correctamente'
            })            
        } else {
            res.status(501).json({
                message:'no se pudo actualizar el registro, por favor verifique que  el id sea el correcto'
            })
            
        }

    } catch (error) {
        res.status(501).json({
            message: error.message
        })
        
    }
}

const delCli = async(req, res)=>{
    try {
        const error = validationResult(req)
        if (error.isEmpty()) {
            const id = req.params.id
            await Cliente.findByIdAndDelete({_id:id}, req.body)
            res.status(200).json({
                message:'Registro Eliminado'
            })
            
        } else {
            res.status(422).json({
                message: 'No se pudo borrar el registro, verifique que el id sea el correcto.'
            })
            
        }
    } catch (error) {
        res.status(400).json({
            message: error.message
        })
      
        
    }
}

module.exports ={viewOne, viewAll, newCli, updateCli, delCli}