import {render,screen} from '@testing-library/react'
import Modal from './modal'
import AppBody from './appbody'
describe('<Modal/> component', () => {
    it('should render',()=>{
    
        render(<Modal isOpen={true}/>)
        const el = screen.getByTestId("modal-container")
        console.log(el);
    })
   
})