import React from "react";
import { Link } from "react-router-dom";
import './style.css'
import Bestsell from "./data";
import { IoCartOutline } from "react-icons/io5";
import { CiStar } from "react-icons/ci";
import { addProductToCart,getCartProducts } from "../../function/localstorage";

const BestSell = () => {

    function addToCart(data) {
        let getCart = getCartProducts()
        if(getCart.find(v => v === data.id)){
            const filterdata = getCart.filter(v => Number(data.id))
            addProductToCart(filterdata);
       }else{
        getCart.push(data.id)
        addProductToCart(getCart)
       }
    }
    return (
        <div>
            <div className="Bestsell">
                <h2>Best Sellers</h2>
                <Link>View all products</Link>
            </div>
            <div className="mapContinar row">

                {
                    Bestsell.map((v, i) => {
                        return (
                            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
                                <div className="card-continar">
                                    <div className="img-continar">
                                    <img className="imagebest" src={v.image} />
                                    </div>
                                    <div className="titleCard">
                                        <div>
                                            <h5>{v.price}</h5>
                                            <h6>{v.title}</h6>
                                            <CiStar size={25} />
                                            <CiStar size={25} />
                                            <CiStar size={25} />
                                            <CiStar size={25} />
                                            <CiStar size={25} />
                                            ({v.rating.count})
                                        </div>
                                        <div onClick={()=>addToCart(v)} className="cart">
                                            <IoCartOutline size={25} />
                                        </div>
                                    </div>

                                </div>
                            </div>
                        )
                    })
                }

            </div>
        </div>
    )
}

export default BestSell