export function truncateTitle(text) {
  if (text.length > 20 && text.slice(0, 20) !== text + '...') {
    return text.slice(0, 20) + '...';
  } else {
    return text;
  }
}

export function truncateDesc(text) {
  if (text.length > 16 && text.slice(0, 16) !== text + '...') {
    return text.slice(0, 16) + '...';
  } else {
    return text;
  }
}
