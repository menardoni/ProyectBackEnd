
const {check, param} = require('express-validator')

const idValidator = [param('id').isMongoId()]


const dataCheck = [check("name").not().isEmpty().isLength({min:3}).withMessage('Este campo no puede estar vacio, debe contener un minimo de 3 caracteres'),
                check("lastname").not().isEmpty().isLength({min:3}).withMessage('Este campo no puede estar vacio, debe contener un minimo de 3 caracteres'),
            check("dni").not().isEmpty().isNumeric().isLength({min:7, max:7}).withMessage('dni invalido, verifique el campo y asegurese de no colocar (.)')]

module.exports = {dataCheck,idValidator}