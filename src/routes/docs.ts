import { Router } from "express";
import SwaggerUI from 'swagger-ui-express'
import { swaggerDef } from "../docs/swaggerDef";
import swaggerJSDoc from "swagger-jsdoc";

const router:Router = Router()
// console.log(swaggerDef)
const specs = swaggerJSDoc({
    swaggerDefinition:swaggerDef,
    apis:[
        'src/docs/*yml','src/routes/*ts'
    ]
})

router.use('/',SwaggerUI.serve)
router.get('/',SwaggerUI.setup(specs,{
    explorer:true
}))


export default router;