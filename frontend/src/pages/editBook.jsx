import React, { useState, useEffect } from 'react'

import BackButton from '../components/BackButton'

import Spinner from '../components/spinner'

import axios from 'axios'

import { useNavigate, useParams } from 'react-router-dom'
import { AiFillRedEnvelope } from 'react-icons/ai'



const EditBook = () => {

const [title, setTitle] = useState('');
const [author, setAuthor] = useState('');
const [publishYear, setPublishYear] = useState('');
const [loading, setLoading] = useState(false);
const navigate = useNavigate();
const {id} = useParams();

useEffect(() =>{
setLoading(true);
axios.get(`http://localhost:5555/books/${id}`).then((response)=>{
  //set data
  setTitle(response.data.title);
    setAuthor(response.data.author);
    setPublishYear(response.data.publishYear);
    setLoading(false);

}).catch((error)=>{
  console.log(error);
  setLoading(false);
  alert('An Error is noticed. check console')
});
}, []);




const handleEditBook = () => {

const data = {
  title,
  author,
  publishYear,
};
setLoading(true);
axios.put(`http://localhost:5555/books/${id}`, data).then(()=>{
setLoading(false);
navigate('/');
}).catch((error)=>{
  setLoading(false);
  alert('An Error is noticed. check console')
console.log(error);
})

}


  return (
    <div className='p-4'>
      <BackButton/>
      <h1 className='text-3xl my-4'>Edit Book</h1>

      {loading ? (<Spinner/>) : (' ')}

      <div className='flex flex-col border-2 bg-sky-400 rounded-xl w-[600px] p-4 mx-auto'>
<div className='my4
'>

<label className='text-xl mr-4'>Title</label>

<input type="text" value={title} 
onChange={(e)=>setTitle(e.target.value)} className='border-2 px-4 py-2 w-full' />

</div>



<div className='my4
'>

<label className='text-xl mr-4'>Author</label>

<input type="text" value={author} 
onChange={(e)=>setAuthor(e.target.value)} className='border-2 px-4 py-2 w-full' />
</div>



<div className='my4
'>

<label className='text-xl mr-4'>Publish Year</label>

<input type="text" value={publishYear} 
onChange={(e)=>setPublishYear(e.target.value)} className='border-2 px-4 py-2 w-full' />

</div>

<button className='p-2 bg-sky-400' onClick={handleEditBook}>Save</button>

      </div>

    </div>
  )
}

export default EditBook
