import React, { useMemo, useState } from 'react';

const Ex_memo5 = () => {

    const [price, setPrice] = useState(1000)
    const [quantity, setQuantity] = useState(1)
    const [discount, setDiscount] = useState(0.1)

    const total = useMemo(() => {
        console.log("총액계산")
        return price * quantity * (1-discount)
    },[price,quantity,discount])

    return (
        <>
            <label>
                가격: <input type="number" value={price} onChange={e=>setPrice(+e.target.value)} />
            </label><br />
              <label>
                수량: <input type="number" value={quantity} onChange={e=>setQuantity(+e.target.value)} />
            </label><br />
              <label>
                할인율: <input type="number" step="0.01" value={discount} onChange={e=>setDiscount(+e.target.value)} />
            </label><br />
            <h2>총액 : {total.toLocaleString()}원</h2>
        </>
    );
};

export default Ex_memo5;