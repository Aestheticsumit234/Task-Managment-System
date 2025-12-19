export function getInitials(fullname) {
  const name = fullname.split(" ");
  const initials = name.slice(0, 2).map((name) => name[0].toUpperCase());
  const initialsString = initials.join("");
  return initialsString;
}
