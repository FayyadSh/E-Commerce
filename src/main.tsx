import ReactDOM from 'react-dom/client'

// Styles
import 'bootstrap/dist/css/bootstrap.min.css'
import '@styles/global.css'

// Imports
import AppRouter from '@routes/AppRouter'
import { Provider} from 'react-redux'
import { store } from './store'


const root = document.getElementById('root')!
ReactDOM.createRoot(root).render(
    <Provider store={store}>
        <AppRouter />
    </Provider>
  
)
