import React, { useEffect, useState } from 'react';
import ProvinceInput from '../components/ProvinceInput';
import DistrictInput from '../components/DistrictInput';
import WardInput from '../components/WardInput';
import { getListProvince } from '../API/ProvinceApi';
import Input from '../components/Input';

function AddressContainer(props) {

    let [listProvince, setListProvince] = useState([]);
    let [listDistrict, setListDistrict] = useState([]);
    let [listWard, setListWard] = useState([]);

    let [districtInput, setDistrictInput] = useState("");
    let [provinceInput, setProvinceInput] = useState("");
    let [detailAddressInput, setDetailAddressInput] = useState("");

    let [addressCode, setAddressCode] = useState("");

    useEffect(() => {
    
        getListProvince().then((response_listProvince) => {

            setListProvince(response_listProvince.data)
            console.log(response_listProvince);
            
        });
        
    }, [])


    let handleAddress = () => {
        console.log(`${provinceInput}, ${districtInput}, ${detailAddressInput}`);
        setAddressCode(`Địa chỉ ở dạng Mã địa danh là: ${provinceInput}, ${districtInput}, ${detailAddressInput}`)
    }


    return (
        <>
            <ProvinceInput 
            listProvince = {listProvince} 
            setListDistrict = {setListDistrict}
            setProvinceInput={setProvinceInput}
            
            />
            <br />
            <DistrictInput listDistrict = {listDistrict} setDistrictInput = {setDistrictInput}/>
            <br />
            <WardInput/>
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