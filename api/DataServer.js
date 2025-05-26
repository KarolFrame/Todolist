const URL = "http://localhost:4000/lists";
const GetLists = async () => {
  const response = await fetch(URL, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = await response.json();
  return data;
};

const PostList = async (newList) => {
  const response = await fetch(URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newList),
  });
  const data = await response.json();
  return data;
};

const PutList = async (id, updatedList) => {
  const response = await fetch(`${URL}/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedList),
  });
  const data = await response.json();
  return data;
};

const DeleteList = async (id) => {
  const response = await fetch(`${URL}/${id}`, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};

export default { GetLists, PostList, PutList, DeleteList };
