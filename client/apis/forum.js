import request from 'superagent'

export function getPosts () {
  return request.get('/api/v1/posts')
    .then(res => {
      res.body.forEach((post) => validateNoSnakeCase(post))
      return res.body
    })
    .catch(errorHandler('GET', '/api/v1/posts'))
}

export function addPost (post) {
  // convert the large paragraphs string into an array of paragraphs
  post.paragraphs = post.paragraphs.split('\n')
  return request.post('/api/v1/posts')
    .send(post)
    .then(res => {
      validateNoSnakeCase(res.body)
      validatePostResponse('POST', '/api/v1/posts', res.body)
      return res.body
    })
    .catch(errorHandler('POST', '/api/v1/posts'))
}

export function updatePost (post) {
  // convert the large paragraphs string into an array of paragraphs
  post.paragraphs = post.paragraphs.split('\n')
  return request.patch(`/api/v1/posts/${post.id}`)
    .send(post)
    .then(res => {
      validateNoSnakeCase(res.body)
      validatePostResponse('PATCH', '/api/v1/posts/:id', res.body)
      return res.body
    })
    .catch(errorHandler('PATCH', '/api/v1/posts/:id'))
}

export function deletePost (postId) {
  return request.del(`/api/v1/posts/${postId}`)
    .then(res => res)
    .catch(errorHandler('DELETE', '/api/v1/posts/:id'))
}

function errorHandler (method, route) {
  return (err) => {
    if (err.message === 'Not Found') {
      throw Error(`Error: You need to implement an API route for ${method} ${route}`)
    } else {
      throw Error(`${err.message} on ${method} ${route}`)
    }
  }
}

function validateNoSnakeCase (response) {
  const hasSnakeCase = Object.keys(response).some(key => key.includes('_'))
  if (hasSnakeCase) {
    throw Error('Error: you should not be returning properties in snake_case')
  }
}

function validatePostResponse (method, route, post) {
  if (!post) {
    throw Error(`Error: ${method} ${route} should return a blog post`)
  }

  const { title, paragraphs } = post

  if (!title || !paragraphs) {
    throw Error(`Error: ${method} ${route} is not returning a correct blog post`)
  }
}

function validateCommentResponse (method, route, comment) {
  if (!post) {
    throw Error(`Error: ${method} ${route} should return a comment`)
  }

  const { title, paragraphs } = comment

  if (!title || !paragraphs) {
    throw Error(`Error: ${method} ${route} is not returning a correct comment`)
  }
}
