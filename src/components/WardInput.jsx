import React, { useState } from "react";
import { getListWard, getListWardByInput } from "../API/WardApi";
import { getDistrictByWard } from "../API/DistrictApi";
import { getProvinceByWard } from "../API/ProvinceApi";

function WardInput(props) {


    let { listWard, setWardInput } = props;



    let handleWard = (event_param) => {
      let value = event_param.target.value;
      setWardInput(value);
      console.log(value);


      // getDistrictByWard(value).then((response) => {
      //   console.log(response);
      //   setListDistrict(response.data)
      //   setDistrictInput(response.data[0].id)
      // });

      // getProvinceByWard(value).then((response) => {
      //   console.log(response);
      //   setListProvince(response.data)
      //   setProvinceInput(response.data[0].id)
      // });


    };




  return (
    <>
      <label htmlFor="district"> <h2>Phường/Xã: </h2></label>


      <select
        name="district"
        id="district"
        title="Đây là danh sách các Quận ở Việt Nam"
        onChange={() => handleWard(event)}
      >
        {listWard?.map((ward, i) => (
          <option key={i} value={ward.id}>{ward.wardName}</option>
        ))}
      </select>
    </>
  );
}

export default WardInput;
