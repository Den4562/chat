const loginUser = { flexDirection: row };
const outherUsers = {};

export function styleMessageByUser(messages, user) {
  return messages.uid === user.uid ? loginUser : outherUsers;
}
