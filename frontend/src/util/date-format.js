export const formatDate = (dateStr) =>
  dateStr ? new Date(dateStr).toLocaleDateString('en-US'): "N/A";