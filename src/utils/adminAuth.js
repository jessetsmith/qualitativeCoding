const ENCODED_CREDENTIALS = 'Yml0dGVyc3dlZXQ6QldyZXNlYXJjaDEyMzQ1IQ=='; // base64 of "bittersweet:BWresearch12345!"
const ADMIN_STORAGE_KEY = 'adminAuthed';

function decodeCredentials() {
  try {
    if (typeof atob !== 'function') return '';
    return atob(ENCODED_CREDENTIALS);
  } catch {
    return '';
  }
}

export function checkAdminCredentials(username, password) {
  const decoded = decodeCredentials();
  if (!decoded) {
    return false;
  }
  const [expectedUser, expectedPass] = decoded.split(':');
  return username === expectedUser && password === expectedPass;
}

export function markAdminLoggedIn() {
  try {
    window.localStorage.setItem(ADMIN_STORAGE_KEY, '1');
  } catch {
    // ignore
  }
}

export function clearAdminLogin() {
  try {
    window.localStorage.removeItem(ADMIN_STORAGE_KEY);
  } catch {
    // ignore
  }
}

export function isAdminLoggedIn() {
  try {
    return window.localStorage.getItem(ADMIN_STORAGE_KEY) === '1';
  } catch {
    return false;
  }
}

