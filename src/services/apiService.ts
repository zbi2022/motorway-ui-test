import apiClient from '@clients/apiClient'

export type User = {
  'id': string,
  'updated_at': string,
  'username': string,
  'name': string,
  'first_name': string,
  'last_name': string,
  'bio': string
  'location': string | null
  'profile_image': string
  'total_collections': number,
  'total_likes': number,
  'total_photos': number
}

export type PostedImage = {
  'id': string,
  'created_at': string,
  'updated_at': string,
  'color': string,
  'description': string
  'alt_description': string
  'categories': string[],
  'likes': number,
  'user': User,
  'url': string
}

export type GetImagesResponse = PostedImage[]

export namespace images {
  export const list = (opts: { limit?: number }) => apiClient.get<GetImagesResponse>('/images', opts)
}
