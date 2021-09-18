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
  getOrderData: {};
}): JSX.Element => {
  console.log({ getOrderData });
  return (
    <div className="orders__wrapper order-summary">
      <div className="orders__card">
        <div className="orders__card-header text-center">
          <div className="orders__fee bold">ORDER SUMMARY</div>
        </div>
        <div className="orders__card-body">
          <div className="orders__delivery  p-1">
            <div className="flex justify-between mb-1">
              <div>Subtotal (20 Items)</div>
              <div>৳ 38,850</div>
            </div>
            <div className="flex justify-between mb-1">
              <div>Discount</div>
              <div>৳ 0</div>
            </div>
            <div className="flex justify-between">
              <div>Shipping Charge</div>
              <div>৳ 600</div>
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
                <b>৳ 39,375</b>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
