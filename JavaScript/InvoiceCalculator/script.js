"use strict";

const $ = function (id) {
  return document.getElementById(id);
};

const calculateDiscountPercent = function (customerType, invoiceSubtotal) {
  let discountPercent = 0;
  if (customerType === "r") {
    if (invoiceSubtotal < 100) {
      discountPercent = 0.0;
    }
  } else if (invoiceSubtotal >= 100 && invoiceSubtotal < 250) {
    discountPercent = 0.1;
  } else if (invoiceSubtotal >= 250 && invoiceSubtotal < 500) {
    discountPercent = 0.25;
  } else if (invoiceSubtotal >= 500) {
    discountPercent = 0.3;
  } else if (customerType === "h") {
    if (invoiceSubtotal < 500) {
      discountPercent = 0.4;
    } else if (invoiceSubtotal >= 500) {
      discountPercent = 0.5;
    }
  }
  return discountPercent;
};

let processEntries = function() {
  let discountAmount;
  let invoiceTotal;
  let discountPercent;

  // get values, reset subtotal to  decimals
  let customerType = $("type").value;
  let invoiceSubtotal = parseFloat($("subtotal").value);
  $("subtotal").value = invoiceSubtotal.toFixed(2);

  // call the function to get the discount percent
  discountPercent = calculateDiscountPercent(customerType, invoiceSubtotal);

  // calculate the results and display discount, price and amount to the new total
  discountAmount = invoiceSubtotal * discountPercent;
  invoiceTotal = invoiceSubtotal - discountAmount;

  $("percent").value = (discountPercent * 100).toFixed(2);
  $("discount").value = discountAmount.toFixed(2);
  $("total").value = invoiceTotal.toFixed(2);

  $("type").focus();
};

window.onload = function () {
  $("calculate").onclick = processEntries;
  $("type").focus();
};
