import React from "react";
import { TiTick } from "react-icons/ti";
export const Orders = ({
  getOrderData,
}: {
  getOrderData: any;
}): JSX.Element => {
  console.log({ getOrderData });
  return (
    <div
      className="orders__wrapper"
      style={{ width: "-webkit-fill-available" }}
    >
      <div className="orders__card">
        <div className="orders__card-header flex justify-between">
          <div className="flex">
            <div className="orders__logo">
              <img src="/static/images/Daco_24564.png" alt="product-logo" />
            </div>
            <div>
              <div>
                <span className="orders__product-name">Nike</span>
                <span className="orders__tick">
                  <TiTick color="#FFFFFF" size={16} />
                </span>
              </div>
              <div className="orders__item-varity">Fulfilled by Nike</div>
            </div>
          </div>
          <div>
            <div className="orders__fee">
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
              getOrderData?.data?.map((item: any, index: any) => (
                <div className="flex orders__item" key={index}>
                  <div className="orders__item-image">
                    <img src={item.image} alt="item-image" />
                  </div>
                  <div style={{ width: "80%" }}>
                    <div className="orders__item-name mb-1">{item.name}</div>
                    <div className="flex orders__item-varity">
                      <div>Color: {item.color}</div>
                      <div>Size: {item.size}</div>
                    </div>
                    <div className="orders__item-name mb-1">
                      Quantity: {item.quantity}
                    </div>
                    <div className="flex align-center">
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
            Buy 3 item(s) more enjoy free shipping for Standard delivery option
          </div>
        </div>
      </div>
      <hr className="new" />
      <div className="orders__card">
        <div className="orders__card-header flex justify-between">
          <div className="flex">
            <div className="orders__logo">
              <img src="/static/images/Daco_24564.png" alt="product-logo" />
            </div>
            <div>
              <div>
                <span className="orders__product-name">Nike</span>
                <span className="orders__tick">
                  <TiTick color="#FFFFFF" size={16} />
                </span>
              </div>
              <div className="orders__item-varity">Fulfilled by Nike</div>
            </div>
          </div>
          <div>
            <div className="orders__fee">Delivery Fee: BDT. 40</div>
            <div className="orders__delivery">
              Estimate Delivery on 27 January
            </div>
          </div>
        </div>
        <div className="orders__card-body">
          <div>
            <div className="flex orders__item">
              <div className="orders__item-image">
                <img src="/static/images/shirt.png" alt="item-image" />
              </div>
              <div style={{ width: "80%" }}>
                <div className="orders__item-name mb-1">
                  Men Striped Casual Spread Shirt Super Skinny Fit Low
                </div>
                <div className="flex orders__item-varity">
                  <div>Color: Red</div>
                  <div>Size: XL</div>
                </div>
                <div className="orders__item-name mb-1">Quantity: 1</div>
                <div className="flex align-center">
                  <div className="orders__item-name">Price: BDT. 2,850</div>
                  <div className="orders__item-price">BDT. 3,050</div>
                  <div className="orders__item-tag">25% Off</div>
                </div>
              </div>
              <div className="orders__item-controls">
                <img
                  src="/static/images/heart-2-line.svg"
                  alt="make-favorite"
                />
                <img src="/static/images/delete-bin-line.svg" alt="delete" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
