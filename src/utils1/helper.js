export function sliceItems(arr) {
  return arr.reduce((resultArray, item, index) => {
    const chunkIndex = Math.floor(index / 6);

    if (!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [];
    }
    resultArray[chunkIndex].push(item);

    return resultArray;
  }, []);
}

export function cartCounter(state) {
  return state.reduce((acc, current) => acc + current.quantity, 0);
}

export function setPriceCurrentPosition(state) {
  let a = [
    { item: { price: 3.2 }, priceCurrentPosition: 0, quantity: 3 },
    { item: { price: 2 }, priceCurrentPosition: 0, quantity: 31 },
  ];

  return state.map((item) => ({
    ...item,
    priceCurrentPosition: item.item.price * item.quantity,
  }));
}

export function sumOfOnePosition(item) {
  return item.item.price * item.quantity;
}

export function subOfOnePosition(item) {
  return item.item.price * item.quantity;
}

export function getTotalPrice (cart) {
  return cart.reduce((total, item) => {
    return total + item.priceCurrentPosition;
  }, 0);
};