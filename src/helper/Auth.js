const Auth={}
const jwt=require('jsonwebtoken')

Auth.verificartoken=(req,res,next)=>{
    if(!req.headers.autorizacion){
        return res.json({
            mensaje:'El usuario No esta autorizado'
        })
    }
    const token=req.headers.autorizacion
    if(token==='null'){
        return res.json({
            mensaje:'El usuario no esta autorizado'
        })

    }
    next()
}