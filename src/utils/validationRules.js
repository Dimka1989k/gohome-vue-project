export const isRequired = (val) => ({
  hasPassed: !!val,
  message: "Fill out this field, please",
});

export const charLimit = (limit) => (val) => ({
  hasPassed: val.length <= limit,
  message: "You have exceeded the limit",
});
