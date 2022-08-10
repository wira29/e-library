import instance from "./axios";

// auth 
export const loginApi = (data) => instance.post('login', data)

// books 
export const getAllBook = () => instance.get('book')
export const getBookPagination = (page) => instance.get('book?page=' + page)
export const getBookDetail = (id) => instance.get(`book/${id}`)