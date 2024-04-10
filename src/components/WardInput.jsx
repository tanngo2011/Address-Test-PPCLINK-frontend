import React, { useState } from "react";
import { getListWard, getListWardByInput } from "../API/WardApi";

function WardInput(props) {


    let { listWard, setWardInput, setListWard } = props;

    let [wardSearchInput, setWardSearchInput] = useState("");


    let handleWard = (event_param) => {
      let value = event_param.target.value;
      setWardInput(value);
      console.log(value);
    };




    let handleWardSearch = (event_param) => {
        let value = event_param.target.value;
        setWardSearchInput(value)
    }




    let logData = () => {
        let wardSearchData = {
          wardInput: wardSearchInput
        }
    
        //Gọi 2 lần API lồng nhau:
        //Lần 1: tìm tên đầy đủ
        getListWard(wardSearchData).then((response) => {
          console.log(response);
          console.log(response.data);
    
          //Nếu kết quả khi tìm tên đầy đủ là một Array rỗng (tức không có bản ghi nào) thì...
          if (response.data.length == 0) {
            //...Lần 2: tìm tên viết tắt
            getListWardByInput(wardSearchData).then((response2) => {
                setListWard(response2.data);
    
            })
          } else {
            setListWard(response.data);
          }
          //Giải thích cho việc gọi 2 lần: xem DistrictInput
        });
    }





  return (
    <>
      <label htmlFor="district"> <h2>Phường/Xã: </h2></label>

      <div id="search">
        <input type="text" id="search-input" onChange={() => handleWardSearch(event)}/>
        <button id="search-button" onClick={logData}>Tìm</button>
      </div>

      <select
        name="district"
        id="district"
        title="Đây là danh sách các Quận ở Việt Nam"
        onChange={() => handleWard(event)}
      >
        {listWard?.map((ward, i) => (
          <option value={ward.id}>{ward.wardName}</option>
        ))}
      </select>
    </>
  );
}

export default WardInput;
