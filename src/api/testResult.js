import { jsonServerAPI } from "../axios/api";

export const addResult = async (newResult) => {
  const response = await jsonServerAPI.post("/testResults", newResult);
  return response.data;
};
export const updateResult = async (newResult) => {
  const response = await jsonServerAPI.patch("/testResults", newResult);
  return response.data;
};
export const removeResult = async (newResult) => {
  const response = await jsonServerAPI.delete("/testResults", newResult);
  return response.data;
};
