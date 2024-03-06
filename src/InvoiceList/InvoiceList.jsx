import React from "react";
import "./InvoiceList.css";
import arrow from "../Assests/Arrow.svg";
import delete_icon from "../Assests/delete-icon.svg";
import mic_icon from "../Assests/Mic.svg";
import cross_icon from "../Assests/cross_iconr.svg";

const InvoiceList = () => {
  return (
    <div className="invoicelist">
      <div className="invoice-header">
        <div className="header-templates">Templates</div>
        <div className="header-createinvoice">Create Invoice</div>
      </div>
      <div className="line"></div>
      <div className="invoicelist-body">
        <div className="invoice-form">
          <div className="form-area">
            <label htmlFor="person">Select Person</label>
            <div className="form-input">
              <p>Select the person to whom you will send this</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="form-area">
            <label htmlFor="person">Invoice Number</label>
            <div className="form-input">
              <p> </p>
            </div>
          </div>
        </div>
        <div className="invoice-form">
          <div className="form-area">
            <label htmlFor="person">Add a Treatment</label>
            <div className="form-input">
              <p>Select a treatment</p>
              <img src={arrow} alt="" />
            </div>
          </div>
          <div className="form-area">
            <label htmlFor="person">Select Date</label>
            <div className="form-input">
              <p>dd/mm/yyyy</p>
            </div>
          </div>
        </div>

        <div className="treatment-amount">
          <div className="treatment-amount-head">
            <div className="head-treatment">Treatment</div>
            <div className="head-amount">Amount</div>
          </div>

          <div className="line"></div>

          <div className="treatment-body">
            <div className="body-table">
              <p>Anti wrinkle treatment</p>
              <span>$1480</span>
            </div>
            <div className="body-button">
              <button className="add">Add</button>
              <button className="remove">Remove</button>
            </div>
          </div>
        </div>

        <div className="treatment-table">
          <div className="treatment-table-head">
            <div className="table-head-treatments">Treatments</div>
            <div className="table-head-rate">Rate/per section</div>
            <div className="table-head-section">no. of section</div>
            <div className="table-head-total">Total</div>
          </div>
          <div className="line"></div>
          <div className="treatment-table-body">
            <div className="table-body-treatments">
              <p>Hair Care Session</p>
            </div>
            <div className="table-body-rate">
              <p>$145</p>
            </div>
            <div className="table-body-section">
              <p>8</p>
            </div>
            <div className="table-body-total">
              <p>$1160</p>
            </div>
          </div>
          <div className="treatment-table-button">
            <button className="add">Add</button>
            <button className="remove">Remove</button>
          </div>
        </div>

        <div className="skincareitem">
          <div className="skincare-table-head">
            <div className="table-head-skincare">
              <p>Skincare Items</p>
              <div className="table-input">
                <span>Vitamin A Night Serum</span>
              </div>
              <div className="table-input">
                <span>Vitamin A Night Serum</span>
              </div>
            </div>
            <div className="table-head-skincarerate">
              <p>Rate</p>
              <div className="table-input">
                <span>$90</span>
              </div>
              <div className="table-input">
                <span>$90</span>
              </div>
            </div>
            <div className="table-head-qty">
              <p>Qty</p>
              <div className="table-input">
                <span>2</span>
              </div>
              <div className="table-input">
                <span>2</span>
              </div>
            </div>
            <div className="table-head-amount">
              <p>Amount</p>
              <div className="table-input">
                <span>$180</span>
              </div>
              <div className="table-input">
                <span>$180</span>
              </div>
            </div>
            <div className="delete-icons">
              <span></span>
              <div className="table-delete-icons">
                <img src={delete_icon} alt="" className="table-delete" />
                <img src={cross_icon} alt="" className="table-cross" />
              </div>
              <div className="table-delete-icons">
                <img src={delete_icon} alt="" className="table-delete" />
                <img src={cross_icon} alt="" className="table-cross" />
              </div>
            </div>
          </div>
          <div className="treatment-table-button">
            <button className="add">Add</button>
            <button className="remove">Remove</button>
          </div>
        </div>

        <div className="footer">
          <div className="footer-notes">
            <p>Add Notes/ Terms</p>
            <div className="footer-notes-input">
              <img src={mic_icon} alt="" />
            </div>
          </div>

          <div className="footer-right">
            <div className="footer-subtotal">
              <p>Subtotal</p>
              <p>$540.00</p>
            </div>
            <div className="transaction-fees">
              <p>Transaction Fee 5%</p>
              <div className="fees-input">$00.00</div>
            </div>
            <div className="transaction-fees">
              <p>Discount 10%</p>
              <div className="fees-input">$00.00</div>
            </div>

            <div className="footer-total">
              <p>Total</p>
              <p>$540.00</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceList;
