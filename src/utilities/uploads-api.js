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
  return sendRequest(`${BASE_URL}/${uploadId}/comments`, 'POST', data);
}

export async function deleteComments(commentId) {
  return sendRequest(`/api/comments/${commentId}`, 'DELETE');
}

export async function followUser(userId) {
  return sendRequest('/api/follows', 'POST', {userId: userId});
}

export async function getCategories() {
  return sendRequest('/api/categories');
}

export async function getHashtags() {
  return sendRequest('/api/hashtags');
}

export async function getForYouVideos() {
  return sendRequest(`${BASE_URL}/forYou`);
}

export async function userVideosIFollow() {
  return sendRequest(`${BASE_URL}/followVid`);
}

export async function getLikedVideos() {
  return sendRequest(`${BASE_URL}/likedVideos`);
}

export async function createLike(id) {
  return sendRequest(`${BASE_URL}/${id}/likes`, 'POST');
}

export async function getFavoritedVideos() {
  return sendRequest(`${BASE_URL}/favoritedVideos`);
}

export async function createFavorite(id) {
  return sendRequest(`${BASE_URL}/${id}/favorites`, 'POST');
}