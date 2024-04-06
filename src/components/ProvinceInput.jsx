import React, { useState } from "react";
import { getListDistrictByProvince } from "../API/DistrictApi";

function ProvinceInput(props) {
  let { listProvince, setListDistrict, setProvinceInput } = props;

  

  let handleProvince = (event_param) => {
    let value = event_param.target.value;
    setProvinceInput(value);
    // console.log(provinceInput);

    getListDistrictByProvince(value).then((response) => {
        console.log(response);
        setListDistrict(response.data)
    });
  };

  // console.log(car);
  return (
    <>
      
      <label htmlFor="province">Tỉnh: </label>
      <select name="province"
        id="province"
        title="Đây là danh sách các Tỉnh ở Việt Nam"
        onChange={() => handleProvince(event)}
        >
        {listProvince?.map((province, i) => (
          <option value={province.id}>
            {province.provinceName}
          </option>
        ))}
      </select>
    </>
  );
}

export default ProvinceInput;
