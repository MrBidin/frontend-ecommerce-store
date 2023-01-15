import {ProductConsumer} from '../../context';
import Title from '../Title';
import CartColumns from './CartColumns';
import EmptyCart from './EmptyCart';
import CartList from './CartList';
import CartTotals from './CartTotals';

// class Cart extends Component {
//   render(){
//     return (
//       <ProductConsumer>
//         {
//           (value) => {
//             return (
//               <section>
//                 <ProductConsumer>
//                   {
//                     (value) => {
//                       const { cart } = value;
//                       if(cart.length>0){
//                         return (
//                           <>
//                             <Title title="Cart" name="Your"></Title>
//                             <CartColumns/>
//                             <CartList value={value}/>
//                             <CartTotals value={value}/>
//                           </>
//                         )
//                       } else {
//                         return (
//                           <EmptyCart/>
//                         )
//                       }
//                     }
//                   }
//                 </ProductConsumer>
//               </section>
//             )
//           }
//         }
//       </ProductConsumer>
//       )
//   }
// }

const Cart = () => {
  return (
    <ProductConsumer>
      {
        (value) => {
          return (
            <section>
              <ProductConsumer>
                {
                  (value) => {
                    const { cart } = value;
                    if(cart.length>0){
                      return (
                        <>
                          <Title title="Cart" name="Your"></Title>
                          <CartColumns/>
                          <CartList value={value}/>
                          <CartTotals value={value}/>
                        </>
                      )
                    } else {
                      return (
                        <EmptyCart/>
                      )
                    }
                  }
                }
              </ProductConsumer>
            </section>
          )
        }
      }
    </ProductConsumer>
    )
};

export default Cart;
