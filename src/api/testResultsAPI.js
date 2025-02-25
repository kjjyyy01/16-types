import { jsonServerAPI } from "../axios/api";

export const addResult = async (testResult) => {
  try {
    await jsonServerAPI.post("/testResults", testResult);
  } catch (error) {
    console.error(error);
  }
};

export const removeResult = async (id) => {
  try {
    await jsonServerAPI.delete(`/testResults/${id}`);
  } catch (error) {
    console.error(error);
  }
};

export const getResult = async () => {
  try {
    const response = await jsonServerAPI.get("/testResults");
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateProfile = async () => {
  try {
    const response = await jsonServerAPI.patch(`/testResults`);
    return response.data;
  } catch (error) {
    console.error(error);
  }
};

export const updateResultVisibility = async (data) => {
  try {
    const response = await jsonServerAPI.patch(`/testResults/${data.id}`, { visibility: data.visibility });
    return response.data;
  } catch (error) {
    console.error(error);
  }
};
