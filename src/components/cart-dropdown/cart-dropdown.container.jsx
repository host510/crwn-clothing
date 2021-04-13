import { connect } from "react-redux";
import { withRouter } from "react-router";
import { compose } from "redux";
import { createStructuredSelector } from "reselect";

import CartDropdown from "./cart-dropdown.component";
import { selectCartItems } from '../../redux/cart/cart.selectors';

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems
});

const CartDropdownContainer = compose(
  withRouter,
  connect(mapStateToProps)
)(CartDropdown);

export default CartDropdownContainer;