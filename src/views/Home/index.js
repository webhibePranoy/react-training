import { useEffect, useState } from 'react';
import HttpClient from '../../utils/HttpClient';
import './home.style.css'
const Home=()=>{
    const [catagory,setCatagory]=useState([])
    const apicall=async()=>{
        let response=await HttpClient.requestData("categary","GET")
        if(response.status){
            console.log(response.data)
            setCatagory(response.data)
        }
       
    }

    useEffect(()=>{
        apicall()
        console.log(catagory)
    
        

        

    },[])
   
    return(
        <div className='home'>
            <div className='container'>
                <h5>Primary Form</h5>
            <div className='form_group side'>
                <label htmlFor='catagory' className='home_labels d_block'>catagory</label>
                <select name="catagory" id="catagory">
                    {catagory.map((e,i)=><option key={e.id}value={e.id}>{e.name}</option>)}
                    
                    <option value="selectcatagory">selectcatagory</option>
                </select>
            </div>
            <div className='form_group side'>
                <label htmlFor='subcatagory' className='home_labels d_block'>subcatagory</label>
                    <select name="subcatagory">
                    <option value="selectsubcatagory">selectsubcatagory</option>
                    <option value="bcd">bcd</option>
                    </select>
            </div>
            <div className='form_group m_top w_100'>
                <label htmlFor='business' className='d_block home_labels'>Business</label>
                    <select name="business" className='w_100'>
                        <option value="selectsubcatagory">selectsuncatagory</option>
                        <option value="def">def</option>
                    </select>
            </div>
            <div className='form_group m_top w_100'>
                <label htmlFor='city' className='d_block home_labels'>City</label>
                <select name="city" className='w_100'>
                    <option value="selectcity">selectcity</option>
                    <option value="efg">efg</option>
                </select>
            </div>
            <div className='form_group m_top w_100'>
                <label htmlFor='product_name' className='home_labels'>Product Name</label>
                <input type="text" className='home_inputs'></input>
            </div>
            <div className='form_group m_top w_100'>
                <label htmlFor='product_price' className='home_labels'>Product Price</label>
                <input type="text" className='home_inputs'></input>  
            </div>
        </div>

            </div>
            
    )
}
export default Home;