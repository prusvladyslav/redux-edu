import {render,screen} from '@testing-library/react'
import Item from './shopitem'
import {store} from '../store/store'
import {Provider} from 'react-redux';
describe('<Item/> component', () => {
    it('should render',()=>{
    
        render(<Provider store={store}><Item /></Provider>)
        const el = screen.getByTestId("item")
        console.log(el);
    })
   
})