function makeFriendsList(friends) {
  // ваш код...
  let newUl = document.createElement('UL');
  for (const friend of friends) {
    let user = `${friend.firstName} ${friend.lastName}`;
    let newli = document.createElement('LI');
    newli.innerText = user;
    newUl.append(newli);
  }
  return newUl;
}
