import React from 'react'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import PostsComponent from './components/PostsComponent';
import './index.css'

const queryClient = new QueryClient();
 
function App() {
 
  return (
    <QueryClientProvider client={queryClient}>
        <PostsComponent />
      </QueryClientProvider>
  )
}

export default App
