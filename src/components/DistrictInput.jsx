import React, { useState } from "react";

function DistrictInput(props) {



  let {listDistrict, setDistrictInput} = props;

  

  let handleDistrict = (event_param) => {
    let value = event_param.target.value;
    setDistrictInput(value);
  };

  return (
    <>
      <label htmlFor="district">Thành phố/Quận/Huyện: </label>
      <select
        name="district"
        id="district"
        title="Đây là danh sách các Quận ở Việt Nam"
        onChange={() => handleDistrict(event)}
      >
        {listDistrict?.map((district, i) => (
          <option value={district.id}>{district.fullname}</option>
        ))}
      </select>
    </>
  );
}

export default DistrictInput;
