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

export function sumOfOnePosition(item) {
  let res = item.item.price * item.quantity;
  return Number(res.toFixed(2));
}

export function getTotalPrice(cart) {
  let total = cart.reduce((total, item) => {
    return total + item.priceCurrentPosition;
  }, 0);

  const roundedTotal = total.toFixed(2);
  return parseFloat(roundedTotal);
}

