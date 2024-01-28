import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "../App.css"
import { Badge, Button, Dropdown, FormControl } from 'react-bootstrap';
import {FaShoppingCart} from "react-icons/fa"
import { Link } from 'react-router-dom';
import { CartState } from '../context/Context';
import { AiFillDelete } from 'react-icons/ai';

const Header = () => {
    const {state:{cart},dispatch} = CartState()
    return (
        <Navbar variant='dark' bg='dark' style={{height:80}}>
          <Container>
                <Navbar.Brand>
                    <Link to="/">Shopping Cart</Link>
                </Navbar.Brand>
                <Navbar.Text className='search'>
                    <FormControl style={{width:500}} placeholder='Search a product' className='m-auto'  onChange={(e) => {
                productDispatch({
                  type: "FILTER_BY_SEARCH",
                  payload: e.target.value,
                });
              }}/>
                </Navbar.Text>
                <Nav className="mr-auto justify-content-end" inline="true" style={{flexGrow:1}}>
                <Dropdown  >
                    <Dropdown.Toggle variant='success'>
                        <FaShoppingCart color="white" fontSize="25px"/>
                        <Badge style={{background:"transparent"}}>{cart.length}</Badge>
                    </Dropdown.Toggle>
                    <Dropdown.Menu style={{minWidth:370}}>
                        {cart.length>0?(
                            <>
                            {cart.map(prod=>(
                                <span className='cartitem' key={prod.id}>
                                    <img src={prod.image} className='cartItemImg' alt={prod.name} />
                                    <div className='cartItemDetail'>
                                        <span>{prod.name}</span>
                                        <span>${prod.price.split(".")[0]}</span>
                                    </div>
                                    <AiFillDelete style={{cursor:'pointer'}}onClick={()=>{
                                        dispatch({type:"REMOVE_FROM_CART",payload:prod})
                                    }}/>
                                </span>
                                
                            ))}<Link to="/cart">
                            <Button style={{width:"95%",margin:"0 10px"}}>
                                Go to Cart
                            </Button>
                            </Link>

                            
                            </>
                        ):("cart is empty")}
                    </Dropdown.Menu>
                </Dropdown>
    </Nav>

          </Container>
        </Navbar>
      );
}

export default Header
