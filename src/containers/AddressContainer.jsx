import React, { useEffect, useRef, useState } from 'react';
import ProvinceInput from '../components/ProvinceInput';
import DistrictInput from '../components/DistrictInput';
import WardInput from '../components/WardInput';
import { getListProvince } from '../API/ProvinceApi';
import Input from '../components/Input';
import Search from '../components/Search';
import SearchOutput from '../components/SearchOutput';

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

    //kết quả cuối cùng
    let [addressCode, setAddressCode] = useState("");

    //kết quả search:
    let [search, setSearch] = useState([]);


    //Khởi chạy chương trình: load luôn list province
    useEffect(() => {

        let request_param = null;
    
        getListProvince(request_param).then((response_listProvince) => {

            setListProvince(response_listProvince.data)
            console.log(response_listProvince);
            
        });
        
    }, [])




    let handleAddress = () => {
            
        setAddressCode(`Địa chỉ ở dạng Mã địa danh là: ${provinceInput}, ${districtInput}, ${wardInput}, ${detailAddressInput}`)

    }




    return (
        <>
            <ProvinceInput 
            listProvince = {listProvince} 
            setListDistrict = {setListDistrict}
            setProvinceInput={setProvinceInput}
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
            />

            
            <br />
            <Input setDetailAddressInput = {setDetailAddressInput}/>
            <br />
            <button type="button" onClick={handleAddress}>Tạo địa chỉ</button>
            <br/>
            
            {addressCode}

            <br />
            <br />
            <br />
            <Search setSearch={setSearch}/>
            <br />
            <SearchOutput search={search}/>
        
            
        </>
    );
}

export default AddressContainer;