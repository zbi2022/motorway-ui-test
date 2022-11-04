import { createUseStyles } from 'react-jss'
import { QueryClient } from '@tanstack/react-query'
import { PersistQueryClientProvider } from '@tanstack/react-query-persist-client'
import { createSyncStoragePersister } from '@tanstack/query-sync-storage-persister'

import PostsPage from '@pages/PostsPage'

import globalStyles from '@styles/globalStyles'

const useStyles = createUseStyles(globalStyles)

const queryClient = new QueryClient()
const persister = createSyncStoragePersister({
  storage: window.sessionStorage,
})

const App = () => {
  useStyles()

  return (
    <div>
      <PersistQueryClientProvider client={queryClient} persistOptions={{ persister }}>
        <PostsPage />
      </PersistQueryClientProvider>
    </div>
  )
}

export default App
