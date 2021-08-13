import sendRequest from './send-request';

const BASE_URL = '/api/uploads';

export function getAll() {
  return sendRequest(BASE_URL);
}

export function upload(formData) {
  // See refactored sendRequest function that now accepts a 4th arg
  // used to specify that the payload is a FormData object
  return sendRequest(BASE_URL, 'POST', formData, true);
}

export async function createComments(data, uploadId) {
  return sendRequest(`${BASE_URL}/${uploadId}/comment/create/`, 'POST', data);
}

export async function updateComments(uploadId, commentId) {
  return sendRequest(`${BASE_URL}/${uploadId}/comment/update/${commentId}`, 'UPDATE');
}

export async function deleteComments(uploadId, commentId) {
  return sendRequest(`${BASE_URL}/${uploadId}/comment/delete/${commentId}`, 'DELETE');
}