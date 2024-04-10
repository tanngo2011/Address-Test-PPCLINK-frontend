import React, { useState } from 'react';

function Input(props) {

    let {setDetailAddressInput} = props;

    let handleDetailAddress = (event_param) => {
        let value = event_param.target.value;
        console.log(value);
        setDetailAddressInput(value);
    };


    return (
        <>
            <label for="detail-address"> <h2>Địa chỉ cụ thể: </h2></label>
            <input type='text' id="detail-address" onChange={handleDetailAddress}></input>
            
        </>
    );
}

export default Input;