import axios from "axios";

const baseUrl = "https://6060930204b05d0017ba2b85.mockapi.io/api/v1/speakers";

export async function getSpeakers() {
  try {
    const response = await axios({
      url: baseUrl,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.error("Error al llamar speakers : " + e);
    return e;
  }
}

export async function saveSpeaker(speaker) {
  try {
    const response = await axios({
      url: baseUrl,
      method: "POST",
      data: speaker,
    });
    return response;
  } catch (e) {
    console.error("Error al crear speaker : " + e);
    return e;
  }
}

export async function getSpeaker(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/${id}`,
      method: "GET",
    });
    return response;
  } catch (e) {
    console.error("Error al llamar speaker : " + e);
    return e;
  }
}

export async function updateSpeaker(speaker) {
  try {
    const response = await axios({
      url: `${baseUrl}/${speaker.id}`,
      method: "PUT",
      data: speaker,
    });
    return response;
  } catch (e) {
    console.error("Error al actualizar speaker : " + e);
    return e;
  }
}

export async function deleteSpeaker(id) {
  try {
    const response = await axios({
      url: `${baseUrl}/${id}`,
      method: "DELETE",
    });
    return response;
  } catch (e) {
    console.error("Error al eliminar speaker : " + e);
    return e;
  }
}
