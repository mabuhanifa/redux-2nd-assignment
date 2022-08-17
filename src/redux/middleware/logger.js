const logger = (store) => (next) => (action) => {
  const state = store.getState();
  const { qty: asusQty } = state.asus;
  const { qty: dellQty } = state.dell;
  const { qty: canonQty } = state.canon;

  if ((0 < asusQty < 20) & (0 < dellQty < 35) & (0 < canonQty < 72)) {
    return next(action);
  }
};

export default logger;
