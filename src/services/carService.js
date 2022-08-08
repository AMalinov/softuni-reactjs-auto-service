const URL = "http://localhost:3030/jsonstore";

export async function getAllCars() {
  let response = await fetch(`${URL}/car`);

  let result = await response.json();

  if (response.ok) {
    return Object.values(result);
  } else {
    throw result;
  }
}

export async function getOneCar(carId) {
  let response = await fetch(`${URL}/car/${carId}`);

  let result = await response.json();
  return result;
}

export async function addCar(carData, token) {
  let response = await fetch(`${URL}/car`, {
    method: "POST",
    headers: {
      "content-type": "application-json",
      "X-Authorization": token,
    },
    body: JSON.stringify({ ...carData }),
  });

  let result = await response.json();
  return result;
}

export async function editCar(carId, carData, token) {
  let response = await fetch(`${URL}/car/${carId}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
      "X-Authorization": token,
    },
    body: JSON.stringify(carData),
  });
  let result = await response.json();
  return result;
}

export async function deleteCar(carId, token) {
  let response = await fetch(`${URL}/car/${carId}`, {
    method: "DELETE",
    headers: {
      "X-Authorization": token,
    },
  });

  let result = await response.json();
  return result;
}