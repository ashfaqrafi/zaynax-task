import React, { FC } from "react";
import styled from "styled-components";
import Head from "next/head";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { BsArrow90DegLeft } from "react-icons/bs";
import { Orders } from "../components/Orders";
import { OrderSummary } from "../components/OrderSummary";
import { data } from "../modules/data";

const HeaderSection = styled.div`
  background-color: white;
`;

const Header = styled.div`
  border-bottom: 1px solid #ececec;
  color: #2b2b2b;
  font-size: 40px;
  text-align: center;
  font-weight: 500;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const SubHeader = styled.div`
  border-bottom: 1px solid #ececec;
  color: #b5b5b5;
  text-transform: uppercase;
  font-size: 14px;
  text-align: left;
  font-style: normal;
  font-weight: normal;
  display: flex;
  justify-content: center;
  padding: 1rem;
`;

const orderData =
  typeof window !== "undefined"
    ? localStorage.setItem("data", JSON.stringify(data))
    : null;

console.log({ orderData });

const getOrderData =
  typeof window !== "undefined" ? localStorage.getItem("data") : null;

const finalData = JSON.parse(getOrderData);

console.log({ getOrderData });

console.log({ finalData });

const index: FC = () => (
  <>
    <Head>
      <title>Zaynax Test</title>
    </Head>
    <HeaderSection>
      <Header>
        <a href="#">zdrop</a>
      </Header>
      <SubHeader>
        <div className="header__links">
          <a href="#">
            <span>
              <AiOutlineShoppingCart size={15} color="#FF6F00" />
            </span>
            <span>Checkout</span>
          </a>
        </div>
        <div className="header__links">
          <a href="#">
            <span>
              <img
                src="/static/images/map-pin-2-line.svg"
                alt="shipping-info"
              />
            </span>
            <span>Shipping Information</span>
          </a>
        </div>
        <div className="header__links">
          <a href="#">
            <span>
              <img src="/static/images/wallet-line.svg" alt="payment" />
            </span>
            <span>Payment</span>
          </a>
        </div>
      </SubHeader>
    </HeaderSection>
    <div className="container">
      <div className="cart__header">
        <div className="cart__left-text">
          <div>
            <span className="cursor-pointer">
              <BsArrow90DegLeft size={30} color="#FF6F00" />
            </span>
          </div>
          <div>
            <div className="cart__text">
              <span>YOUR SHOPPING CART</span>
            </div>
            <div className="cart__sub-text">
              <span>2 item(s)</span>{" "}
              <span className="secondary-color">
                <a href="#">Add more</a>
              </span>
            </div>
          </div>
        </div>
        <div className="cart__secure-text">
          <span>
            <img src="/static/images/shield-star-fill.svg" alt="secure" />
          </span>
          <span className="secondary-color">100% Secure</span>
        </div>
      </div>
      <div className="cart__cards-section">
        <Orders getOrderData={finalData} />
        <OrderSummary getOrderData={finalData} />
      </div>
    </div>
  </>
);

export default index;
