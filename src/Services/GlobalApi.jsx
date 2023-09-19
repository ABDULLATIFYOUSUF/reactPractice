import axios from "axios";


const getPost= () => axios.get('https://api.slingacademy.com/v1/sample-data/blog-posts') ;

export default{
    getPost
} 