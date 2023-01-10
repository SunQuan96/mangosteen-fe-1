import { Foo } from '../views/Foo';
import { Bar } from '../views/Bar';
export const routes :RouteRecordRaw[]= [
    { path: '/', component: Foo },
    { path: '/about', component: Bar},
    { 
        path: '/welcome', 
        component: Welcome,
        children:[
            {path:'1', component: Frist},
            {path:'2', component: Second},
            {path:'3', component: Third},
            {path:'4', component: Forth},
        ]
    }
 ]