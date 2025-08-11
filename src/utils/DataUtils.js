export default {
  formatDate(dateString) {
    return new Date(dateString).toLocaleDateString('vi-VN', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric',
    });
  },
  checkSuccessfully(res) {
    if (res?.success == true) {
      return true;
    }
    if (res?.code == 0) {
      return true;
    }
    return false;
  },
};
