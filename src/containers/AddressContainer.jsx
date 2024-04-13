import React, { useEffect, useRef, useState } from 'react';
import ProvinceInput from '../components/ProvinceInput';
import DistrictInput from '../components/DistrictInput';
import WardInput from '../components/WardInput';
import { getListProvince } from '../API/ProvinceApi';
import Input from '../components/Input';

function AddressContainer(props) {


    //khai báo list 
    let [listProvince, setListProvince] = useState([]);
    let [listDistrict, setListDistrict] = useState([]);
    let [listWard, setListWard] = useState([]);


    //Khai báo các trường input để hiển thị kết quả cuối cùng:
    let [districtInput, setDistrictInput] = useState("");
    let [provinceInput, setProvinceInput] = useState("");
    let [wardInput, setWardInput] = useState("");
    let [detailAddressInput, setDetailAddressInput] = useState("");

    let [addressCode, setAddressCode] = useState("");


    const selectRef = useRef(null);


    //Khởi chạy chương trình: load luôn list district
    useEffect(() => {

        let request_param = null;
    
        getListProvince(request_param).then((response_listProvince) => {

            setListProvince(response_listProvince.data)
            console.log(response_listProvince);
            
        });
        
    }, [])




    let handleAddress = () => {
        if (Array.isArray(provinceInput)) {
            setProvinceInput(provinceInput[0].id);
        }

        if (Array.isArray(districtInput)) {
            setDistrictInput(districtInput[0].id);
        }

        if (Array.isArray(wardInput)) {
            setWardInput(wardInput[0].id);
        }
            
        setAddressCode(`Địa chỉ ở dạng Mã địa danh là: ${provinceInput}, ${districtInput}, ${wardInput}, ${detailAddressInput}`)
        
        console.log(typeof(provinceInput));

        console.log(provinceInput,districtInput, wardInput);
        
    }




    return (
        <>
            <ProvinceInput 
            listProvince = {listProvince} 
            setListDistrict = {setListDistrict}
            setProvinceInput={setProvinceInput}
            setListProvince={setListProvince}
            setListWard={setListWard}
            />
            <br />
            <DistrictInput 
            listDistrict = {listDistrict} 
            districtInput={districtInput}
            setDistrictInput = {setDistrictInput}
            setProvinceInput={setProvinceInput}
            setListWard={setListWard}
            setListDistrict = {setListDistrict}
            setListProvince={setListProvince}
            setWardInput={setWardInput}
            />
            
            <br />
            <WardInput 
            listWard = {listWard} 
            setWardInput={setWardInput}
            setListWard={setListWard}
            setListDistrict = {setListDistrict}
            setDistrictInput = {setDistrictInput}
            setProvinceInput={setProvinceInput}
            setListProvince={setListProvince}
            />
            <br />
            <Input setDetailAddressInput = {setDetailAddressInput}/>
            <br />
            <button type="button" onClick={handleAddress}>Tạo địa chỉ</button>
            <br/>
            
            {addressCode}
            
        </>
    );
}

export default AddressContainer;