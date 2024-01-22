import { createRouter, createWebHashHistory } from "vue-router"
import routes from '@/router/routes.js' 
const router = Router()

export default router

function Router() {
    const router = createRouter({
        history: createWebHashHistory(),
        routes
    })
    return router
}
