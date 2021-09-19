import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
} from "@reach/accordion";
import "@reach/accordion/styles.css";

export const OrderSummary = ({
  getOrderData,
}: {
  getOrderData: any;
}): JSX.Element => {
  const data1OrderQuantity =
    getOrderData && getOrderData?.data1.map((item: any) => item.quantity);
  const data1OrderAmount =
    getOrderData && getOrderData?.data1.map((item: any) => item.discount_price);

  const data2OrderQuantity =
    getOrderData && getOrderData?.data2.map((item: any) => item.quantity);
  const data2OrderAmount =
    getOrderData && getOrderData?.data2.map((item: any) => item.discount_price);

  const totalAmount =
    (data1OrderQuantity &&
      data1OrderQuantity.reduce(
        (sum: number, val: number, i: number) =>
          sum + val * data1OrderAmount[i],
        0
      )) +
    (data2OrderQuantity &&
      data2OrderQuantity.reduce(
        (sum: number, val: number, i: number) =>
          sum + val * data2OrderAmount[i],
        0
      ));

  return (
    <div className="orders__wrapper order-summary">
      <div className="orders__card">
        <div className="orders__card-header text-center">
          <div className="orders__fee bold">ORDER SUMMARY</div>
        </div>
        <div className="orders__card-body">
          <div className="orders__delivery  p-1">
            <div className="flex justify-between mb-1">
              <div>Subtotal ({getOrderData?.metadata?.total_item} Items)</div>
              <div>৳ {totalAmount}</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Discount</div>
              <div>৳ {getOrderData?.metadata?.discount}</div>
            </div>
            <div className="flex justify-between">
              <div>Shipping Charge</div>
              <div>৳ {getOrderData?.metadata?.shipping_charge}</div>
            </div>
          </div>
          <div className="order-summary__accordion  p-1">
            <Accordion collapsible>
              <AccordionItem>
                <h3 className="orders__fee bold cursor-pointer">
                  <div className="flex justify-between cursor-pointer">
                    <AccordionButton>
                      Gift Cards, Coupons &<br />
                      Promotional Codes
                    </AccordionButton>
                    <img
                      src="/static/images/arrow-down-s-line.svg"
                      alt="down-arrow"
                    />
                  </div>
                </h3>
                <AccordionPanel>
                  <div style={{ position: "relative" }}>
                    <input
                      type="text"
                      className="order-summary__input"
                      placeholder="Voucher Code"
                    />
                    <input
                      type="submit"
                      className="order-summary__button"
                      value="Apply"
                    />
                  </div>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>
          </div>
          <div className="orders__delivery p-1">
            <div className="flex justify-between">
              <div>
                <b>Total Payable</b>
              </div>
              <div>
                <b>
                  ৳ {totalAmount + getOrderData?.metadata?.shipping_charge}{" "}
                </b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
