module.exports = {
  createEmailTemplate: function (data) {
    const itemsHTML = data.cart.map((el) => {
      const item = el.item;
      return `<div id=${item.id} style="display: flex; border: 1px solid black;">
                  <div style="background-image: url(${item.image}); height: 150px; width: 100px; background-position: center; background-repeat: no-repeat; background-size: contain;"></div>
                  <div style="display: flex; flex-direction: column; padding: 10px;">
                    <div>
                      <h4>${item.title}</h4>
                    </div>
                    <div>
                        <h4>${item.price} x ${el.quantity} = ${el.priceCurrentPosition}₴</h4>
                    </div>
                  </div>
                </div>`;
    });

    const combinedHTML = ` <h4>Total: ${
      data.totalPrice
    }₴</h4><div style="maxWidth: 600px;">${itemsHTML.join(
      ""
    )}</div>`;
    return combinedHTML;
  },
};
