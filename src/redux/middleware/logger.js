
const logger = (store) => (next) => (action) => {
  const state = store.getState();
  const { qty: asusQty } = state.asus;
  const { qty: dellQty } = state.dell;
  const { qty: canonQty } = state.canon;
  //   if ((asusQty < 20) & (dellQty < 35) & (canonQty < 72)) {
  //     return next(action);
  //   } else {
  //     alert("You can not order more than available quantities");
  //     window.location.reload();
  //   }
  // if ((asusQty < 20) & ( dellQty < 35) & ( canonQty < 72)) {
  //   return next(action);
  // }
  if (asusQty >= 20) {
    alert("Can not order more than available quantity");
    return next({
      type: "error",
      payload: {
        value: 0,
        id: "asus",
      },
    });
  }
console.log(action);
  next(action);
};

export default logger;
