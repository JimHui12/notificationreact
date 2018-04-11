import axios from 'axios';

export function fetchNotifications() {
    return axios.get('/notifications')
}

export function  fetchNotificationsByID(id) {
    return axios.get(`/notifications/${id}`)   
}

export function createNotification(notifications) {
    return axios.post('/notifications',notifications);
}

export function deleteNotificationByID(id) {
    return axios.delete(`/notifications/${id}`);
}

export function updateNotificationsByID(id,notifications) {
    return axios.put(`/notifications/${id}`,notifications)
}