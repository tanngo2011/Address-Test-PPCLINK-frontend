import React, { useEffect, useRef, useState } from "react";
import { getListDistrictByProvince } from "../API/DistrictApi";
import { getListProvince, getListProvinceByInput } from "../API/ProvinceApi";
import { getListWardByProvince } from "../API/WardApi";

function ProvinceInput(props) {
  let { listProvince, setListDistrict, setProvinceInput, setListProvince, setListWard } = props;


  let [provinceSearchInput, setProvinceSearchInput] = useState("");



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

  

  let handleProvinceSearch = (event_param) => {
    let value = event_param.target.value;
    setProvinceSearchInput(value)
  }


  let logData = () => {

    let provinceSearchData = {
      provinceInput: provinceSearchInput
    }

    //Gọi 2 lần API lồng nhau:
    //Lần 1: tìm tên đầy đủ
    getListProvince(provinceSearchData).then((response) => {
      console.log(response);
      console.log(response.data);

      //Nếu kết quả khi tìm tên đầy đủ là một Array rỗng (tức không có bản ghi nào) thì...
      if (response.data.length == 0) {
        //...Lần 2: tìm tên viết tắt
        getListProvinceByInput(provinceSearchData).then((response2) => {
          setListProvince(response2.data);

        })
      } else {
        setListProvince(response.data);
      }
      //Giải thích cho việc gọi 2 lần: xem DistrictInput
    });

  }




  // console.log(car);
  return (
    <>
      

      <label htmlFor="province"> <h2>Tỉnh:</h2> </label>


      <div id="search">
        <input type="text" id="search-input" onChange={() => handleProvinceSearch(event)}/>
        <button id="search-button" onClick={logData}>Tìm</button>
      </div>


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
