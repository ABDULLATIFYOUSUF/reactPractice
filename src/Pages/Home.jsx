import { useState, useEffect } from 'react'
import Header from '../Components/Header'
import Search from '../Components/Search'
import IntroPost from '../Components/IntroPost'
import Blogs from '../Components/Blogs'
import Footer from '../Components/Footer'
import GlobalApi from '../Services/GlobalApi'


function Home() {
  const [post, setPost] = useState([])

  useEffect(() => {
    GlobalApi.getPost().then(res => {
      // console.log(res.data.blogs)
      // Handle the API response here
      if (Array.isArray(res.data.blogs)) {
        const result = res.data.blogs.map(item => ({
          id: item.id,
          title: item.title,
          desc: item.content_text,
          category: item.category,
          coverImage: item.photo_url,
        }));
        setPost(result);
      }
    }).catch(error => {
      // Handle any errors here
      console.error("Error fetching data:", error);
    });
  }, []);
  return (
    <div className='p-[20px]'>
      <Header />
      <Search />
      {post.length>0? <IntroPost post={post[0]} />: null}
      {post.length>0? <Blogs posts={post} />: null}
      {/* <Footer /> */}
    </div>
  )
}

export default Home
