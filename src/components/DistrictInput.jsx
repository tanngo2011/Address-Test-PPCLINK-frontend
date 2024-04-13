import React, { useEffect, useRef, useState } from "react";
import { getListDistrict, getListDistrictByInput } from "../API/DistrictApi";
import { getListWardByDistrict } from "../API/WardApi";
import { getProvinceByDistrict } from "../API/ProvinceApi";

function DistrictInput(props) {
  let { listDistrict, setDistrictInput, setListWard, setListDistrict, setListProvince, setProvinceInput, setWardInput } = props;

  let [districtSearchInput, setDistrictSearchInput] = useState("");




  //function lấy dữ liệu người dùng nhập vào
  let handleDistrict = (event_param) => {
    let value = event_param.target.value;

    //set dữ liệu người dùng nhập vào để hiển thị kết quả
    setDistrictInput(value);


    getListWardByDistrict(value).then((response) => {
      console.log(response);
      setListWard(response.data);

    });


    getProvinceByDistrict(value).then((response) => {
      console.log(response);
      setListProvince(response.data)
      setProvinceInput(response.data[0].id)
    })

  };



  //function để set input người dùng tìm kiếm:
  let handleDistrictSearch = (event_param) => {
    let value = event_param.target.value;
    setDistrictSearchInput(value)
  }




  


  //xử lý khi người dùng bấm nút tìm kiếm:
  let logData = () => {
    let districtSearchData = {
      districtInput: districtSearchInput
    }

    //Gọi 2 lần API lồng nhau:
    //Lần 1: tìm tên đầy đủ
    getListDistrict(districtSearchData).then((response) => {
      console.log(response);
      console.log(response.data);

      //Nếu kết quả khi tìm tên đầy đủ là một Array rỗng (tức không có bản ghi nào) thì...
      if (response.data.length == 0) {
        //...Lần 2: tìm tên viết tắt
        getListDistrictByInput(districtSearchData).then((response2) => {
          setListDistrict(response2.data);
          

        })
      } else {
        setListDistrict(response.data);
      }
      //Giải thích cho việc gọi 2 lần: Trường hợp 1, nếu người dùng truyền tên viết tắt ngay từ đầu, thì 
      //method getListDistrict không trả về bản ghi nào hợp lệ, nên sẽ cần phải call API lần 2 để sử dụng
      //method getListDistrictByInput để tìm theo tên viết tắt. Trường hợp 2, nếu người dùng truyền tên đầy
      //đủ ngay từ đầu, thì method getListDistrict sẽ trả ra kết quả luôn, lúc đấy ko cần phải call tiếp đến
      //method getListDistrictByInput
    });


  }

  return (
    <>
      <label htmlFor="district"> <h2>Thành phố/Quận/Huyện:</h2> </label>

      <div id="search">
        <input type="text" id="search-input" onChange={() => handleDistrictSearch(event)}/>
        <button id="search-button" onClick={logData}>Tìm</button>
      </div>

      <select
        name="district"
        id="district"
        title="Đây là danh sách các Quận ở Việt Nam"
        onChange={() => handleDistrict(event)}
        
      >
        {listDistrict?.map((district, i) => (
          <option key={i} value={district.id}>{district.fullname}</option>
        ))}
      </select>
    </>
  );
}

export default DistrictInput;
