import React from "react";
import { TiTick } from "react-icons/ti";
export const Orders = ({
  getOrderData,
}: {
  getOrderData: any;
}): JSX.Element => {
  return (
    <div
      className="orders__wrapper"
      style={{ width: "-webkit-fill-available" }}
    >
      <div className="orders__card">
        <div className="orders__card-header flex justify-between">
          <div className="flex">
            <div className="orders__logo">
              <img src={getOrderData?.branding?.image1} alt="product-logo" />
            </div>
            <div>
              <div className="mb">
                <span className="orders__product-name">
                  {getOrderData?.branding?.brand1}
                </span>
                <span className="orders__tick">
                  <TiTick color="#FFFFFF" size={16} />
                </span>
              </div>
              <div className="orders__item-varity">
                Fulfilled by {getOrderData?.branding?.supplier1}
              </div>
            </div>
          </div>
          <div>
            <div className="orders__fee mb">
              Delivery Fee: BDT. {getOrderData?.metadata?.delivery_fee}
            </div>
            <div className="orders__delivery">
              Estimate Delivery on {getOrderData?.metadata?.delivery_date}
            </div>
          </div>
        </div>
        <div className="orders__card-body">
          <div>
            {getOrderData &&
              getOrderData?.data1?.map((item: any, index: any) => (
                <div className="flex orders__item" key={index}>
                  <div className="orders__item-image">
                    <img src={item.image} alt="item-image" />
                  </div>
                  <div className="orders__item-info">
                    <div className="orders__item-name mb-1">{item.name}</div>
                    <div className="flex orders__item-varity">
                      <div>Color: {item.color}</div>
                      <div>Size: {item.size}</div>
                    </div>
                    <div className="orders__item-name mb-1 mt-1">
                      Quantity: {item.quantity}
                    </div>
                    <div className="flex align-center flex-wrap">
                      <div className="orders__item-name">
                        Price: {item.discount_price}
                      </div>
                      <div className="orders__item-price">
                        BDT. {item.price}
                      </div>
                      <div className="orders__item-tag">{item.off}% Off</div>
                    </div>
                  </div>
                  <div className="orders__item-controls">
                    <img
                      src="/static/images/heart-2-line.svg"
                      alt="make-favorite"
                    />
                    <img
                      src="/static/images/delete-bin-line.svg"
                      alt="delete"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
        <div className="orders__card-header flex justify-between">
          <div className="orders__fee">
            {
              "Buy 3 item(s) more enjoy free shipping for Standard delivery option"
            }
          </div>
        </div>
      </div>
      <hr className="new" />
      <div className="orders__card">
        <div className="orders__card-header flex justify-between">
          <div className="flex">
            <div className="orders__logo">
              <img src={getOrderData?.branding?.image2} alt="product-logo" />
            </div>
            <div>
              <div className="mb">
                <span className="orders__product-name">
                  {getOrderData && getOrderData?.branding?.brand2}
                </span>
                <span className="orders__tick">
                  <TiTick color="#FFFFFF" size={16} />
                </span>
              </div>
              <div className="orders__item-varity">
                Fulfilled by {getOrderData && getOrderData?.branding?.supplier2}
              </div>
            </div>
          </div>
          <div>
            <div className="orders__fee mb">Delivery Fee: BDT. 40</div>
            <div className="orders__delivery">
              Estimate Delivery on 27 January
            </div>
          </div>
        </div>
        <div className="orders__card-body">
          <div>
            {getOrderData &&
              getOrderData?.data2?.map((item: any, index: any) => (
                <div className="flex orders__item" key={index}>
                  <div className="orders__item-image">
                    <img src={item.image} alt="item-image" />
                  </div>
                  <div className="orders__item-info">
                    <div className="orders__item-name mb-1">{item.name}</div>
                    <div className="flex orders__item-varity">
                      <div>Color: {item.color}</div>
                      <div>Size: {item.size}</div>
                    </div>
                    <div className="orders__item-name mb-1 mt-1">
                      Quantity: {item.quantity}
                    </div>
                    <div className="flex align-center flex-wrap">
                      <div className="orders__item-name">
                        Price: {item.discount_price}
                      </div>
                      <div className="orders__item-price">
                        BDT. {item.price}
                      </div>
                      <div className="orders__item-tag">{item.off}% Off</div>
                    </div>
                  </div>
                  <div className="orders__item-controls">
                    <img
                      src="/static/images/heart-2-line.svg"
                      alt="make-favorite"
                    />
                    <img
                      src="/static/images/delete-bin-line.svg"
                      alt="delete"
                    />
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};
