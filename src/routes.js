import land from './components/Pages/land';
import quis from './components/Pages/quis';
import entertainment from './components/Pages/entertainment';
import sport from './components/Pages/sport';
import history from './components/Pages/history';
import select from './components/Pages/select'

export default [
    {path: '/', component: land},
    {path: '/quis', component: quis},
    {path: '/entertainment', component: entertainment},
    {path: '/sport', component: sport},
    {path: '/history', component: history},
    {path: '/select', component: select},
]