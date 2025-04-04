
import Counter from './counter'
import Batsman from './batsman'
import Users from './users'
import Friends from './friends'
import './App.css'
import { Suspense } from 'react'
import Post from './post'
const fetchUsers = fetch('https://jsonplaceholder.typicode.com/users')
.then(res => res.json())

const fetchFriends = async() =>{
    const res = await fetch('https://jsonplaceholder.typicode.com/users')
    return res.json();
}
const fetchPost = async() =>{
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
  return res.json()
}
function App() {
  const friendsPromise = fetchFriends();
  const postPromise = fetchPost();
  function hnadleBtn() {
    alert('i am click 1')
  }
  return (
    <>

      <h3>Vite + React</h3>
      <Suspense fallback={<h3>post are coming...</h3>}>
          <Post postPromise={postPromise}></Post>        
      </Suspense>
      <Suspense fallback ={<h3>loading...</h3>}>
          <Users fetchUsers = {fetchUsers}></Users>
      </Suspense>
      <Suspense fallback={<h3>friends are coming....</h3>}>
           <Friends friendsPromise = {friendsPromise}></Friends>
      </Suspense>
      <Batsman></Batsman>
      <Counter ></Counter>
      <button onClick={hnadleBtn}>click-1</button>
      <button onClick={() => alert('i am click 2')}>click-2</button>
    </>
  )
}

export default App
