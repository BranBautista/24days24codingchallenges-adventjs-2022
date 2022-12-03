function wrapping(gifts) {
    let giftSize = 0, numWrappingPaper = 0;

    let giftsWrapped = gifts.map(gift => {
        let wrappingPaper = "";

        giftSize = gift.length;
        numWrappingPaper = giftSize+2;
        wrappingPaper = "*".repeat(numWrappingPaper);

        return `${wrappingPaper}\n*${gift}*\n${wrappingPaper}`;
    })

    return giftsWrapped;
  }

const gifts = ['cat', 'game', 'socks'];

const wrapped = wrapping(gifts);

console.log(wrapped);
