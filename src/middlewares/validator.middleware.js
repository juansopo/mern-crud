export const validatorSchema = (schema) =>(req, res, next) =>{
    try {
        schema.parse(req.body)
        next()
    } catch (error) {
        res.status(400).json({message: 'schema error'})
    }
}