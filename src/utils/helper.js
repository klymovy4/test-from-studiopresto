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
  return item.item.price * item.quantity;
}

export function getTotalPrice(cart) {
  let total = cart.reduce((total, item) => {
    return total + item.priceCurrentPosition;
  }, 0);

  const roundedTotal = total.toFixed(2);
  return parseFloat(roundedTotal);
}

export function postEmail(result) {
  fetch("http://localhost:4000/api/email", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(result),
  })
    .then((response) => response.json())
    .then((data) => {
      console.log("Server response:", data);
    })
    .catch((error) => {
      console.error("Error:", error);
    });
}