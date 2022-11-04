import { useEffect, useState } from 'react'

import { PostedImage } from '@services/apiService'

import useDebounce from '@hooks/useDebounce'

import Footer from '@components/Footer'
import Posts from '@components/Posts'
import PageSectionLayout from '@components/PageSectionLayout'
import ContactForm from '@components/forms/ContactForm'
import PostModal from '@components/PostModal'
import SearchBar from '@components/SearchBar'
import Input from '@components/ui/Input'

const PostsPage = () => {
  const { limit = '10', search: initialSearch = ''} = new URLSearchParams(window.location.search) as { limit?: string, search?: string }

  const [selectedPost, setSelectedPost] = useState<PostedImage>()
  const [search, setSearch] = useState<string>(initialSearch)
  const debouncedSearch = useDebounce(search)

  useEffect(() => {
    const queryParams = new URLSearchParams({ search: debouncedSearch || '' }).toString()
    window.history.pushState({}, '', queryParams)
  }, [debouncedSearch])

  return (
    <div>
      <SearchBar>
        <p>Search:</p>
        <Input defaultValue={search} name='search' onChange={e => setSearch(e.target.value)}/>
      </SearchBar>
      <PageSectionLayout>
        <Posts onSelectPost={setSelectedPost} search={debouncedSearch} limit={+limit} />
      </PageSectionLayout>
      <Footer>
        <ContactForm onSubmit={data => alert(JSON.stringify(data, null, 2))} />
      </Footer>
      {selectedPost && <PostModal open={!!selectedPost} post={selectedPost} onClose={() => setSelectedPost(undefined)} />}
    </div>
  )
}

export default PostsPage
