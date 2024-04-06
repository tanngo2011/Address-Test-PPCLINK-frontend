import axios from "axios";

//file api.jsx dùng để lưu trữ các cấu hình chung cho việc call API




//Khởi tạo một axios nguyên thuỷ với các thuộc tính cấu hình (chọn các thuộc tính mặc định, không bị thay 
//đổi):
export let axiosClient = axios.create({
  baseURL: "http://localhost:8080/api/v1/",
  headers: {
    "Content-Type": "application/json",
  },
//   method: "GET", 
}); //--> method create() này trả về kết quả là một function khác





//Khai báo một function để bổ sung thêm một vài thuộc tính cấu hình khác cho axios nguyên thuỷ trong quá 
//trình call API: 
//(Ta sẽ đem function api() này đi sử dụng trong chương trình ở những chỗ cần call API)
export let api = (method_param, endpoint_param, payload_param) => {
  return axiosClient(
    endpoint_param, 
    {
      method: method_param,
      data: payload_param,
      // url: endpoint_param
    })
    .then((response) => {
      
      return response;
    
    })
    .catch((error) => {
        console.log(error);
        alert("Đã xảy ra lỗi!!! vui lòng kiểm tra lại!!!")
    });
};



