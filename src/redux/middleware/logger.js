const logger = (store) => (next) => (action) => {
  const state = store.getState();
  const { qty: asusQty } = state.asus;
  const { qty: dellQty } = state.dell;
  const { qty: canonQty } = state.canon;

  if ((asusQty < 20) & (dellQty < 35) & (canonQty < 72)) {
    return next(action);
  }

  next(action);
};

export default logger;
