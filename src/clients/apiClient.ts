export class ApiError extends Error {
  status: number

  constructor(message: string, status: number) {
    super(message)
    this.status = status

    Object.setPrototypeOf(this, ApiError.prototype)
  }
}

const fetchClient = (basePath: string) =>
  (method: RequestInit['method']) => async <T = unknown>(path: string, params?: Record<string, string|number>) => {
    const searchParams = new URLSearchParams(params as Record<string,string>)
    const url = new URL(path, basePath)
    url.search = searchParams.toString()

    const response = await fetch(url, { method })

    if (!response.ok) {
      const responseText = await response.text()
      throw new ApiError(responseText, response.status)
    }

    const body = await response.json() as T
    return body
  }

const appFetchClient = fetchClient('http://localhost:3000')

const apiClient = {
  get: appFetchClient('GET')
}

export default apiClient

