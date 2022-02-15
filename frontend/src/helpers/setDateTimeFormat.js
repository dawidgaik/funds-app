const setDateTimeFormat = (date) => {
  return new Intl.DateTimeFormat('en-GB', {
    month: 'numeric',
    day: 'numeric',
    year: 'numeric',
  }).format(new Date(date));
};

export { setDateTimeFormat };
