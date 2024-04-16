import React, { useEffect, useRef, useState } from "react";
import { getListDistrictByProvince } from "../API/DistrictApi";
import { getListProvince, getListProvinceByInput } from "../API/ProvinceApi";
import { getListWardByProvince } from "../API/WardApi";

function ProvinceInput(props) {
  let { listProvince, setListDistrict, setProvinceInput, setListWard } = props;




  let handleProvince = (event_param) => {
    let value = event_param.target.value;
    setProvinceInput(value);
    // console.log(provinceInput);

    getListDistrictByProvince(value).then((response) => {
      console.log(response);
      setListDistrict(response.data);
    });


    getListWardByProvince(value).then((response) => {
      console.log(response);
      setListWard(response.data);
    });

  };

  
  return (
    <>
      

      <label htmlFor="province"> <h2>Tỉnh:</h2> </label>

      <select
        name="province"
        id="province"
        title="Đây là danh sách các Tỉnh ở Việt Nam"
        onChange={() => handleProvince(event)}
        
      >
        {listProvince?.map((province, i) => (
          <option key={i} value={province.id}>{province.provinceName}</option>
        ))}
      </select>
    </>
  );
}

export default ProvinceInput;
