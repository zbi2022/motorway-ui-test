import { PostedImage } from '@services/apiService'

import Post from '@components/Post'
import Modal from '@components/ui/Modal'

type PostModalProps = {
  post?: PostedImage,
  open?: boolean,
  onClose: () => void
}

const PostModal = ({ open, post, onClose }: PostModalProps) => {

  return (
    <Modal open={open} onClose={onClose}>
      <Post extended post={post} onClose={onClose} />
    </Modal>
  )
}

export default PostModal

